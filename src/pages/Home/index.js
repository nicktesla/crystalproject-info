import React, { Component } from 'react';
import {
  Header,
  HeaderH3,
  Main,
  BLMBanner,
  Splash,
  SplashColumn,
  UnityHands,
  Underline,
  ButtonLink,
  ContentGrid,
  ContentColumn,
  ContentColumnSubgrid,
  Footer,
  FooterColumn,
  LinkIcon,
} from './styles';

import { H1, H2, H3, PLarge, Bold, Ul, Li } from '../../components/Typography';

import ProjectCard from '../../components/ProjectCard';

import BLMBannerImage from '../../assets/images/blm_banner.png';
import crystalThumb from '../../assets/images/crystal__thumb.png';
import batmanThumb from '../../assets/images/batman_thumb.png';
import iconTwitter from '../../assets/images/twitter_icon.png';
import iconGithub from '../../assets/images/github_icon.png';

class Home extends Component {
  render() {
    return (
      <>
        <Header>
          <HeaderH3>Crystal</HeaderH3>
          <BLMBanner>
            <img src={BLMBannerImage} alt={'Black Lives Matter'} />
          </BLMBanner>
        </Header>
        <Splash>
          <SplashColumn>
            <ButtonLink
              href={
                'https://join.slack.com/t/crystalpolice/shared_invite/zt-essyn1xu-G5CAEuWgvSaZ04iIQ11FCQ'
              }
              target={'_blank'}
            >
              Join our Slack →
            </ButtonLink>
            <H1 style={{ marginBottom: 0 }}>
              <Underline>Improving relationships</Underline>
              <br />
              between police and their communities.
            </H1>
          </SplashColumn>
        </Splash>
        <Main>
          <ContentGrid>
            <ContentColumn>
              <H2>Manifesto for Collective Law Enforcement</H2>
              <PLarge>
                We are a community that believes radical transparency in law
                enforcement and healthy community engagement are critical. We
                also believe that software can play a significant role:
              </PLarge>
              <ul>
                <Li>
                  <Bold>Permissionless approaches</Bold> as a complement to
                  negotiation and lobbying
                </Li>
                <Li>
                  <Bold>Engaging products</Bold> as a complement to policy
                  recommendations
                </Li>
                <Li>
                  <Bold>Community vetted transparency</Bold> over delegated
                  trust
                </Li>
                <Li>
                  <Bold>Real-time awareness</Bold> over delayed formal action
                </Li>
              </ul>
              <PLarge>
                We believe there is a lot of value in the items on the right and
                see ourselves as part of a broad ecosystem enabling them, but
                the items on the left are our preferred means of contribution.
              </PLarge>
            </ContentColumn>
            <ContentColumn>
              <H2>Current Projects</H2>
              <ContentColumnSubgrid>
                <ProjectCard
                  projectImg={crystalThumb}
                  projectName={'Crystal'}
                  projectImgAlt={'Police Office Rating Card'}
                  imgStyle={{
                    boxShadow: `0px 1.408px 21.12px rgba(52, 32, 1, 0.12)`,
                    borderRadius: 6,
                  }}
                  projectDesc={
                    'A citizen’s database of individual police officer and department profiles.'
                  }
                />
                <ProjectCard
                  projectImg={batmanThumb}
                  projectName={'Batman'}
                  projectImgAlt={'Batman Mobile App'}
                  projectDesc={
                    'An Amber Alert Protocol for the internet. A system that analyze real-time video and photos streams.'
                  }
                />
              </ContentColumnSubgrid>
            </ContentColumn>
          </ContentGrid>
        </Main>
        <Footer>
          <FooterColumn>
            <ButtonLink
              href={
                'https://join.slack.com/t/crystalpolice/shared_invite/zt-essyn1xu-G5CAEuWgvSaZ04iIQ11FCQ'
              }
              target={'_blank'}
            >
              Join our Slack →
            </ButtonLink>
            <H1 style={{ marginBottom: 64 }}>
              <Underline>Join our Slack</Underline>
              <br />
              to contribute or add new ideas.
            </H1>
            <div
              style={{
                display: 'flex',
                width: 112,
                justifyContent: 'space-between',
              }}
            >
              <a href='#'>
                <LinkIcon src={iconTwitter} alt={'Twitter Logo'} />
              </a>
              <a href=''>
                <LinkIcon src={iconGithub} alt={'GitHub Logo'} />
              </a>
            </div>
          </FooterColumn>
        </Footer>
      </>
    );
  }
}

export default Home;
