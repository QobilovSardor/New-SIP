import { Text } from '@consta/uikit/Text';
import SidebarItem from './SidebarItem';
import './sidebar.css';
import { Button } from '@consta/uikit/Button';
import { IconSearchStroked } from "@consta/icons/IconSearchStroked";
import { IconSortDownCenter } from '@consta/icons/IconSortDownCenter';
const Sidebar = ({ onSelectChat, data }) => {

  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <Text className='sidebar-header__title'>Входящие</Text>
        <div className='sidebar-header__filter'>
          <Button view="clear"
            size="xs"
            onlyIcon
            iconLeft={IconSearchStroked}
          />
          <Button view="clear"
            size="xs"
            onlyIcon
            iconLeft={IconSortDownCenter}
          />
        </div>
      </div>

      {data?.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <div className="message-date">
            {section.date}
          </div>
          {section?.items?.map(item => (
            <SidebarItem key={`${sectionIndex}-${item.id}`} item={item} onSelectChat={onSelectChat} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Sidebar