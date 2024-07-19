import React, { useEffect, useRef, useState } from 'react'
import '../styles/Appbar.css'
import Sidebar from '../components/Sidebar';
import { TbMenuDeep } from "react-icons/tb";
type ScrollToSection = (section: string) => void;


interface Appbarprops{
  scrollToSection: ScrollToSection;

}
const Appbar: React.FC<Appbarprops> = ({scrollToSection}) => {

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
        <button className="Appbutton" onClick={()=>scrollToSection('home')}>ANA SAYFA</button>
        <button className="Appbutton" onClick={()=>scrollToSection('services')}>HİZMETLER</button>
        <button className="Appbutton"  onClick={()=>scrollToSection('projects')}>PROJELERİM</button>
        <button className="Appbutton"  onClick={()=>scrollToSection('communicate')}>İLETİŞİM</button>
     
      </div>
      <div className='small-menu'>
        <button className="menu-button" onClick={toggleMenu}><TbMenuDeep style={{fontSize:45}} /></button>
        <Sidebar isOpen={menuOpen} toggleSidebar={toggleMenu} sidebarRef={sidebarRef} 
        ScrollToSection={scrollToSection}
        />
        
      </div>
    </div>
  )
}
export default Appbar