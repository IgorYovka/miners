import styled from 'styled-components';

export const Component = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.1);
    z-index: 100
`;
export const Content = styled.div`
  position: absolute;
    top: 50%;
    left: 50%;
    width: fit-content;
    height: fit-content;
    transform: translate(-50%, -50%);
    background: transparent;
`;