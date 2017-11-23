import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './font-awesome-4.7.0/css/font-awesome.min.css';

import IconStyled from './styled';


const FontAwesomeIcon = (props) => {
  const { name, customStyles } = props;
  const IconComponent = IconStyled(customStyles);
  return (
    <IconComponent className={cn('fa', name)} />
  );
};

FontAwesomeIcon.propTypes = {
  name: PropTypes.string.isRequired,
  customStyles: PropTypes.string,
};

FontAwesomeIcon.defaultProps = {
  customStyles: '',
};

export default FontAwesomeIcon;
