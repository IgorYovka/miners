import styled from 'styled-components';
import {ContextMenu as CM, MenuItem as MI} from "react-contextmenu";


export const ContextMenu = styled(CM)`
  border: 0.1rem solid black;
  background: white;
`;

export const MenuItem = styled(MI)`
  font-size: 15px;
  padding: 1rem 2rem;
  cursor: pointer;
  min-width: 10rem;
  user-select: none;

  &:hover {
    background: #bfbfbf;
  }
`;
