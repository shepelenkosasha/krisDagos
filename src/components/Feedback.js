import React, { Component } from 'react';
import '../App.css';

import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';

import Header from './Header';

import Footer from './Footer';

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

class Feedback extends Component {
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

export default Feedback;
