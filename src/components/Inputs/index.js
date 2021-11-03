/* eslint-disable react/prop-types */
import React from 'react';
import { InputContainer, InputComp } from './styles';
import { foregroundLight } from '../../theme';

const Input = ({
  Icon,
  iconSide = 'left',
  iconFill = foregroundLight,
  iconWidth = '1rem',
  iconHeight = '1rem',
  iconMargin = '5%',
  iconPadding = '6%',
  width,
  flex,
  ...restProps
}) => {
  const iconSideProps =
    iconSide === 'left'
      ? {
          justifyContent: 'flex-start',
          left: iconMargin,
          paddingLeft: iconPadding,
          iconWidth,
        }
      : {
          justifyContent: 'flex-end',
          right: iconMargin,
          paddingRight: iconPadding,
          iconWidth,
        };
  return (
    <InputContainer {...{ flex }} {...{ width }} {...iconSideProps}>
      <InputComp {...restProps} {...iconSideProps} />
      {Icon ? (
        <Icon fill={iconFill} width={iconWidth} height={iconHeight} />
      ) : null}
    </InputContainer>
  );
};

export { Input };
