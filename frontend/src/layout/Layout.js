import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  & > .content {
    position: relative;
    box-sizing: border-box;
    height: auto;
    min-height: 800px;
    /* min-height: 100%; */
    /* padding-bottom: 360px; */
    padding-bottom: 100px;
  }
`;

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
