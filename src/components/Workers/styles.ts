import styled from 'styled-components';

export const Component = styled.div`
 height: 100%;
`;

export const Add = styled.div`
 height: 5rem;
 margin-bottom: 2rem;
 display: flex;
 align-items: center;
 cursor: pointer;
 
 .circle {
   display: flex;
   justify-content: center;
   align-items: center;
   width: 3rem;
   height: 3rem;
   border-radius: 50%;
   border: 0.1rem solid black;
   font-size: 1.8rem;
   font-weight: 700;
 }
 
 .text {
  font-size: 1.6rem;
  margin-left: 2rem;
 }
`;

export const List = styled.div`
  overflow: auto;
  width: 100%;
  height: calc(100% - 8rem);
  margin-bottom: 1rem;
`;

export const Item = styled.div`
  padding: 0.6rem;
  width: calc(100% - 1.6rem);
  height: 3.6rem;
  border: 0.1rem solid #00000078;
  border-radius: 0.5rem;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const EditButtons = styled.div`
 display: flex;
 align-items: center;
 
 .btn {
   margin: 0.6rem;
   cursor: pointer;
 }
`;

export const Edit = styled.div`

`;

export const Delete = styled.div`

`;

export const Accept = styled.div`
 font-size: 2.2rem;
`;

export const Cancel = styled.div`
 font-size: 2.2rem;
`;

export const ItemId = styled.div`
 width: 4rem;
 text-align: center;
 font-size: 1.4rem;
`;

export const ItemField = styled.div`
 width: 14rem;
 font-size: 1.4rem;
`;

interface IFlagWorking {
  isWorking: boolean;
}

export const FlagWorking = styled.div<IFlagWorking>`
 width: 1rem;
 height: 1rem;
 background: ${({isWorking}) => isWorking ? 'green' : 'red'}
`;

export const DeleteText = styled.div`
 font-size: 1.4rem;
`;