export const emailConfig = {
  // SMTP configuration - replace with your email service provider details
  smtp: {
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || "your-email@gmail.com", // Replace with your email
      pass: process.env.SMTP_PASS || "your-app-password", // Replace with your app password
    },
  },
  
  // Email addresses
  from: process.env.FROM_EMAIL || "noreply@smartscope.com",
  to: process.env.TO_EMAIL || "support@smartscope.com", // Where contact form emails should be sent
  
  // Email templates
  templates: {
    contactNotification: {
      subject: "New Contact Form Submission - SmartScope",
      html: (data: any) => `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `
    },
    
    contactConfirmation: {
      subject: "Thank you for contacting SmartScope",
      html: (data: any) => `
        <h2>Thank you for your inquiry!</h2>
        <p>Dear ${data.name},</p>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <p>Best regards,<br>The SmartScope Team</p>
      `
    }
  }
};
