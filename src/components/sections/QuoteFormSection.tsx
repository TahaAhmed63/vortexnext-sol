"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Lightbulb, Rocket, Send, CheckCircle } from 'lucide-react';
import { submitFormToAPI } from '@/utils/formUtils';
import { Toaster } from '@/components/ui/toaster';

const QuoteFormSection = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    console.log('Form submission initiated with data:', {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message
    });
    
    const success = await submitFormToAPI({
      formType: 'quote',
      data: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message
      },
      onSuccess: () => {
        setFormStatus('success');
        // Reset form after 5 seconds
        setTimeout(() => setFormStatus('idle'), 5000);
      },
      onError: () => {
        setFormStatus('error');
        // Return to idle state after 3 seconds
        setTimeout(() => setFormStatus('idle'), 3000);
      }
    });

    if (!success) {
      setFormStatus('error');
    }
  };

  return (
    <section id="quote-form" className="py-24 bg-white relative">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pinkish-red/10 rounded-full blur-[80px]"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-pinkish-red/10 border border-pinkish-red/30">
              <span className="text-sm font-medium text-pinkish-red">Get Started</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Ready to transform your <span className="text-gradient">business</span>?
            </h2>
            <p className="text-xl text-black">
              Fill out the form to get a customized quote for your project. Our team will analyze your needs and create a personalized solution.
            </p>
            
            <div className="space-y-8 pt-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-pinkish-red/10 text-pinkish-red">
                    <Sparkles className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-black">Quick Response</h3>
                  <p className="mt-1 text-black">We'll get back to you within 24 hours with an initial assessment</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-pinkish-red/10 text-pinkish-red">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-black">Free Consultation</h3>
                  <p className="mt-1 text-black">Schedule a call with our experts to discuss your requirements in detail</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-pinkish-red/10 text-pinkish-red">
                    <Rocket className="w-6 h-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-black">Detailed Proposal</h3>
                  <p className="mt-1 text-black">Receive a comprehensive proposal tailored to your specific needs</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form */}
          <div className="glass-card p-8 border border-pinkish-red/30">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center py-10 text-center">
                <div className="w-16 h-16 rounded-full bg-pinkish-red/20 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-pinkish-red" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  Your request has been submitted successfully. Our team will contact you shortly.
                </p>
                <Button
                  onClick={() => {
                    setFormStatus('idle');
                    setFormData({
                      firstName: '',
                      lastName: '',
                      email: '',
                      phone: '',
                      service: '',
                      message: '',
                    });
                  }}
                  variant="outline"
                  className="border-pinkish-red text-pinkish-red hover:bg-pinkish-red/10"
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      required 
                      className="w-full bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      required 
                      className="w-full bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="w-full bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-gray-700">Service Interested In</label>
                  <Select onValueChange={handleServiceChange} value={formData.service}>
                    <SelectTrigger className="w-full bg-white border-gray-300 text-gray-900">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-300">
                      <SelectItem value="ai-solutions">AI-Driven Solutions</SelectItem>
                      <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                      <SelectItem value="crm">CRM Development</SelectItem>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="mobile">Mobile App Development</SelectItem>
                      <SelectItem value="cloud">Cloud Infrastructure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Project Details</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project requirements..." 
                    rows={4} 
                    className="w-full resize-none bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="pt-2">
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-pinkish-red to-pinkish-red-light hover:opacity-90 text-white"
                    size="lg"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Submit Request <Send className="ml-2 h-5 w-5" />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default QuoteFormSection;
