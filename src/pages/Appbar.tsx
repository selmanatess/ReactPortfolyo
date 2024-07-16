import React, { useEffect, useRef, useState } from 'react'
import '../styles/Appbar.css'
import Sidebar from '../components/Sidebar';
import { TbMenuDeep } from "react-icons/tb";
import {motion} from 'framer-motion'
export default function Appbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    
    }
  }


  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);
  return (
    <div className='Appbar'>
      <div className='main-logo'><div className='main-logo-text'><span>&lt;Selman<span>/</span>&gt;</span></div></div>
      <div className='main-logo-small'><div className='main-logo-text'><span>&lt;Selman<span>/</span>&gt;</span></div></div>
      <div className='menu'>
        <button className="Appbutton">ANA SAYFA</button>
        <button className="Appbutton">HİZMETLER</button>
        <button className="Appbutton">ÇALIŞMALARIM</button>
        <button className="Appbutton">İLETİŞİM</button>
     
      </div>
      <div className='small-menu'>
        <button className="menu-button" onClick={toggleMenu}><TbMenuDeep style={{fontSize:45}} /></button>
        <Sidebar isOpen={menuOpen} toggleSidebar={toggleMenu} sidebarRef={sidebarRef}/>
        
      </div>
    </div>
  )
}
