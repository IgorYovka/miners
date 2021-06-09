import styled from 'styled-components';

export const MainComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  
  .wrapperTop {
   position: relative;
   z-index: 2;
  }
  
  .wrapperMain {
   position: relative;
   z-index: 1;
  }
  
  .sidePanel {
    position: relative;
   z-index: 2;
  }
`;

export const CanvasWrapper = styled.div`
  position: relative;
  width: calc(100% - 30rem);
  height: 100%;
  z-index: 1;
`;