"use client"
import React from "react";
import Image from "next/image"
import '@/styles/globals.css'


const image = () => (
  <div>
    <Image className="down" src="/images/download.jpg" alt="lol" width={285} height={177}/>
  </div>
)

export default image;