import React from 'react'
import '../../App.css'
import './style.css'
import { Button, Input } from 'antd';
import { NavLink } from 'react-router-dom';
const { Search } = Input;

export default function Footer() {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer_wrapper'>
          <div className='footer_logo'>
            <NavLink to={"/"} className='logo_title'>Agrobank</NavLink>
          </div>
          <div className='footer_wrapper'>
            <NavLink className='footer_link' to="/about">Biz haqimizda</NavLink>
            <a className='footer_link' href="tel:+998950023752"> <i class='bx bxs-phone'></i>+998(95) 002-37-52</a>
            <div className='social_link'>
              <a className='footer_link' href="https://facebook.com"><i class='bx bxl-facebook'></i></a>
              <a className='footer_link' href="https://instagram.com"><i class='bx bxl-instagram' ></i></a>
              <a className='footer_link' href="https://telegram.com"><i class='bx bxl-telegram' ></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
