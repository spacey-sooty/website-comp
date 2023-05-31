"use client";
import '@/styles/page.css'
import dynamic from 'next/dynamic';

var about;
export default about = dynamic(() => import('./display'), {
  ssr: false
});