import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const SocialGroup = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  width: 100px;

  margin-bottom: 24px;
`
const SocialItem = styled.div `

`
const Icon = styled.img`
width: 30px;
height: 30px;
`

const Social = ({ data }) => (
    <SocialGroup>
    {data.allContentfulSocial.edges.map (edge => (
   
    <SocialItem>

      <a href={edge.node.url} target="_blank">
    <Icon src={'https:' + edge.node.icon.file.url} />
    </a>
    </SocialItem>
 
    ))}
    </SocialGroup>
    )
    
    export default Social