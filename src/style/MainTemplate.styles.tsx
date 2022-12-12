import styled from 'styled-components';

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  flex-grow: 1;
  flex-shrink: 1;
  border-right: 1px solid black;
`;
export const ChildWrapper = styled.div`
  display: flex;
  padding-left: 30px;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
`;

export const StyledTemplateWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const StyledNavButton = styled.button`
  width: 80%;
  margin-left: 30px;
  margin-top: 20px;
  height: 30px;
`;
