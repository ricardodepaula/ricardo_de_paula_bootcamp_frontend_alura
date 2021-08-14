import React from 'react';

import Card from './Card';
import Grid from '../../layout/Grid';
import Text from '../../foundation/Text';
import CardFeatured from './CardFeatured';

const projects = [
  {
    id: 1,
    name: 'Instalura',
    imageUrl: '/images/instalura.png',
    description: 'Aplicação web clone do Instagram desenvolvida com o objetivo de aplicar os conceitos da JAMStack utilizando Next.js e styled-components',
    repoLink: 'https://github.com/ricardodepaula/instalura-base',
    appLink: 'https://instalura-ricardodepaula.vercel.app/',
  },
  {
    id: 2,
    name: 'Projeto Report',
    imageUrl: '/images/homepage.png',
    description: 'My personal web page.',
  },
  {
    id: 3,
    name: 'Projeto Report',
    imageUrl: '/images/homepage.png',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
  },
];

const WrapperProjects = () => (
  <Grid.Container>
    <Grid.Row marginTop="32px" marginBottom="32px">
      <Grid.Col value={12} display="flex" justifyContent="center">
        <Text variant="titleMD">My projects</Text>
      </Grid.Col>
    </Grid.Row>
    <Grid.Row marginBottom="16px">
      {projects.map((project) => (
        <Grid.Col key={project.id} value={{ xs: 12, md: 4 }}>
          <Card imageUrl={project.imageUrl} title={project.name} />
        </Grid.Col>
      ))}
    </Grid.Row>
    <Grid.Row marginBottom="16px">
      <Grid.Col value={12}>
        <CardFeatured
          imageUrl={projects[0].imageUrl}
          title={projects[0].name}
          description={projects[0].description}
          repoLink={projects[0].repoLink}
          appLink={projects[0].appLink}
        />
      </Grid.Col>
    </Grid.Row>
  </Grid.Container>
);

export default WrapperProjects;
