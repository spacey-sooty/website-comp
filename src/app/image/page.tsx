"use client";
import '@/styles/page.css'
import dynamic from 'next/dynamic';

var imAge;
export default imAge = dynamic(() => import('./display'), {
  ssr: false
});