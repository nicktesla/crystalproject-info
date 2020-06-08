import React, { Component } from 'react';
import styled from 'styled-components';
import { H4, P, ButtonLink } from './Typography';

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
      <P style={{ marginBottom: 16 }}>{props.projectDesc}</P>
      {props.linkHref ? (
        <>
          <ButtonLink
            style={{ marginBottom: 32 }}
            href={props.linkHref}
            target={'_blank'}
          >
            {props.linkText}
          </ButtonLink>
        </>
      ) : (
        <></>
      )}
    </Card>
  );
}

export default ProjectCard;
