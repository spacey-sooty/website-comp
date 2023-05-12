"use client";
import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import styles from '@/styles/page.module.css'
import about from '@/pages/about';
import home from '@/pages/home';
import contact from '@/pages/contact'
import NavBar from '@/components/navbar'

var _home = home;
var _about = about;
var _contact = contact;

export default function Home() {
  return (
    NavBar()
  )
}