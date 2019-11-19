import React from 'react';
import PropTypes from 'prop-types';
import Essex from './essex';
import Nottingham from './nottingham';
import Leeds from './leeds';
import Sparrow from './sparrow';

const EduFill = ({ name }) => {
  switch (name) {
    case 'Essex':
      return <Essex />;
    case 'Nottingham':
      return <Nottingham />;
    case 'Leeds':
      return <Leeds />;
    default:
      return <Sparrow />;
  }
};

EduFill.props = {
  name: PropTypes.string.isRequired,
};
export default EduFill;
