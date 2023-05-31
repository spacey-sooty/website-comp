"use client";
import '@/styles/page.css'
import dynamic from 'next/dynamic';

var Contact;
export default Contact = dynamic(() => import('./display'), {
  ssr: false
});