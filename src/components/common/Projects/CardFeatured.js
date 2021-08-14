import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Text from '../../foundation/Text';
import Github from '../../../theme/Icons/Github';
import WebPage from '../../../theme/Icons/WebPage';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const CardWrapper = styled.div`
  width: 100%;
  border-color: ${({ theme }) => theme.colors.secondary.main.color};
  border-style: solid;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  ${breakpointsMedia({
    xs: css`
      flex-wrap: wrap;
    `,
    md: css`
      flex-wrap: nowrap;
    `,
  })}
`;

const CardDivImage = styled.div`
  ${breakpointsMedia({
    xs: css`
      max-width: 100%;
    `,
    lg: css`
      max-width: 70%;
    `,
  })}
  display: flex;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${({ theme }) => theme.colors.background.soft.color};;
`;

const CardImage = styled.img`
  width: 60%;
`;

const CardInfo = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  svg {
    height: 32px;
    width: 32px;
    margin-right: 4px;
  }
`;

const CardFeatured = ({
  imageUrl, title, description, repoLink, appLink,
}) => (
  <CardWrapper>
    <CardDivImage>
      <CardImage alt="teste" src={imageUrl} />
    </CardDivImage>
    <CardInfo>
      <Text as="p" variant="titleSM" textAlign="center" marginBottom="6px">{title}</Text>
      <Text as="p" variant="paragraph1" textAlign="center" marginBottom="6px">{description}</Text>
      <Text as="p" variant="paragraph1" textAlign="center">
        <a href={repoLink} alt="Acesso ao repositório do projeto"><Github /></a>
        <a href={appLink} alt="Acesso a webpage do projeto"><WebPage /></a>
      </Text>
    </CardInfo>
  </CardWrapper>
);

CardFeatured.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
  appLink: PropTypes.string.isRequired,
};

export default CardFeatured;
