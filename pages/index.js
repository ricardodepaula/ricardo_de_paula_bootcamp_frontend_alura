import React from 'react';
import Cover from '../src/components/common/Cover';
import Header from '../src/components/common/Header';
import WrapperProjects from '../src/components/common/Projects/WrapperProjects';
import Footer from '../src/components/common/Footer';

export default function Home() {
  return (
    <>
      <Cover />
      <Header />
      <WrapperProjects />
      <Footer />
    </>
  );
}
