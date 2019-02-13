import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import colors from '../../../colors';

const Toggle = props => {
  const { active, onClick } = props;

  return (
    <Switch
      checked={active}
      onChange={onClick}
      onColor={colors.brand.politicoDarkRed.hex}
      offColor='#343a40'
    />
  );
};

Toggle.defaultProps = {
  active: false,
};

Toggle.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Toggle;
