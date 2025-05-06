import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { message: 'Invalid email' },
        { status: 400 }
      );
    }

    const response = await axios.post(
      'https://api.brevo.com/v3/contacts',
      {
        email,
        listIds: [6],
        updateEnabled: true
      },
      {
        headers: {
          'api-key': process.env.BREVO_API_KEY,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      }
    );

    return NextResponse.json(
      { message: 'Successfully subscribed' },
      { status: 200 }
    );
  } catch (error) {
    console.error(error.response?.data || error.message);
    return NextResponse.json(
      { message: 'Subscription failed' },
      { status: 500 }
    );
  }
}
