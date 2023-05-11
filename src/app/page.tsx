"use server";

import styles from './page.module.css'
import about from '@/pages/about';
import home from '@/pages/home';


export default function Home() {
  return (
    home()
  )
}