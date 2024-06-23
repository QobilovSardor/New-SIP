import { User } from "@consta/uikit/User";
import { Button } from "@consta/uikit/Button";
import { IconHamburger } from "@consta/icons/IconHamburger";
import { IconLithologyFilled } from "@consta/icons/IconLithologyFilled";
import { Collapse } from "@consta/uikit/Collapse";
import { IconHome } from "@consta/icons/IconHome";
import { IconFolderOpen } from "@consta/icons/IconFolderOpen";
import { IconWindow } from "@consta/icons/IconWindow";
import { IconPicture } from "@consta/icons/IconPicture";
import { IconCalculator } from "@consta/icons/IconCalculator";
import { IconBook } from "@consta/icons/IconBook";
import { IconTree } from "@consta/icons/IconTree";
import { IconType } from "@consta/icons/IconType";
import { IconSettings } from "@consta/icons/IconSettings";
import { IconIpadStroked } from "@consta/icons/IconIpadStroked";
import { IconAdd } from "@consta/icons/IconAdd";
import { IconArrowPrevious } from "@consta/icons/IconArrowPrevious";
import { useEffect, useState } from "react";
import assets from "../../assets";

const NavbarLayout = (props) => {
  const
    {
      openNav,
      hideHamburger,
      showNav,
      activeNav,
      navbarHidden = false,
      handleToggleNav,
    } = props;

  const [isActive, setIsActive] = useState(openNav);
  const [isOpen, setOpen] = useState({});

  useEffect(() => {
    setIsActive(openNav);
  }, [openNav]);

  const handleChangeActive = () => {
    setIsActive(!isActive);
    setOpen({});
  };

  const handleCollapseToggle = (key) => {
    if (isActive) {
      setOpen((prevState) => ({
        ...prevState,
        [key]: !prevState[key],
      }));
    }
  };

  const clicker = () => {
    handleChangeActive();
    if (handleToggleNav) {
      handleToggleNav();
    }
    if (handleToggleNav) {
      handleToggleNav();
    }
  };

  return (
    <div
      className={`navbar ${isActive ? "active" : ""} ${showNav ? "active" : ""
        }  ${activeNav ? "active" : ""} ${navbarHidden ? "navbar-hidden" : ""}`}
    >
      <div className="navbar-top">
        {hideHamburger ? null : (
          <>
            <Button
              view="clear"
              size="xs"
              onlyIcon
              iconLeft={IconHamburger}
              className="hamburger-menu"
              onClick={handleChangeActive}
            />
            <div className="nav-logo flex">
              <div className="logo">
                <img src={assets.logo} alt="logo" width="10" height="11" />
              </div>
              <h4>Приложение</h4>
            </div>
          </>
        )}
        <div className="left-nav__boxes">
          <div className="nav-list active">
            <div className="nav-list__icon">
              <IconHome />
            </div>
            <p className="nav-link">Главная</p>
          </div>
          <Collapse
            className="nav-list col"
            size="xs"
            label={
              <div className="flex items-center">
                <div className="nav-list__icon">
                  <IconLithologyFilled />
                </div>
                <p className="nav-link collapse">Дашборд</p>
              </div>
            }
            isOpen={isOpen["collapse1"]}
            iconPosition="right"
            onClick={() => handleCollapseToggle("collapse1")}
          >
            <a href="#!">Общая</a>
            <a href="#!">Детальная</a>
          </Collapse>

          <Collapse
            className="nav-list col"
            size="xs"
            label={
              <div className="flex items-center notification">
                <div className="nav-list__icon">
                  <IconFolderOpen />
                </div>
                <p className="nav-link collapse">Проекты</p>
              </div>
            }
            isOpen={isOpen["collapse2"]}
            iconPosition="right"
            onClick={() => handleCollapseToggle("collapse2")}
          >
            <a href="#!">Карточки</a>
            <a href="#!">Список</a>
            <a href="#!">Детальная</a>
          </Collapse>

          <Collapse
            className="nav-list col"
            size="xs"
            label={
              <div className="flex items-center">
                <div className="nav-list__icon">
                  <IconWindow />
                </div>
                <p className="nav-link collapse">Контент</p>
              </div>
            }
            isOpen={isOpen["collapse3"]}
            iconPosition="right"
            onClick={() => handleCollapseToggle("collapse3")}
          >
            <a href="#!">Общая</a>
            <a href="#!">Информация</a>
            <a href="#!">Файлы</a>
            <a href="#!">Команда</a>
            <a href="#!">История</a>
            <a href="#!">Комментарии</a>
          </Collapse>

          <Collapse
            className="nav-list col"
            size="xs"
            label={
              <div className="flex items-center">
                <div className="nav-list__icon">
                  <IconPicture />
                </div>
                <p className="nav-link collapse">Визуализатор</p>
              </div>
            }
            isOpen={isOpen["collapse4"]}
            iconPosition="right"
            onClick={() => handleCollapseToggle("collapse4")}
          >
            <a href="#!">Таблица</a>
            <a href="#!">2D карта</a>
            <a href="#!">3D сцена</a>
            <a href="#!">Интерпретация</a>
            <a href="#!">Корреляционная схема</a>
            <a href="#!">Планшет</a>
            <a href="#!">Расчетный процесс</a>
            <a href="#!">Моделирование</a>
          </Collapse>

          <Collapse
            className="nav-list col"
            size="xs"
            label={
              <div className="flex items-center">
                <div className="nav-list__icon">
                  <IconCalculator />
                </div>
                <p className="nav-link collapse">Процессы</p>
              </div>
            }
            isOpen={isOpen["collapse5"]}
            iconPosition="right"
            onClick={() => handleCollapseToggle("collapse5")}
          >
            <a href="#!">Таблица</a>
            <a href="#!">2D карта</a>
            <a href="#!">3D сцена</a>
            <a href="#!">Интерпретация</a>
            <a href="#!">Корреляционная схема</a>
            <a href="#!">Планшет</a>
            <a href="#!">Расчетный процесс</a>
            <a href="#!">Моделирование</a>
          </Collapse>

          <Collapse
            className="nav-list col"
            size="xs"
            label={
              <div className="flex items-center">
                <div className="nav-list__icon">
                  <IconBook />
                </div>
                <a href="#!" className="nav-link collapse">
                  Справочники
                </a>
              </div>
            }
            iconPosition=""
          ></Collapse>

          <Collapse
            className="nav-list col"
            size="xs"
            label={
              <div className="flex items-center">
                <div className="nav-list__icon">
                  <IconTree />
                </div>
                <a href="#!" className="nav-link collapse">
                  Дерево данных
                </a>
              </div>
            }
            iconPosition=""
          ></Collapse>

          <Collapse
            className="nav-list col"
            size="xs"
            label={
              <div className="flex items-center">
                <div className="nav-list__icon">
                  <IconType />
                </div>
                <a href="#!" className="nav-link collapse">
                  Формы
                </a>
              </div>
            }
            iconPosition=""
          ></Collapse>

          <Collapse
            className="nav-list col"
            size="xs"
            label={
              <div className="flex items-center">
                <div className="nav-list__icon">
                  <IconSettings />
                </div>
                <p className="nav-link collapse">Сервис</p>
              </div>
            }
            isOpen={isOpen["collapse6"]}
            iconPosition="right"
            onClick={() => handleCollapseToggle("collapse6")}
          >
            <a href="#!">Нет данных</a>
            <a href="#!">Запросить доступ</a>
            <a href="#!">Ошибка 404</a>
            <a href="#!">Ошибка 500</a>
          </Collapse>

          <Collapse
            className="nav-list col"
            size="xs"
            label={
              <div className="flex items-center">
                <div className="nav-list__icon">
                  <IconIpadStroked />
                </div>
                <a href="#!" className="nav-link collapse">
                  Лейауты
                </a>
              </div>
            }
            iconPosition=""
          ></Collapse>
          <div className="line"></div>

          <Collapse
            className="nav-list col mb-4"
            size="xs"
            label={
              <div className="flex items-center">
                <div className="nav-list__icon">
                  <IconAdd />
                </div>
                <a href="#!" className="nav-link collapse">
                  Заказать модуль
                </a>
              </div>
            }
            iconPosition=""
          ></Collapse>
        </div>
      </div>

      <div className="navbar-bottom">
        <Button
          view="clear"
          size="xs"
          onlyIcon
          iconLeft={IconSettings}
          className="hamburger-menu"
        />
        <Button
          view="clear"
          size="xs"
          onlyIcon
          iconLeft={IconArrowPrevious}
          className="hamburger-menu arrow-prew"
          onClick={clicker}
        />
      </div>
    </div>
  )
}

export default NavbarLayout