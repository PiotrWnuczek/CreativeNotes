import React from 'react';
import styled from 'styled-components';
import List from 'blocks/List';
import Info from 'blocks/Info';

const Wrapper = styled.div`
  text-align: center;
`;

const Start = () => (
  <Wrapper>
    <List />
    <Info />
  </Wrapper>
);

export default Start;
