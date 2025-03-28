import { toast } from "@/hooks/use-toast";

interface FormSubmitOptions {
  formType: 'contact' | 'quote';
  data: Record<string, any>;
  onSuccess?: () => void;
  onError?: () => void;
}

export const submitFormToAPI = async ({
  formType,
  data,
  onSuccess,
  onError
}: FormSubmitOptions) => {
  try {
    // Log the request to help with debugging
    console.log('Submitting form data:', { formType, data });

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        formType
      }),
    });

    console.log('API Response status:', response.status);
    
    // Check if response is ok before trying to parse JSON
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('API Response data:', result);

    if (!result.success) {
      throw new Error(result.error || 'Something went wrong');
    }

    toast({
      title: "Success!",
      description: formType === 'contact' 
        ? "Your message has been sent. We'll get back to you soon!" 
        : "Your quote request has been submitted successfully!",
      variant: "default",
    });

    if (onSuccess) onSuccess();
    return true;
  } catch (error) {
    console.error('Form submission error:', error);
    toast({
      title: "Error",
      description: error instanceof Error 
        ? error.message 
        : "Failed to submit form. Please try again later.",
      variant: "destructive",
    });
    
    if (onError) onError();
    return false;
  }
};
