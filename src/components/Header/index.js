import React from 'react';
import { Container, Picture, Title, Subtitle } from './styles';

export default function Header({ picture, title, subtitle }) {
  return (
    <Container>
      <Picture />
      <Title> {title} </Title>
      <Subtitle> {subtitle} </Subtitle>
    </Container>
  )
}