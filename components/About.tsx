import * as React from 'react';
import Link from 'next/link';

const About = React.memo(function About() {
  return (
    <div>
      About
      <Link href="/">
        <a>home</a>
      </Link>
    </div>
  );
});

export default About;
