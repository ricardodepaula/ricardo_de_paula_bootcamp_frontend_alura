import React, { useRef } from 'react';
import styled, { css } from 'styled-components';

import breakpointsMedia from '../../theme/utils/breakpointsMedia';

const NavBarWrapper = styled.nav`
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 28px;
  padding-right: 28px;
  border-top-color:${({ theme }) => theme.colors.secondary.main.color};
  border-top-style: solid;
  background-color: ${({ theme }) => theme.colors.background.soft.color};
  ${breakpointsMedia({
    xs: css`
      height: 5vh;
    `,
    sm: css`
      height: 5vh;
    `,
    md: css`
      height: 6vh;
    `,
    lg: css`
      height: 6vh;
    `,
    xl: css`
      height: 7vh;;
    `,
  })}
`;

NavBarWrapper.LeftSide = styled.div`
  font-family: "Fira Sans Condensed", sans-serif;  
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color:  ${({ theme }) => theme.colors.background.soft.color};
  background-color: ${({ theme }) => theme.colors.background.strong.color};
  ${breakpointsMedia({
    xs: css`
      font-size: 18px;
    `,
    md: css`
      font-size: 38px;
    `,
  })}
`;

NavBarWrapper.RightSide = styled.div`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  ${breakpointsMedia({
    xs: css`
      font-size: 20px;
    `,
    sm: css`
      font-size: 22px;
    `,
    md: css`
      font-size: 28px;
    `,
    lg: css`
      font-size: 32px;
    `,
    xl: css`
      font-size: 38px;
    `,
  })}
  a, span {
    text-align: center;
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary.main.color};
    transition: 200ms ease-in-out;
    cursor: pointer;
    &:hover,
    &:focus {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.secondary.main.contrastText};
    }
  }
  li {
    ${breakpointsMedia({
    xs: css`
      margin-left: 8px;
      margin-right: 8px;
    `,
    md: css`
      margin-left: 12px;
      margin-right: 12px;
    `,
  })}
  }
`;

const Header = (props) => {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();

  const links = [
    {
      name: 'About me',
      url: '/sobre',
      id: 1,
    },
    {
      name: 'Contact',
      url: '/contato',
      id: 2,
    },
  ];
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <NavBarWrapper ref={myRef} {...props}>
      <NavBarWrapper.LeftSide>
        <span>{'<ME/>'}</span>
      </NavBarWrapper.LeftSide>
      <NavBarWrapper.RightSide>
        <li><span onKeyPress={executeScroll} role="link" tabIndex={0} onClick={executeScroll}>Portfolio</span></li>
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </NavBarWrapper.RightSide>
    </NavBarWrapper>
  );
};

export default Header;
