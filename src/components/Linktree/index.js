import React from 'react';
import { Container } from './styles';
import Button from '../Button';
import Header from '../Header';


export default function LinkTree() {
  return (
    <Container>
      <Header picture='' title='Joshua Howard' subtitle='I am a technolgy and financial enthusiast.' />
      <Button link='https://richlazypanda.io/' name={'LAZYPANDA NFT Collection'} icon={['fas', 'paw']}></Button>
      <Button link='https://nftturnout.io/' name={'NFTTURNOUT.IO'} icon={['fas', 'rocket']}></Button>
      <Button link='https://www.instagram.com/iamjoshhoward/' name={'Instagram'} icon={['fab', 'instagram']}></Button>
      <Button link='https://twitter.com/iamjoshhoward/' name={'Twitter'} icon={['fab', 'twitter']}></Button>
      <Button link='https://github.com/iamjoshhoward' name={'GitHub'} icon={['fab', 'github']}></Button>
      <Button link='https://www.linkedin.com/in/iamjoshhoward/' name={'LinkedIn'} icon={['fab', 'linkedin']}></Button>
    </Container>
  )
}