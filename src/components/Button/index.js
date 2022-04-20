import React from 'react';
import { Container, Name } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, fas } from '@fortawesome/free-solid-svg-icons'

export default function Button({ icon, name, link }) {
library.add(fab, fas, faCheckSquare, faCoffee)
  return (
    <Container href={link} target='_blank'>
      <FontAwesomeIcon icon={icon} />
      <Name>{name}</Name>
    </Container>
  );
}