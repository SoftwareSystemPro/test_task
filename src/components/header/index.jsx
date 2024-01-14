import React, { useEffect, useState } from 'react'
import '../../App.css'
import './style.css'
import { Avatar, Button, Input } from 'antd';
import { NavLink } from 'react-router-dom';
import RegisterComponent from '../register';
const { Search } = Input;

export default function Header() {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop >= 60
      ? header.classList.add("is_sticky")
      : header.classList.remove("is_sticky");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [token, setToken] = useState(false)
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleAuth = () => {
    setToken(true)
    showModal()
  }
  return (
    <div className='header'>
      <div className='container'>
        <div className='header_wrapper'>
          <div className='header_logo'>
            <NavLink to={"/"} className='logo_title'>Agrobank</NavLink>
          </div>
          <div className='search_wrapp'>
            <input type="search" className='search_input' placeholder='Izlash...' />
          </div>
          <div className='nav_wrapper'>
            <NavLink className='nav_link' to="/about">Biz haqimizda</NavLink>
            <NavLink to={"/announc"} className='nav_link'>+ E’lon berish</NavLink>
            <div className='profile_btn_wrapper'>
              {
                token === true ? (
                  <NavLink to={"/profile"} className='profile_modal_btn'>
                    <Avatar size={40} src={<img src="https://randomuser.me/api/portraits/men/64.jpg" alt="avatar" />} />
                  </NavLink>
                ) : null
              }
              {
                token === true ? (
                  <button onClick={handleAuth} className='logout_btn'>
                    <i class='bx bx-log-out'></i> Chiqish
                  </button>
                ) : (
                  <button onClick={handleAuth} className='logout_btn'>
                    <i class='bx bx-log-in' ></i> Ro'yxatdan o'tish
                  </button>
                )
              }
              <RegisterComponent isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
