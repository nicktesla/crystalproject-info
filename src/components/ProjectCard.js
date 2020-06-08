import React, { Component } from 'react';
import styled from 'styled-components';
import { H4, P } from './Typography';

export const Card = styled.div`
  margin-bottom: 64px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Img = styled.img`
  margin-bottom: 24px;
`;

function ProjectCard(props) {
  return (
    <Card>
      <Img
        src={props.projectImg}
        alt={props.projectImgAlt}
        style={props.imgStyle}
      />
      <H4 style={{ marginBottom: 16 }}>{props.projectName}</H4>
      <P>{props.projectDesc}</P>
    </Card>
  );
}

export default ProjectCard;
