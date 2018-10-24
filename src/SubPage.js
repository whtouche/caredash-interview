import React from 'react';

const SubPage = (props) => {
  console.log('props: ', props);
  return <h1>{props.location.state.title}</h1>;
};

export default SubPage;
