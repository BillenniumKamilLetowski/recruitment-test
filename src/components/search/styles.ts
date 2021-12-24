import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
`;

export const Input = styled.input`
  padding: 12px 16px;
  border-radius: 8px 0 0 8px;
  font-size: 18px;
  border: 1px solid #333;
  border-right: none;
  outline: none;
  min-width: 400px;
`;

export const Button = styled.button`
  border-radius: 0 8px 8px 0;
  outline: 0;
  padding: 12px 24px;
  font-size: 18px;
  border: 1px solid #0050b3;
  background-color: #096dd9;
  color: #fff;
  transition: background-color 0.3s ease;
  cursor: pointer;
  letter-spacing: 1px;

  &:disabled {
    background-color: #ccc;
    border-color: #ccc;
  }

  &:hover {
    background-color: #0050b3;

    &:disabled {
      background-color: #ccc;
    }
  }
`;
