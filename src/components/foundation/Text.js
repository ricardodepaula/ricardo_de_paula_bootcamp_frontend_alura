import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import propToStyle from '../../theme/utils/propToStyle';

export const textStyles = {
  titleLG: css`
    font-size: ${({ theme }) => theme.textStyle.titleLG.fontSize};
    font-weight: ${({ theme }) => theme.textStyle.titleLG.fontWeight};
    line-height: ${({ theme }) => theme.textStyle.titleLG.lineHeight};
    text-transform: ${({ theme }) => theme.textStyle.titleLG.textTransform};
  `,
  titleMD: css`
    font-size: ${({ theme }) => theme.textStyle.titleMD.fontSize};
    font-weight: ${({ theme }) => theme.textStyle.titleMD.fontWeight};
    line-height: ${({ theme }) => theme.textStyle.titleMD.lineHeight};
    text-transform: ${({ theme }) => theme.textStyle.titleMD.textTransform};
  `,
  titleSM: css`
    font-size: ${({ theme }) => theme.textStyle.titleSM.fontSize};
    font-weight: ${({ theme }) => theme.textStyle.titleSM.fontWeight};
    line-height: ${({ theme }) => theme.textStyle.titleSM.lineHeight};
  `,
  subtitle: css`
    font-size: ${({ theme }) => theme.textStyle.subtitle.fontSize};
    font-weight: ${({ theme }) => theme.textStyle.subtitle.fontWeight};
    line-height: ${({ theme }) => theme.textStyle.subtitle.lineHeight};
  `,
  paragraph1: css`
    font-size: ${({ theme }) => theme.textStyle.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.textStyle.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.textStyle.paragraph1.lineHeight};
  `,
  paragraph2: css`
    font-size: ${({ theme }) => theme.textStyle.paragraph2.fontSize};
    font-weight: ${({ theme }) => theme.textStyle.paragraph2.fontWeight};
    line-height: ${({ theme }) => theme.textStyle.paragraph2.lineHeight};
  `,
};

const TextBase = styled.span`
  ${({ variant }) => textStyles[variant]}
  ${propToStyle('textAlign')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginBottom')}
`;

const Text = ({
  tag, variant, children, ...props
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <TextBase as={tag} variant={variant} {...props}>
    {children}
  </TextBase>
);

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};

Text.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

export default Text;
