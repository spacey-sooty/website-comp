"use client";
import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import about from '@/pages/about';
import home from '@/pages/home';
import contact from '@/pages/contact'
import image from '@/pages/image'
import '@/styles/page.module.css'

var _home = home;
var _about = about;
var _contact = contact;
var _image = image;

function NavBar() {
  return (
		<div> 
			<>
			<BrowserRouter>
				<div style={{
					display: "flex",
					background: 'black',
					margin: '-10px',
					padding: '0px',
					fontSize: '30px',
					overflow: 'hidden',
					position: 'fixed',
  					top: '0',
  					width: '100%',
				}}>
					<div style={{ margin: '20px' }}>
						<NavLink to="/" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							Home
						</NavLink>
					</div>
					<div style={{ margin: '20px' }}>
						<NavLink to="/about" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							About
						</NavLink>
					</div>
					<div style={{ margin: '20px' }}>
						<NavLink to="/contact" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							Contact
						</NavLink>
					</div>
					<div style={{ margin: '20px' }}>
						<NavLink to="/image" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							Image
						</NavLink>
					</div>
				</div>
				<Routes>
					<Route path="/" element={<_home />} />
					<Route path="/about" element={<_about />} />
					<Route path="/contact" element={<_contact />} />
					<Route path="/image" element={<_image />} />
				</Routes>
			</BrowserRouter>
		</>
		</div>
    
  )
}

export default NavBar;