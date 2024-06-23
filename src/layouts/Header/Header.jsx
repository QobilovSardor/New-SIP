import { Button } from "@consta/uikit/Button";
import { IconSearchStroked } from "@consta/icons/IconSearchStroked";
import { IconRing } from "@consta/icons/IconRing";
import { IconKebab } from "@consta/icons/IconKebab";
import { IconBackward } from "@consta/icons/IconBackward";
import { Badge } from "@consta/uikit/Badge";
import { Text } from "@consta/uikit/Text";
import { useState } from "react";
import { User } from "@consta/uikit/User";
import { Link, useLocation } from "react-router-dom";
import { IconBento } from "@consta/icons/IconBento";
import { IconStorage } from '@consta/icons/IconStorage';
import { IconFolders } from "@consta/icons/IconFolders";
import { IconArrowDown } from "@consta/icons/IconArrowDown";
import CustomBreadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import assets from "../../assets";

const items = [
  "Главная",
  "Дашборд",
  "Проекты",
  "Контент",
  "Визуализатор",
  "Процессы",
  "Справочник",
  "Дерево",
  "Формы",
  "Сервис",
  "Лейауты",
];
const pagesSimple = ["Главная", "Раздел", "Страница"];

const Header = (props) => {
  const {
    searchHeader,
    hamburgerLogo,
    handleToggleNav,
    dropdownLogo,
    pagesLink,
    searchBox
  } = props;

  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation().pathname;
  const clicker = () => {
    handleToggleNav();
  };

  return (
    <header className="header">
      <div className="header-left">
        {hamburgerLogo ? (
          <Button
            view="clear"
            size="xs"
            onlyIcon
            iconLeft={IconBento}
            className="hamburger-menu"
            onClick={clicker}
          />
        ) : null}
        {dropdownLogo ? (
          <>
            <button className="logo-box">
              <img src={assets.headerLogo} alt="header-logo" width="10" height="11" />
              <IconArrowDown view="secondary" size="xs" />
            </button>
            {pagesLink && (
              <>
                <div className="line"></div>
                <CustomBreadcrumbs items={pagesLink} />
              </>
            )}
          </>
        ) : (
          <Link to='/' className="logo-box">
            <img src={assets.headerLogo} alt="header-logo" width="10" height="11" />
            <p>Geoapp</p>
          </Link>
        )}
        {searchBox ? (<div className={`search-box`}>
          <div className="search-box">
            <input type="text" placeholder="Поиск" />
            <IconSearchStroked className="search-icon" />
          </div>
        </div>) : null}
        {searchHeader ? null : (
          <>
            <div className="line"></div>
            <div
              className={`${location === "/" ? "hidden " : ""
                } header-breadcrumbs`}
            >
              <Button
                label="Назад"
                size="xs"
                view="ghost"
                iconLeft={IconBackward}
              />
              <CustomBreadcrumbs items={pagesSimple} />
              <Badge size="xs" status="system" label="черновик" />
              <Text size="xs" view="secondary">
                20.01.2023
              </Text>
              <Button onlyIcon view="cencle" iconLeft={IconKebab} size="xs" />
              <div className="line mx-8"></div>
              <div className="nav-list">
                <ul>
                  {items.map((item, index) => (
                    <li key={index}>
                      <a
                        className={index === activeIndex ? "active" : ""}
                        href="#!"
                        onClick={() => setActiveIndex(index)}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
      <div className={`header-right`}>
        <div>
          <Button view="clear" size="xs" onlyIcon iconLeft={IconFolders}
          />
          <Button view="clear" size="xs" onlyIcon iconLeft={IconRing} />
          <Button view="clear" size="xs" onlyIcon iconLeft={IconStorage} />
        </div>
        <User avatarUrl={assets.avatar} />
      </div>
    </header>
  );
}

export default Header