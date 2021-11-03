import styled from 'styled-components';

export const InputContainer = styled.div.attrs({
  className: `bg-white`,
})`
  position: relative;
`;

export const DropdownContainer = styled.div.attrs({
  className: `flex-col justify-center items-start`,
})`
  position: absolute;
  background-color: white;
  width: 100%;
  z-index: 2100;
  border-radius: 5%;
  display: none;
  text-align: left;
  &.visible {
    display: flex;
    border: 1px solid;
    border-radius: 0.25rem;
    border-color: #ced4da;
    border-radius: 0px 0px 8px 8px;
  }
`;
