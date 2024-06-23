import { useContext, useEffect, useState } from "react"
import { NavbarLayout } from "../../components/Navbar"
import { Header } from "../../layouts/Header"
import { PersonalChat, Sidebar } from "../../components"
import Mail from "../../components/Messenger/CorporateMail"
import { data, } from "../../helpers/chatData"
import { ShowNavContext } from "../../context/ShowNavContext"

const pagesLink = [
  {
    label: 'Мессенджер',
    href: '/messenger',
  },
  {
    label: 'Почта',
    href: '/messenger',
  },
]

const Messenger = () => {
  const [onSelectChat, setSelectedChat] = useState(null);
  const type = onSelectChat?.type;
  const { handleToggleNav, activeNav, setNavbarHidden, toggleHidden } = useContext(ShowNavContext);
  useEffect(() => {
    toggleHidden()
  }, [])
  console.log(setNavbarHidden);
  return (
    <div className="messenger-page">
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        searchBox={false}
        hamburgerLogo={true}
        dropdownLogo={true}
        pagesLink={pagesLink}
      />
      <div className="flex">
        <NavbarLayout
          setNavbarHidden={true}
          hideHamburger={true}
          openNav={activeNav}
          setActiveNav={!activeNav}
        />
        <Sidebar onSelectChat={setSelectedChat} data={data} />
        {onSelectChat && (
          type === 'personal' ? <PersonalChat selectedChat={onSelectChat} /> : <Mail selectedChat={onSelectChat} />
        )}
      </div>
    </div>
  )
}

export default Messenger