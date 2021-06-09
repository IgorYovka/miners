import styled from 'styled-components';

export const PanelComponent = styled.div`
  width: 30rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: #c1d7ff;
`;

export const Items = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: inherit;
  
  .item {
   border: 0.1rem solid black;
   border-radius: 0.5rem;
   margin: 1rem 0;
   cursor: pointer;
   background: white;
  }
`;