import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, formType } = body;

    // Validate the request
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Attempting to send email with the following data:', { 
      name, email, subject, message, formType 
    });
    console.log('Using email account:', process.env.EMAIL_USER);
    
    // Set up email data depending on form type
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
      subject: formType === 'contact' 
        ? `Contact Form: ${subject || 'New Message'}` 
        : 'Quote Request',
      html: `
        <h2>${formType === 'contact' ? 'Contact Form Submission' : 'Quote Request'}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
        ${formType === 'quote' && body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
        ${formType === 'quote' && body.service ? `<p><strong>Service:</strong> ${body.service}</p>` : ''}
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', error.message);
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}