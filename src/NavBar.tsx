import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // メニューを開閉する関数
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">MySite</div>
      {/* メニューアイコン */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* ナビゲーションメニュー */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        {/* × ボタンをメニュー内に表示 */}
        <li className="close-icon" onClick={toggleMenu}>
          &times;
        </li>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
