import React, { Component } from 'react';
import {
  Header,
  Main,
  Footer,
  H3,
  BLMBanner,
  Splash,
  SplashColumn,
  UnityHands,
  H1,
  Underline,
} from './styles';

import BLMBannerImage from '../../assets/images/blm_banner.png';

class Home extends Component {
  render() {
    return (
      <>
        <Header>
          <H3>Crystal</H3>
          <BLMBanner>
            <img src={BLMBannerImage} alt={'Black Lives Matter'} />
          </BLMBanner>
        </Header>
        <Splash>
          <SplashColumn>
            <UnityHands />
            <H1>
              <Underline>Improving relationships</Underline> between police and
              their communities.
            </H1>
          </SplashColumn>
        </Splash>
        <Main></Main>
        <Footer></Footer>
      </>
    );
  }
}

export default Home;
