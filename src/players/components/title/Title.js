import React from 'react';
import { string } from 'prop-types';

const Title = props => {
  const { title } = props;
  return <h2>{title}</h2>;
}

Title.propTypes = {
  title: string.isRequired
};


export default Title;