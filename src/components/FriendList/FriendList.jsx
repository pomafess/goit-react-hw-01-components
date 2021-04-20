import React from 'react';
import PropTypes from 'prop-types';

import FriendsListItem from "../FriendsListItem/FriendsListItem";

import styles from './FriendList.module.css';

const FriendsList = ({ friends }) => {
  const item = friends.map(({ id, avatar, name, isOnline }) => 
    <FriendsListItem
      key={id}
      avatar={avatar}
      name={name}
      isOnline={isOnline}
    />
  )
return (
    <ul className={styles.friendList}>
    {item}
    </ul>
  )
}

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendsList;