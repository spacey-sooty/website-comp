"use client"
import React from 'react'
import Link from 'next/link'
import '@/styles/page.css'


export default class NavBar extends React.Component{
  constructor(props: string) {super(props);}
  
  render(): React.ReactNode {
      return ( 
        <div>
          <>
          <div>
          <div className='navbar'>
            <div id="margin20">
              <Link href="/">
                Home
              </Link>
            </div>
            <div id="margin20">
              <Link href="/about">
                About
              </Link>
            </div>
            <div id="margin20">
              <Link href="/contact">
                Contact
              </Link>
            </div>
            <div id="margin20">
              <Link href="/image">
                Image
              </Link>
            </div>
            </div>
        {/* <BrowserRouter>
 				<Routes>
 					<Route path="/" element={<_home />} />
 					<Route path="/about" element={<_about />} />
 					<Route path="/contact" element={<_contact />} />
 					<Route path="/image" element={<_image />} />
 				</Routes>
 			  </BrowserRouter> */}
        </div>
          </>
        </div> )
  }
}