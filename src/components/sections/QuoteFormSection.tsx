import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ArrowRight, CheckCircle, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const QuoteFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: 5000,
    message: ''
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [budgetInput, setBudgetInput] = useState('5000');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const cursorPositionRef = useRef<number>(0);

  useEffect(() => {
    if (isInputFocused && inputRef.current) {
      inputRef.current.setSelectionRange(cursorPositionRef.current, cursorPositionRef.current);
    }
  }, [budgetInput, isInputFocused]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsPopupOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 10;
    const clampedValue = Math.min(Math.max(value, 10), 200000);
    setFormData({
      ...formData,
      budget: clampedValue
    });
    // Only update input if user is not currently typing in it
    if (!isInputFocused) {
      setBudgetInput(clampedValue.toString());
    }
  };

  const handleBudgetInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const cursorPosition = e.target.selectionStart || 0;

    // Allow empty string or numbers only
    if (value === '' || /^\d+$/.test(value)) {
      cursorPositionRef.current = cursorPosition;
      setBudgetInput(value);
    }
  };

  const handleBudgetInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleBudgetInputBlur = () => {
    setIsInputFocused(false);
    if (budgetInput === '' || parseInt(budgetInput) < 10) {
      setFormData({
        ...formData,
        budget: 10
      });
      setBudgetInput('10');
    } else {
      const numValue = parseInt(budgetInput);
      const clampedValue = Math.min(Math.max(numValue, 10), 200000);
      setFormData({
        ...formData,
        budget: clampedValue
      });
      setBudgetInput(clampedValue.toString());
    }
  };


  const formatBudget = (value: number) => {
    if (value < 1000) {
      return `$${value}`;
    } else if (value < 1000000) {
      return `$${(value / 1000).toFixed(0)}k`;
    } else {
      return `$${(value / 1000000).toFixed(1)}M`;
    }
  };

  const FormContent = useMemo(() => (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-[#0F172A] mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E7107E] focus:border-transparent transition-all"
          placeholder="John Doe"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-[#0F172A] mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E7107E] focus:border-transparent transition-all"
          placeholder="john@company.com"
        />
      </div>

      {/* Company & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-[#0F172A] mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E7107E] focus:border-transparent transition-all"
            placeholder="Company Inc."
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-[#0F172A] mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E7107E] focus:border-transparent transition-all"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      {/* Project Type */}
      <div>
        <label htmlFor="projectType" className="block text-sm font-semibold text-[#0F172A] mb-2">
          Project Type *
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          value={formData.projectType}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E7107E] focus:border-transparent transition-all"
        >
          <option value="">Select project type</option>
          <option value="web">Web Application</option>
          <option value="mobile">Mobile App</option>
          <option value="ecommerce">E-Commerce Platform</option>
          <option value="crm">CRM System</option>
          <option value="saas">SaaS Product</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Budget Slider */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label htmlFor="budget" className="block text-sm font-semibold text-[#0F172A]">
            Estimated Budget
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">$</span>
            <input
              ref={inputRef}
              type="text"
              inputMode="numeric"
              value={budgetInput}
              onChange={handleBudgetInputChange}
              onFocus={handleBudgetInputFocus}
              onBlur={handleBudgetInputBlur}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleBudgetInputBlur();
                  e.currentTarget.blur();
                }
              }}
              className="w-32 pl-7 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E7107E] focus:border-transparent transition-all text-sm font-semibold text-[#E7107E]"
              placeholder="5000"
              autoComplete="off"
            />
          </div>
        </div>
        <input
          type="range"
          id="budget"
          name="budget"
          min="10"
          max="200000"
          step="10"
          value={formData.budget}
          onChange={handleBudgetChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>$10</span>
          <span>$200k+</span>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: #E7107E;
          cursor: pointer;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(231, 16, 126, 0.3);
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #E7107E;
          cursor: pointer;
          border-radius: 50%;
          border: none;
          box-shadow: 0 2px 8px rgba(231, 16, 126, 0.3);
        }

        .slider::-webkit-slider-runnable-track {
          background: linear-gradient(to right, #E7107E 0%, #E7107E ${((formData.budget - 10) / (200000 - 10)) * 100}%, #e5e7eb ${((formData.budget - 10) / (200000 - 10)) * 100}%, #e5e7eb 100%);
          height: 8px;
          border-radius: 4px;
        }

        .slider::-moz-range-track {
          background: #e5e7eb;
          height: 8px;
          border-radius: 4px;
        }

        .slider::-moz-range-progress {
          background: #E7107E;
          height: 8px;
          border-radius: 4px;
        }
      `}</style>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#0F172A] mb-2">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E7107E] focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your project, goals, and timeline..."
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full bg-[#E7107E] hover:bg-[#c00e6b] text-white font-bold text-sm uppercase px-10 py-7 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        Send Request
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>

      <p className="text-xs text-gray-500 text-center">
        We'll respond within 24 hours. Your information is kept confidential.
      </p>
    </form>
  ), [formData, budgetInput, handleSubmit, handleChange, handleBudgetChange, handleBudgetInputChange, handleBudgetInputFocus, handleBudgetInputBlur, inputRef, isInputFocused]);

  return (
    <>
      {/* Floating CTA Button */}
      <button
        onClick={() => setIsPopupOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-[#E7107E] hover:bg-[#c00e6b] text-white font-bold text-sm uppercase px-8 py-4 rounded-full shadow-2xl hover:shadow-xl transition-all duration-200 flex items-center gap-2 animate-pulse hover:animate-none"
      >
        Get a Quote
        <ArrowRight className="h-5 w-5" />
      </button>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
              <h3 className="text-2xl font-bold text-[#0F172A]">Get Your Free Quote</h3>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>
            <div className="p-6 lg:p-8">
              {FormContent}
            </div>
          </div>
        </div>
      )}

      {/* Main Section */}
      <section id="quote-form" className="py-24 lg:py-32 bg-[#F8F9FC]">
      <div className="container max-w-[1200px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Info */}
          <div>
            <span className="inline-flex items-center px-4 py-2 text-sm font-semibold text-[#E7107E] bg-white rounded-full border border-[#E7107E]/20 mb-6">
              Get Started
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 leading-tight">
              Let's build something amazing together
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Tell us about your project and we'll get back to you within 24 hours with a detailed proposal and timeline.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#E7107E] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0F172A]">Free consultation</p>
                  <p className="text-sm text-gray-600">No-obligation initial assessment</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#E7107E] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0F172A]">Quick response</p>
                  <p className="text-sm text-gray-600">We respond within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#E7107E] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0F172A]">Transparent pricing</p>
                  <p className="text-sm text-gray-600">Clear breakdown of costs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#E7107E] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0F172A]">Dedicated team</p>
                  <p className="text-sm text-gray-600">Expert developers for your project</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-[#0F172A]">250+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0F172A]">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            {FormContent}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default QuoteFormSection;
