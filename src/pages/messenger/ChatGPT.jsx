import React, { useContext, useEffect, useState } from 'react'
import { Header } from '../../layouts/Header'
import { GptNavbar } from '../../components/Navbar'
import './messenger.scss';
import GptMail from '../../components/Messenger/GptMail';
import { IconChatStroked } from '@consta/icons/IconChatStroked'
import { IconAdd } from '@consta/icons/IconAdd'
import { Button } from '@consta/uikit/Button'
import { ShowNavContext } from '../../context/ShowNavContext';
const pagesLink = [
  {
    label: 'ЧатGPT',
    href: '/',
  }
]

const menuItems = [
  {
    id: 1,
    icon: IconAdd,
    label: 'Новый чат'
  },
  {
    id: 2,
    icon: IconChatStroked,
    label: 'Геология'
  },
  {
    id: 3,
    icon: IconChatStroked,
    label: 'Анализ сейсмики'
  },
  {
    id: 4,
    icon: IconChatStroked,
    label: 'Чат №1'
  },
]

const ChatGPT = () => {
  const [onSelectChat, setSelectedChat] = useState(null);
  const { handleToggleNav, activeNav = true, showNavbar } = useContext(ShowNavContext);

  useEffect(() => {
    setSelectedChat(menuItems[1]);
  }, []);

  return (
    <div className='chat-gpt__page'>
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        searchBox={false}
        hamburgerLogo={true}
        dropdownLogo={true}
        pagesLink={pagesLink}
      />
      <div className="flex">
        <GptNavbar
          menuItems={menuItems}
          onSelectChat={setSelectedChat}
          selectedChat={onSelectChat}
          activeNav={activeNav}
          showNavbar={showNavbar}
        />
        {onSelectChat && <GptMail selectedChat={onSelectChat} />}
      </div>
    </div>
  )
}

export default ChatGPT