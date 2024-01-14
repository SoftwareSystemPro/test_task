import React, { useState } from 'react';
import {
  Modal,
  Tabs
} from 'antd';
import './style.css'
import "../../App.css"
import RegisterModal from './register_modal';
import LoginModal from './login_modal';
const RegisterComponent = ({ setIsModalOpen, isModalOpen }) => {

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };



  const items = [
    {
      key: '1',
      label: "Ro'yxatdan o'tish",
      children: <RegisterModal />,
    },
    {
      key: '2',
      label: "Tizimga kirish",
      children: <LoginModal />,
    }
  ];

  const onChange = (key) => {
    console.log(key);
  };


  return (
    <>
      <div className='register_wrapper'>
        <Modal footer={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </Modal>

      </div>
    </>
  );
};
export default RegisterComponent;