import React, { Component } from 'react';
import '../App.css';

import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';

import Header from './Header/Header';
import Pregnancy from './Pregnancy/Pregnancy';
import Footer from './Footer/Footer';

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #000;
`
const MainWrapper = styled.main`
  width: 100%;
  background-color: #000;
`
const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #000;
`

class PregnancyBlock extends Component {
  render() {
    return (
        <>
          <HeaderWrapper>
            <Grid>
              <Header />
            </Grid>
          </HeaderWrapper> 
          <MainWrapper>
            <Grid>
              <Pregnancy />
            </Grid>
          </MainWrapper>
          <FooterWrapper>
            <Grid>
             <Footer /> 
            </Grid>
          </FooterWrapper> 
        </>     
    );
  }
}

export default PregnancyBlock;