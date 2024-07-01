import React, { forwardRef, RefObject } from 'react';
import '../styles/Sidebar.css';
import { TfiClose } from "react-icons/tfi";
interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  sidebarRef: RefObject<HTMLDivElement>;
}

const Sidebar: React.FC<SidebarProps> = forwardRef(({ isOpen, toggleSidebar }, ref:any) => {
  return (
    <div ref={ref} className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="closebtn" onClick={toggleSidebar}><TfiClose style={{fontSize:40, color:'white'}} /></button>

        <div className='menu-item-top'>
        <button className="menu-item-button">Ana Sayfa</button>
        <button className="menu-item-button">Hizmetler</button>
        <button className="menu-item-button">Çalışmalarım</button>
        <button className="menu-item-button">İletişim</button>
     
        </div>
      {/* <a href="#">Ana Sayfa</a>
      <a href="#">Hizmetler</a>
      <a href="#">Çalışmalarım</a>
      <a href="#">İletişim</a>
      <a href="#">English</a> */}
    </div>
  );
});

export default Sidebar;
