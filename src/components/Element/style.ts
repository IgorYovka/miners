import styled from 'styled-components';

import {Menu as CM, Item as MI} from "react-contexify";


export const ContextMenu = styled(CM)`
  padding: 0;
  border: 0.1rem solid black;
  background: white;
  overflow: hidden;
  
  .react-contexify__item {
   &:hover {
    .react-contexify__item__content {
      background: #bfbfbf !important;
     }
   }
  }
`;

export const MenuItem = styled(MI)`
  font-size: 15px;
  padding: 1rem 2rem;
  cursor: pointer;
  min-width: 10rem;
  user-select: none;

  &:hover {
    background: #bfbfbf !important;
  }
`;


export const Name = styled.div`
  position: relative;
  top: -2rem;
  font-size: 1.4rem;
`;

interface IElementProps {
  name: string
  x: number;
  y: number;
}

export const Component = styled.div<IElementProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({name}) => name === 'base' ? '#53c553' : name === 'mine' ? '#f9b754' : name === 'store' ? '#9a9a9a' : ''};
  position: absolute;
  left: calc(${({x}) => x}px - 2.5rem);
  top: calc(${({y}) => y}px - 2.5rem);
  width: 5rem;
  height: 5rem;
  user-select: none;
  border: 0.2rem solid ${({name}) => name === 'base' ? '#6eb187' : name === 'mine' ? '#f7ce90' : name === 'store' ? '#c7c2c2' : ''};
  border-radius: 0.7rem;
`;