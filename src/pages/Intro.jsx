import { Link } from "react-router-dom";
import assets from "../assets";
import { Text } from "@consta/uikit/Text";
import { Header } from "../layouts/Header";
import CustomBreadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import { NavbarLayout } from "../components/Navbar";

const Intro = ({ handleToggleNav, activeNav }) => {
  console.log(handleToggleNav, 'handleToggleNav');
  const pagesSimple = [
    {
      label: 'Geoapp',
      href: '#!',
    },
    {
      label: 'Лейауты',
      href: '#!',
    }
  ];
  return (
    <>
      <Header searchHeader={true} handleToggleNav={handleToggleNav} hamburgerLogo={true} />

      <div className="flex items-start">
        <NavbarLayout
          hideHamburger={true}
          handleToggleNav={handleToggleNav}
          activeNav={activeNav}
          openNav={activeNav}
        />
        <div className="intro w-full">
          <CustomBreadcrumbs items={pagesSimple} />
          <h2 className="title">Стандарты по структуре страниц</h2>
          <div className="intro-box">
            <Link to="home" className="intro-card">
              <img src={assets.page01} alt="" />
              <Text size="s" view="secondary" className="page-info">
                0.1 Page
              </Text>
            </Link>
            <div className="intro-cards">
              <Link to="header-default" className="intro-card">
                <img src={assets.page1_1} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  1.1 Header Default
                </Text>
              </Link>
              <Link to="header-menu" className="intro-card">
                <img src={assets.page1_2} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  1.2 Header and Menu
                </Text>
              </Link>
              <Link to="header-two-panel" className="intro-card">
                <img src={assets.page1_3} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  1.3 Header and Two Panel
                </Text>
              </Link>
              <Link to="navbar" className="intro-card">
                <img src={assets.page1_4} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  2.1 Navbar Default
                </Text>
              </Link>
              <Link to="navbar-open" className="intro-card">
                <img src={assets.page1_6} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  2.2 Navbar Open
                </Text>
              </Link>
              <Link to="navbar-two-panel" className="intro-card">
                <img src={assets.page1_7} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  2.3 Navbar and Two Panel
                </Text>
              </Link>
              <Link to="header-navbar" className="intro-card">
                <img src={assets.page1_8} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  3.1 Header + Navbar Default
                </Text>
              </Link>
              <Link to="header-open-navbar" className="intro-card">
                <img src={assets.page1_9} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  3.2 Header + Navbar Open
                </Text>
              </Link>
              <Link to="header-navbar-two-panel" className="intro-card">
                <img src={assets.page10} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  3.3 Header + Navbar and Two Panel
                </Text>
              </Link>
              <Link to="navbar-header-default" className="intro-card">
                <img src={assets.page11} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  4.1 Navbar + Header Default
                </Text>
              </Link>
              <Link to="navbar-header-default-open" className="intro-card">
                <img src={assets.page12} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  4.2 Navbar + Header Open
                </Text>
              </Link>
              <Link to="navbar-header-two-panel" className="intro-card">
                <img src={assets.page13} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  4.3 Navbar + Header and Two Panel
                </Text>
              </Link>
              <Link to="navbar-header-modern" className="intro-card">
                <img src={assets.page14} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  5.1 Navbar + Header Modern
                </Text>
              </Link>
              <Link to="open-navbar-header-modern" className="intro-card">
                <img src={assets.page15} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  5.2 Navbar + Header Open
                </Text>
              </Link>
              <Link to="navbar-header-two-panel-modern" className="intro-card">
                <img src={assets.page16} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  5.3 Navbar + Header and Two Panel
                </Text>
              </Link>
              <Link to="other-fixed-width" className="intro-card">
                <img src={assets.page17} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  6.1 Other - Fixed width
                </Text>
              </Link>
              <Link to="other-overlay-content" className="intro-card">
                <img src={assets.page18} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  6.2 Other - Overlay content
                </Text>
              </Link>
              <Link to="other-block-container" className="intro-card">
                <img src={assets.page19} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  6.2 Other - Overlay content
                </Text>
              </Link>
              <Link to="open-panel-or-modal" className="intro-card">
                <img src={assets.page1_6} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  7.1 Other - Open Panel or Modal
                </Text>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro