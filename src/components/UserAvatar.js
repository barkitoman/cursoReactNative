import PropTypes from 'prop-types';
import React from 'react';
import { Avatar } from 'react-native-elements';

const UserAvatar = ({ title, size = 'large', source = '' }) => {
  if (source !== '') {
    return <Avatar rounded title={title} size={size} source={{ uri: `data:image/jpeg;base64,${source}` }} />;
  } else {
    return <Avatar rounded title={title} size={size} />;
  }
};

UserAvatar.propTypes = {
  title: PropTypes.string,
  size: PropTypes.any,
  source: PropTypes.any,
};

export default UserAvatar;
