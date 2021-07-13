import styled from 'styled-components';
import IconSrc from '../images/logo.svg';

const Container = styled.img`
  margin-bottom: 4em;
`;

export default function Logo() {
  return <Container src={IconSrc} alt='splitter' />;
}
