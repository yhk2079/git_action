import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
`;

const Home = React.memo(function Home() {
  return (
    <div>
      <Title>Hi potato!!!!!</Title>
      <Link href="/about" passHref prefetch>
        <a>About</a>
      </Link>
    </div>
  );
});

export default Home;
