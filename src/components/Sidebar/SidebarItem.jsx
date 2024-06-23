import { Avatar } from '@consta/uikit/Avatar';

import "./sidebar.css";
import { Text } from '@consta/uikit/Text';
import { IconAllDone } from '@consta/icons/IconAllDone';
import { IconCheck } from '@consta/icons/IconCheck';
import { Button } from '@consta/uikit/Button';
import { Link } from 'react-router-dom';
import { extractDate } from '../../helpers/chatData';
const SidebarItem = ({ item, onSelectChat }) => {
  const { id, avatarImg, name, msgTime, message, seen, type } = item;
  
  return (
    <div className="sidebar-component">
      <div className="sidebar-items">
        <Link to={`/messenger/${id}`} className="sidebar-item" onClick={() => onSelectChat(item)} >
          <Avatar size='l' name={name} url={avatarImg} />
          <div>
            <div className="sidebar-content">
              <Text className='user-name' view='primary'>{name}</Text>
              <Text className='chat-time' view='secondary'>{extractDate(msgTime)}</Text>
            </div>
            <div className="sidebar-content">
              <Text className='desc' size='xs' view='secondary'>{message}</Text>
              {seen ? (<Button
                view="clear"
                size="xs"
                onlyIcon
                iconLeft={IconAllDone}
              />) : <Button
                view="clear"
                size="xs"
                onlyIcon
                iconLeft={IconCheck}
              />}
            </div>
          </div>
        </Link>
      </div>
    </div >
  )
}

export default SidebarItem