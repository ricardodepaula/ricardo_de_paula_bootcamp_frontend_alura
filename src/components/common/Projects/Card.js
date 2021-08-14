import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../../foundation/Text';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-color: ${({ theme }) => theme.colors.secondary.main.color};
  border-style: solid;
  margin-bottom: 32px;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary.main.contrastText};
  }
`;

const CardImage = styled.img`
  width: 100%;
`;

const CardTitle = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`;

const Card = ({ imageUrl, title }) => (
  <CardWrapper>
    <CardImage alt="teste" src={imageUrl} />
    <CardTitle><Text as="p" variant="titleSM" textAlign="center">{title}</Text></CardTitle>
  </CardWrapper>
);

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
