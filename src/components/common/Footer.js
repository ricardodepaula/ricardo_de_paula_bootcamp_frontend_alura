/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Github from '../../theme/Icons/Github';
import Linkedin from '../../theme/Icons/Linkedin';
import Telegram from '../../theme/Icons/Telegram';

const FooterWrapper = styled.footer`
  width: 100%;
  height: 7vh;
  display: flex;
  justify-content: center; 
  background-color: ${({ theme }) => theme.colors.background.soft.color};
`;

const FooterNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.strong.color};
  height: 100%;
  padding-left: 4px;
  padding-right: 4px;
`;

const FooterIcon = styled.li`
  padding: 0;
  margin-left: 20px;
  margin-right: 20px;
  list-style: none;
  height: 32px;
  width: 32px;
`;

const Footer = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <FooterWrapper {...props}>
    <FooterNav>
      <FooterIcon>
        <a href="https://www.linkedin.com/in/ricardo-de-paula-ce"><Linkedin /></a>
      </FooterIcon>
      <FooterIcon>
        <a href="https://github.com/ricardodepaula"><Github /></a>
      </FooterIcon>
      <FooterIcon>
        <a href="https://telegram.me/ricardodepaulace"><Telegram /></a>
      </FooterIcon>
    </FooterNav>
  </FooterWrapper>
);

FooterIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
