import React, { useContext, useState } from 'react';
import { Header } from '../../layouts/Header';
import { NavbarLayout } from '../../components/Navbar';
import { Text } from '@consta/uikit/Text';
import './directory.scss';
import { IconKebab } from '@consta/icons/IconKebab';
import { Button } from '@consta/uikit/Button';
import { Table } from '@consta/uikit/Table';
import { Checkbox } from '@consta/uikit/Checkbox';
import { Pagination } from '@consta/uikit/Pagination';
import { Tabs } from '@consta/uikit/Tabs';
import { AvatarGroup } from '@consta/uikit/AvatarGroup';
import { Tag } from '@consta/uikit/Tag';
import { Badge } from '@consta/uikit/Badge';
import { IconAllDone } from '@consta/icons/IconAllDone';
import { IconAlert } from '@consta/icons/IconAlert';
import { IconEdit } from '@consta/icons/IconEdit';
import { IconTrash } from '@consta/icons/IconTrash';
import { List } from '@consta/uikit/ListCanary';
import { IconFolderOpen } from '@consta/icons/IconFolderOpen';
import { ShowNavContext } from '../../context/ShowNavContext';


// const rows = [
//   {
//     id: '1',
//     name: <Checkbox size='s' label="Северное" />,
//     isOpen: 'Открытое',
//     year: 1982,
//     price: '5 000'
//   },
//   {
//     id: '2',
//     name: <Checkbox size='s' label="Северное" />,
//     isOpen: 'Открытое',
//     year: 1982,
//     price: '5 000'
//   },
//   {
//     id: '3',
//     name: <Checkbox size='s' label="Северное" />,
//     isOpen: 'Открытое',
//     year: 1982,
//     price: '5 000'
//   },
//   {
//     id: '4',
//     name: <Checkbox size='s' label="Северное" />,
//     isOpen: 'Открытое',
//     year: 1982,
//     price: '5 000'
//   },
//   {
//     id: '5',
//     name: <Checkbox size='s' label="Северное" />,
//     isOpen: 'Открытое',
//     year: 1982,
//     price: '5 000'
//   },
//   {
//     id: '6',
//     name: <Checkbox size='s' label="Северное" />,
//     isOpen: 'Открытое',
//     year: 1982,
//     price: '5 000',
//   },
// ];

// const columns = [
//   {
//     title: 'Месторождение',
//     accessor: 'name',
//   },
//   {
//     title: 'Год открытия',
//     accessor: 'year',
//   },
//   {
//     title: 'Тип',
//     accessor: 'isOpen',
//   },
//   {
//     title: 'Добыча, млн.т.',
//     accessor: 'price',
//     align: 'right',
//   },
//   {
//     title: 'Запасы, млн.т.',
//     accessor: 'price',
//     align: 'right',
//   },
//   {
//     title: 'NPV, млрд ₽',
//     accessor: 'price',
//     align: 'right',
//   },
// ];
const rows = [
  {
    id: '1',
    name: <Checkbox size='s' label="Северное" />,
    isOpen: 'Открытое',
    year: 1982,
    production: '5 000',
    reserves: '5 000',
    npv: '5 000',
  },
  {
    id: '2',
    name: <Checkbox size='s' label="Северное" />,
    isOpen: 'Открытое',
    year: 1982,
    production: '5 000',
    reserves: '5 000',
    npv: '5 000',
  },
  {
    id: '3',
    name: <Checkbox size='s' label="Северное" />,
    isOpen: 'Открытое',
    year: 1982,
    production: '5 000',
    reserves: '5 000',
    npv: '5 000',
  },
  {
    id: '4',
    name: <Checkbox size='s' label="Северное" />,
    isOpen: 'Открытое',
    year: 1982,
    production: '5 000',
    reserves: '5 000',
    npv: '5 000',
  },
  {
    id: '5',
    name: <Checkbox size='s' label="Северное" />,
    isOpen: 'Открытое',
    year: 1982,
    production: '5 000',
    reserves: '5 000',
    npv: '5 000',
  },
  {
    id: '6',
    name: <Checkbox size='s' label="Северное" />,
    isOpen: 'Открытое',
    year: 1982,
    production: '5 000',
    reserves: '5 000',
    npv: '5 000',
  },
];

const columns = [
  {
    title: 'Месторождение',
    accessor: 'name',
  },
  {
    title: 'Год открытия',
    accessor: 'year',
  },
  {
    title: 'Тип',
    accessor: 'isOpen',
  },
  {
    title: 'Добыча, млн.т.',
    accessor: 'production',
    align: 'right',
  },
  {
    title: 'Запасы, млн.т.',
    accessor: 'reserves',
    align: 'right',
  },
  {
    title: 'NPV, млрд ₽',
    accessor: 'npv',
    align: 'right',
  },
];

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
    label: 'Месторождения',
    id: 1,
    disabled: false,
    leftIcon: IconFolderOpen
  },
  {
    label: 'Лицензионные участки',
    id: 2,
    disabled: true,
    leftIcon: IconFolderOpen
  },
  {
    label: 'Кусты',
    id: 3,
    disabled: true,
    leftIcon: IconFolderOpen
  },
  {
    label: 'Скважины',
    id: 3,
    disabled: true,
    leftIcon: IconFolderOpen
  },
  {
    label: 'Дочерние общества',
    id: 3,
    disabled: true,
    leftIcon: IconFolderOpen
  },
];

const items = ['Информация', 'История'];

const getItemLabel = (label) => label;

const Directory = () => {
  const { handleToggleNav, activeNav } = useContext(ShowNavContext);

  const [page, setPage] = useState(1);
  const [value, setValue] = useState(items[0]);

  return (
    <div className='directory-page'>
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        searchBox={true}
        hamburgerLogo={true}
        dropdownLogo={true}
      />
      <div className='flex'>
        <NavbarLayout
          hideHamburger={true}
          openNav={activeNav}
          setActiveNav={() => handleToggleNav(!activeNav)}
        />
        <div className='left-sidebar'>
          <List size='xs' placeholder="Выберите вариант" items={listItems} />
        </div>
        <div className={`middle-sidebar ${activeNav && 'show-nav'}`}>
          <div className="sidebar-header">
            <Text as='h1' view='primary'>Месторождения</Text>
            <Button size='xs' view='clear' iconLeft={IconKebab} />
          </div>
          <div className="table-box">
            <Table zebraStriped="odd" rows={rows} columns={columns} />
            <div className='table-pagination'>
              <Text as='span' className='pagination-text' >1 из 8</Text>
              <Pagination
                type="input"
                items={5}
                value={page}
                onChange={setPage}
                outerMostArrows={[true, true]}
                arrows={[{ label: null }, { label: null }]}
              />
            </div>
          </div>
        </div>
        <div className='right-sidebar'>
          <div className="sidebar-header">
            <Text as='h1' view='primary'>Северное</Text>
            <div className='sidebar-header__btns'>
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
  );
}

export default Directory;
