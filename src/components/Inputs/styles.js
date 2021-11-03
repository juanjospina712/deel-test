import styled from 'styled-components';

export const InputContainer = styled.div.attrs({
  className: `relative flex items-center`,
})`
  & {
    justify-content: ${({ justifyContent }) => justifyContent || 'flex-end'};
    flex: ${({ flex }) => flex || '1'};
    width: ${({ width }) => width || '100%'};
    svg {
      position: absolute;
      right: ${({ right }) => right || ''};
      left: ${({ left }) => left || ''};
    }
  }
`;

export const InputComp = styled.input`
  outline: 0;
  background: transparent;
  padding: ${({ padding }) => padding || '15px'};
  padding-left: ${({ paddingLeft, iconWidth }) =>
    paddingLeft ? `calc(${paddingLeft} + ${iconWidth})` : ''};
  padding-right: ${({ paddingRight, iconWidth }) =>
    paddingRight ? `calc(${paddingRight} + ${iconWidth})` : ''};
  width: 100%;
  color: #0d1f3c;
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  line-height: 24px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #b1b1b1;
  }
`;
