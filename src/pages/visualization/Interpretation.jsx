import React, { useContext, useEffect } from 'react'
import { Header } from '../../layouts/Header'
import { ShowNavContext } from '../../context/ShowNavContext';
import { NavbarLayout } from '../../components/Navbar';
import './visualization.scss';
import { ActionBar } from '../../components';
import assets from '../../assets';
const pagesLink = [
  {
    label: 'Geoapp',
    href: '#!',
  },
  {
    label: 'Визуализация',
    href: '#!',
  },
  {
    label: 'Interpretation',
    href: '#!',
  },
]

const Interpretation = () => {
  const { handleToggleNav, activeNav, toggleHidden } = useContext(ShowNavContext);

  useEffect(() => {
    toggleHidden()
  }, [])

  return (
    <div className="visualization-page">
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        searchBox={false}
        hamburgerLogo={true}
        dropdownLogo={true}
        pagesLink={pagesLink}
      />
      <div className='flex w-full'>
        <NavbarLayout
          hideHamburger={true}
          openNav={activeNav}
          setActiveNav={!activeNav}
        />
        <div className='w-full'>
          <ActionBar />
          <div className='grid-img image-box'>
            <img src={assets.gridImg} alt="grid img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Interpretation