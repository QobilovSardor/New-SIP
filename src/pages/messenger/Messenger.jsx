import { useContext, useEffect, useState } from "react";
import { MessengerNavbar, NavbarLayout } from "../../components/Navbar";
import { Header } from "../../layouts/Header";
import { PersonalChat, Sidebar } from "../../components";
import Mail from "../../components/Messenger/CorporateMail";
import { data } from "../../helpers/chatData";
import { ShowNavContext } from "../../context/ShowNavContext";
import { Route, Routes, useParams } from "react-router-dom";

const pagesLink = [
  {
    label: "Мессенджер",
    href: "/messenger",
  },
  {
    label: "Почта",
    href: "/messenger",
  },
];

const Messenger = () => {
  const [onSelectChat, setSelectedChat] = useState(null);
  const type = onSelectChat?.type;
  const { handleToggleNav, activeNav, toggleHidden } =
    useContext(ShowNavContext);

  useEffect(() => {
    toggleHidden();
  }, []);

  return (
    <div className="messenger-page">
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        searchBox={false}
        hamburgerLogo={true}
        dropdownLogo={true}
        pagesLink={pagesLink}
        noFolderIcon={true}
      />
      <div className="flex">
        <MessengerNavbar
          setNavbarHidden={true}
          hideHamburger={true}
          openNav={activeNav}
          setActiveNav={!activeNav}
        />
        <Sidebar onSelectChat={setSelectedChat} data={data} />
        <Routes>
          <Route path="/personal/:id" element={<PersonalChat />} />
          <Route path="/corporate/:id" element={<Mail />} />
        </Routes>
      </div>
    </div>
  );
};

export default Messenger;
