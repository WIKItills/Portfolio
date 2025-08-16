// EmailJS Configuration
// Replace these placeholder values with your actual EmailJS credentials

const EMAILJS_CONFIG = {
    // Your EmailJS Public Key (found in Account > API Keys)
    PUBLIC_KEY: "MZWrNtNbVjdVklItx",
    
    // Your EmailJS Service ID (found in Email Services)
    SERVICE_ID: "service_v17hfym",
    
    // Your EmailJS Template ID (found in Email Templates)
    TEMPLATE_ID: "template_q8veclt",
    
    // Recipient email address
    RECIPIENT_EMAIL: "connectwithvishantgiri@gmail.com"
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EMAILJS_CONFIG;
} else {
    // For browser usage
    window.EMAILJS_CONFIG = EMAILJS_CONFIG;
}
