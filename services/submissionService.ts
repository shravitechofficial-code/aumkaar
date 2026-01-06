
import { SUBMISSION_WEBHOOK_URL } from '../constants';

/**
 * Unified Submission Interface
 * Every field is technically required to maintain 
 * column alignment in the backend (e.g., Google Sheets).
 */
export interface FormSubmission {
  timestamp: string;
  formType: 'Lead Magnet' | 'General Contact' | 'Service Inquiry' | 'Event Registration';
  name: string;
  email: string;
  phone: string;     // Use "" or "N/A" if not captured
  service: string;   // Use "General" or specific Service Name
  message: string;   // Use "" or specific details
  pageUrl: string;
}

export const submitForm = async (data: FormSubmission): Promise<boolean> => {
  try {
    // 1. Save to Local Backup (LocalStorage) for redundancy
    const existing = JSON.parse(localStorage.getItem('aumkaar_submissions_backup') || '[]');
    localStorage.setItem('aumkaar_submissions_backup', JSON.stringify([...existing, data]));
    
    console.log(`--- Submitting ${data.formType} ---`);
    console.table(data);

    // 2. Submit to Google Sheets Webhook
    if (SUBMISSION_WEBHOOK_URL) {
      // We use a clean object to ensure no undefined keys are sent
      const payload = {
        timestamp: data.timestamp || new Date().toISOString(),
        formType: data.formType,
        name: data.name || "",
        email: data.email || "",
        phone: data.phone || "",
        service: data.service || "",
        message: data.message || "",
        pageUrl: data.pageUrl || window.location.href
      };

      const response = await fetch(SUBMISSION_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      // With 'no-cors', we can't check response.ok, so we assume success if no error is thrown
      return true;
    } else {
      console.warn('SUBMISSION_WEBHOOK_URL not configured.');
      return true;
    }
  } catch (error) {
    console.error('Submission failed:', error);
    return false;
  }
};
