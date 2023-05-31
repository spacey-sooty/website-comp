"use client"
import React from 'react'
import Link from 'next/link'
import '@/styles/page.css'

export default class NavBar extends React.Component{
  constructor(props: string) {super(props);}

 Test() {
  console.log(window.location.href)
  return(window.location.href)
 }

 Location(url: string) {
  var loc = this.Test() == url ? "yellow" : "white";
  return loc
  console.log(loc)
 }

 clickHandler2 = (location1: string) => {
    return (event: React.MouseEvent) => {
      this.Location(location1)
    }
  }


 clickHandler = () => {
  return (event: React.MouseEvent) => {
    this.Test()
    event.preventDefault()
  }
 }

  render(): React.JSX.Element {
      return ( 
        <div>
          <>
          <div>
          <div className='navbar'>
            <div id="margin20">
              <Link href="/" className={this.Location("https:localhost:3000/")}>
              {/* <Link href="/"> */}
                Home
              </Link>
            </div>
            <div id="margin20">
              <Link href="/about" className={this.Location("https:localhost:3000/about")}>
              {/* <Link href="/about"> */}
                About
              </Link>
            </div>
            <div id="margin20">
              <Link href="/contact" className={this.Location("https:localhost:3000/contact")}>
                Contact
              </Link>
            </div>
            <div id="margin20">
              <Link href="/image" className={this.Location("https:localhost:3000/image")}>
                Image
              </Link>
            </div>
            <div id="margin20">
            </div>
              <button type='button' onClick={this.clickHandler()}>
                Location
              </button>
              <button type='button' onClick={this.clickHandler2("/hello")}>
                Location?
              </button>
            </div>
        </div>
          </>
        </div> )
  }
}