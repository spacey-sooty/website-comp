import React from "react";
import { NavLink } from "react-router-dom";
import img from "./images/download.jpg"
import Image from "next/image"

const image = () => (
  <div>
    <Image className="down" src="/images/download.jpg" alt="lol" width={285} height={177}/>
  </div>
)

export default image;