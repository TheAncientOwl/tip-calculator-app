import Input from '../input';
import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InvalidInputMessage = styled.div`
  color: #e9a493;
  font-weight: bold;
  display: ${({ invalid }) => (invalid ? '' : 'none')};
`;

export const Input2 = styled(Input)`
  border-color: ${({ invalid }) => (invalid ? '#e9a493' : '')};
`;
