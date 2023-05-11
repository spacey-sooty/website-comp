"use client";
import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import styles from './page.module.css'
import about from '@/pages/about';
import home from '@/pages/home';
import contact from '@/pages/contact'

var _home = home;
var _about = about;
var _contact = contact;

function NavBar() {
  return (
    <>
			<BrowserRouter>
				<div style={{
					display: "flex",
					background: 'black',
					padding: '5px 0 5px 5px',
					fontSize: '25px'
				}}>
					<div style={{ margin: '10px' }}>
						<NavLink to="/" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							Home
						</NavLink>
					</div>
					<div style={{ margin: '10px' }}>
						<NavLink to="/about" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							About
						</NavLink>
					</div>
					<div style={{ margin: '10px' }}>
						<NavLink to="/contact" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							Contact
						</NavLink>
					</div>
				</div>
				<Routes>
					<Route exact path="/" element={<_home />} />
					<Route exact path="/about" element={<_about />} />
					<Route exact path="/contact" element={<_contact />} />
				</Routes>
			</BrowserRouter>
		</>
  )
}

export default NavBar;