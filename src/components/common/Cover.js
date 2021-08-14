import React from 'react';
import styled, { css } from 'styled-components';

import breakpointsMedia from '../../theme/utils/breakpointsMedia';
import Text from '../foundation/Text';

const CoverWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${breakpointsMedia({
    xs: css`
      height: 568px;
    `,
    sm: css`
      height: 620px;
    `,
    md: css`
      height: 680px;
    `,
    lg: css`
      height: 730px;
    `,
    xl: css`
      height: 93vh;
    `,
  })}
`;

const Cover = () => (
  <CoverWrapper>
    <Text variant="titleLG" as="p" textAlign="center" marginTop="0" marginBottom="0">Ricardo de Paula</Text>
    <Text variant="subtitle" as="p" textAlign="center" marginTop="0" marginBottom="0">Analista de Sistemas</Text>
  </CoverWrapper>
);

export default Cover;
