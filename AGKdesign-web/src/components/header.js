import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const HeaderGroup = styled.div`
padding: 24px;
color: #FA7268;
margin-bottom: -24px;
h2 {
color: black;
font-size: 26px;
}

h1 {
  font-weight: 700;
  font-size: 42px;

}

`

const HeaderContent = styled.div `
width: 950px;
margin-left: auto;
margin-right: auto;

`

const Title = styled.div `
animation: HeroAnimation;
animation-duration: 2s;

animation-fill-mode: forwards;
opacity: 0;
@keyframes HeroAnimation {
  0% {
      opacity: 0;
      transform: translateY(20px)
  }
  100% {
      opacity: 1;
      transform: translateY(0px)
  }
}
`

const Subtitle = styled.div `
    margin-top: 0px;
    margin-bottom: 24px;
    color: #aaaaaa;
    font-weight: 700;
    font-size: 18px;
    animation: HeroAnimation;
animation-duration: 3s;
animation-delay: 0.5s;
animation-fill-mode: forwards;
opacity: 0;
    
  @keyframes HeroAnimation {
  0% {
      opacity: 0;
      transform: translateY(20px)
  }
  100% {
      opacity: 1;
      transform: translateY(0px)
  }
}
`



const Header = ({ siteTitle }) => (
  <HeaderGroup>


<HeaderContent>
        <Title><h1>Hello, <br />
        I'm Alex Knight.</h1></Title>
        <Subtitle>I am a Product Designer living in Tokyo, Japan.</Subtitle>
</HeaderContent>
</HeaderGroup>
)

export default Header
