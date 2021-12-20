import * as React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const Home = React.memo(function Home() {
  return (
    <div>
      <Title>potato</Title>
    </div>
  );
});

export default Home;
