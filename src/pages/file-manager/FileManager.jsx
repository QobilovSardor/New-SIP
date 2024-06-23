import React, { useContext, useState } from 'react'
import { Header } from '../../layouts/Header'
import { ShowNavContext } from '../../context/ShowNavContext';
import { NavbarLayout } from '../../components/Navbar';
import './file-manager.scss';
import { Text } from '@consta/uikit/Text';
import { AvatarGroup } from '@consta/uikit/AvatarGroup';
import { Button } from '@consta/uikit/Button';
import { IconEdit } from '@consta/icons/IconEdit';
import { IconTrash } from '@consta/icons/IconTrash';
import { Tabs } from '@consta/uikit/Tabs';
import { Badge } from '@consta/uikit/Badge';
import { IconAllDone } from '@consta/icons/IconAllDone';
import { IconAlert } from '@consta/icons/IconAlert';
import { Tag } from '@consta/uikit/Tag';
import { IconSearchStroked } from '@consta/icons/IconSearchStroked';
import { IconSortDownCenter } from '@consta/icons/IconSortDownCenter';
import { IconStorage } from '@consta/icons/IconStorage';
import { IconDownload } from '@consta/icons/IconDownload';
import { IconWells } from '@consta/icons/IconWells';
import { IconSeismic2D } from '@consta/icons/IconSeismic2D';
import { IconMarkers } from '@consta/icons/IconMarkers';
import { IconMaps } from '@consta/icons/IconMaps';
import { List } from '@consta/uikit/ListCanary';


const pagesLink = [
  {
    label: 'Менеджер данных',
    href: '#!',
  },
  {
    label: 'Хранилище',
    href: '/#!',
  },
]

const avatarGroupItems = [
  {
    name: 'Вадим Матвеев',
  },
  {
    name: 'Лидия Индриксон',
  },
  {
    name: 'Геннадий Морозов',
  },
  {
    name: 'Геннадий Морозов',
  },
  {
    name: 'Вадим Матвеев',
  },
  {
    name: 'Лидия Индриксон',
  },
  {
    name: 'Геннадий Морозов',
  },
  {
    name: 'Геннадий Морозов',
  },
]

const listItems = [
  {
    label: 'Скважины',
    id: 1,
    disabled: false,
    leftIcon: IconWells
  },
  {
    label: 'Сьемки',
    id: 2,
    disabled: true,
    leftIcon: IconSeismic2D
  },
  {
    label: 'Модели',
    id: 3,
    disabled: true,
    leftIcon: IconMarkers
  },
  {
    label: 'Маркеры',
    id: 4,
    disabled: true,
    leftIcon: IconMarkers
  },
  {
    label: 'Карты',
    id: 5,
    disabled: true,
    leftIcon: IconMaps
  },
  {
    label: 'Горизонты',
    id: 6,
    disabled: true,
    leftIcon: IconMaps
  },
];

const items = ['Информация', 'История'];

const getItemLabel = (label) => label;

const FileManager = () => {
  const { handleToggleNav, activeNav } = useContext(ShowNavContext);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState(items[0]);

  return (
    <div className='file-manager__page'>
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        searchBox={false}
        hamburgerLogo={true}
        dropdownLogo={true}
        pagesLink={pagesLink}
      />

      <div className='flex file-manager'>
        <NavbarLayout
          navbarHidden={true}
          hideHamburger={true}
          openNav={activeNav}
          setActiveNav={activeNav}
        />
        <div className='left-sidebar'>
          <div className="sidebar-header">
            <Text as='h1' view='primary'>Мои обьекты</Text>
            <div className='sidebar-header__btns'>
              <Button size='xs' view='clear' iconLeft={IconSearchStroked} />
              <Button size='xs' view='clear' iconLeft={IconSortDownCenter} />
            </div>
          </div>
          <List size='xs' placeholder="Выберите вариант" items={listItems} />
        </div>
        <div className={`middle-sidebar ${activeNav ? 'show-nav' : ''}`}>

        </div>
        <div className='right-sidebar'>
          <div className="sidebar-header">
            <Text as='h1' view='primary'>Скважина 1</Text>
            <div className='sidebar-header__btns'>
              <Button size='xs' view='clear' iconLeft={IconDownload} />
              <Button size='xs' view='clear' iconLeft={IconStorage} />
              <Button size='xs' view='clear' iconLeft={IconEdit} />
              <Button size='xs' view='clear' iconLeft={IconTrash} />
            </div>
          </div>
          <div className="tabs">
            <Tabs
              value={value}
              onChange={setValue}
              items={items}
              size='xs'
              getItemLabel={getItemLabel}
            />
            <div className='text-box'>
              <Text as='span' size='s' view='secondary'>Название</Text>
              <Text size='s'>Северное</Text>
            </div>
            <div className='text-box'>
              <Text as='p' size='s' view='secondary'>Название</Text>
              <Text as='p' size='s'>Описание очень-очень длинное на две строки, и еще раз длинное название чего-либо</Text>
            </div>
            <div className='text-box'>
              <Text as='span' size='s' view='secondary'>Статус</Text>
              <div className='tags'>
                <Badge size='xs' status="success" label="Согласован" iconLeft={IconAllDone} iconRight={IconAlert} />
                <Badge size='xs' status="success" label="Согласован" iconLeft={IconAllDone} iconRight={IconAlert} />
              </div>
            </div>
            <div className='text-box'>
              <Text as='span' size='s' view='secondary'>Теги</Text>
              <div className='tags'>
                <Tag size='xs' label="Label" />
                <Tag size='xs' label="Label" />
              </div>
            </div>
            <div className='text-box'>
              <Text as='span' size='s' view='secondary'>Пользователи</Text>
              <AvatarGroup size='xs' items={avatarGroupItems} visibleCount={4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FileManager