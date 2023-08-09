import { styled } from 'styled-components';

interface ToastProps {
  $type: 'success' | 'error';
}

const color = {
  success: '#28a745',
  error: '#dc3545',
};

export const ToastWrapper = styled.div<ToastProps>`
  background-color: ${(props) => color[props.$type]};
  color: white;
  padding: 16px;
  position: fixed;
  border-radius: 10px;
  cursor: pointer;
  width: 280px;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -100%);
  text-align: center;
`;
