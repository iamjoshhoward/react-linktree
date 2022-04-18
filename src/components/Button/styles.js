import styled from 'styled-components';

export const Container = styled.a`
  align-items: center;
  background: #ef9d10;
  color: #3b4d61;
  border-radius: 3px;
  display: flex;
  flex-flow: row;
  justify-content: center;
  margin: 10px auto;
  text-decoration: none;
  width: 100%;
  
  &:hover {
    transition: all 0.4s ease-out;
    background: #6b7b8c;
    cursor: pointer;
  }
}
`;

export const Icon = styled.img`
  height: 50px;
  margin: 0 5px;
  padding: 5px;
`;

export const Name = styled.p`
  color: #fff;
  padding: 15px 0;
  margin-left: 5px;
`;