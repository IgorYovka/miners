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
