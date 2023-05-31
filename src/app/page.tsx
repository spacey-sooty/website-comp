"use client";
import '@/styles/page.css'
import dynamic from 'next/dynamic';

var Home;
export default Home = dynamic(() => import('./display'), {
  ssr: false
});