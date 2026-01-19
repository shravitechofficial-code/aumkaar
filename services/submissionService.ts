
import { SUBMISSION_WEBHOOK_URL } from '../constants';

export interface FormSubmission {
  timestamp: string;
  formType: 'Lead Magnet' | 'General Contact' | 'Service Inquiry' | 'Event Registration' | 'Newsletter';
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  pageUrl: string;
  preferredDate?: string;
  preferredTime?: string;
}

export const submitForm = async (data: FormSubmission): Promise<boolean> => {
  try {
    const existing = JSON.parse(localStorage.getItem('aumkaar_submissions_backup') || '[]');
    localStorage.setItem('aumkaar_submissions_backup', JSON.stringify([...existing, data]));
    
    if (SUBMISSION_WEBHOOK_URL) {
      const payload = {
        timestamp: data.timestamp || new Date().toISOString(),
        formType: data.formType,
        name: data.name || "",
        email: data.email || "",
        phone: data.phone || "",
        service: data.service || "",
        message: data.message || "",
        pageUrl: data.pageUrl || window.location.href,
        preferredDate: data.preferredDate || "N/A",
        preferredTime: data.preferredTime || "N/A"
      };

      await fetch(SUBMISSION_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      return true;
    }
    return true;
  } catch (error) {
    console.error('Submission failed:', error);
    return false;
  }
};
