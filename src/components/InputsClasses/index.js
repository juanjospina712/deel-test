/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { InputContainer, InputComp } from '../Inputs/styles';
import { foregroundLight } from '../../theme';

class Input extends Component {
  render() {
    const {
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
    } = this.props;
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
  }
}

export { Input };
