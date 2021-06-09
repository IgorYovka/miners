import styled from 'styled-components';

interface IProps {
  chosen: boolean;
}

export const Cat = styled.div<IProps>`
 position: relative;
 display: flex;
 background: ${props => props.chosen ? 'red' : 'cornflowerblue'};
 
 width: 50px;
 height: 50px;
 
 cursor: pointer;
`;

export const Talk = styled.div`
 position: absolute;
 top: -20px;
 right: -20px;
`;