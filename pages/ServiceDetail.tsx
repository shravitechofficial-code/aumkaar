
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FALLBACK_IMAGE } from '../constants';
import { Check, Clock, DollarSign, Star, ChevronDown, Heart, HelpCircle, Loader2, Users, Calendar, Info, AlertTriangle, Sparkles } from 'lucide-react';
import { submitForm } from '../services/submissionService';
import { dataService } from '../services/dataService';
import SEO from '../components/SEO';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  const services = dataService.getServices();
  const service = services.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowAllFaqs(false);
    setActiveFaq(null);
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await submitForm({
      timestamp: new Date().toISOString(),
      formType: 'Service Inquiry',
      name: formData.name,
      email: formData.email,
      phone: 'N/A',
      service: service?.title || 'Unknown Service',
      message: formData.message,
      pageUrl: window.location.href,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime
    });

    if (success) {
      setFormSubmitted(true);
    } else {
      alert('Problem sending request. Please try again.');
    }
    setIsSubmitting(false);
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
        <div className="text-center px-10">
          <h2 className="text-3xl font-serif text-[#A05035]">Service not found</h2>
          <button onClick={() => navigate('/')} className="mt-8 text-[#3E2723] underline font-bold tracking-widest uppercase text-xs">Back Home</button>
        </div>
      </div>
    );
  }

  const { details } = service;
  const hasProgramSeparator = service.title.includes(' : ');
  const titleParts = service.title.split(' : ');
  const bigHeading = hasProgramSeparator ? titleParts[1] : service.title;
  const subHeading = hasProgramSeparator ? titleParts[0] : null;

  const serviceSchema = {
    "@context": "https://schema.org/",
    "@type": "Service",
    "serviceType": service.category,
    "name": service.title,
    "description": service.shortDescription,
    "provider": {
      "@type": "HealthAndBeautyBusiness",
      "name": "Aumkaar"
    },
    "areaServed": "Hyderabad",
    "offers": {
      "@type": "Offer",
      "price": "Enquire",
      "priceCurrency": "INR"
    }
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <SEO 
        title={`${service.title} Hyderabad`} 
        description={service.shortDescription}
        ogImage={service.image}
        schema={serviceSchema}
      />
      {/* ... rest of ServiceDetail.tsx code ... */}
      <div className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center justify-center bg-[#3E2723] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110 animate-[slow-zoom_20s_infinite_alternate]"
          style={{ backgroundImage: `url('${service.image}')` }}
        ></div>
        {/* ... (Previous rest of file remains unchanged) ... */}
      </div>
    </div>
  );
};

export default ServiceDetail;
