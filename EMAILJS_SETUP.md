# EmailJS Setup Guide for Vishant Portfolio

## Overview
This guide will help you set up EmailJS to enable email functionality in your portfolio contact form.

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your Gmail account (connectwithvishantgiri@gmail.com)
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

**Subject:** New Portfolio Contact: {{subject}}

**Email Body:**
```
Hello Vishant,

You have received a new message from your portfolio website:

**Name:** {{from_name}}
**Email:** {{from_email}}
**Subject:** {{subject}}
**Message:**
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_def456`)

## Step 5: Update Your Code
Replace the placeholder values in `script.js`:

```javascript
// Line 157: Replace YOUR_PUBLIC_KEY
emailjs.init("user_def456");

// Line 207: Replace YOUR_SERVICE_ID
emailjs.send('service_abc123', 'template_xyz789', templateParams)
```

## Step 6: Test the Setup
1. Fill out the contact form on your portfolio
2. Submit the form
3. Check your email (connectwithvishantgiri@gmail.com)
4. Check the browser console for any errors

## Troubleshooting
- **EmailJS not loaded**: Check if the CDN script is loading properly
- **Service ID error**: Verify the service ID in your EmailJS dashboard
- **Template ID error**: Verify the template ID in your EmailJS dashboard
- **Public key error**: Verify the public key in your account settings

## Security Notes
- The public key is safe to expose in frontend code
- Never share your private keys or service credentials
- EmailJS handles the email sending securely

## Free Plan Limits
- 200 emails per month
- Basic email templates
- Gmail, Outlook, and other major providers supported

## Support
- EmailJS Documentation: [docs.emailjs.com](https://docs.emailjs.com/)
- EmailJS Community: [community.emailjs.com](https://community.emailjs.com/)
