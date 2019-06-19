import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'


const CardGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;


  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const CardBackground = styled.div`
background: url(${props => props.image});
background-repeat: no-repeat;
  background-size: cover;
border-radius: 20px;
background-position: center; 



transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1.0);
:hover {
background-size: 110%
}

`

const CardLogo = styled.img`
width: 85px;
height: 85px;
transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1.0);
:hover {
  width: 95px;
  height: 95px;
}
`
const CardContentGroup = styled.div`
padding: 25px;
`
const CardTitle = styled.div`
font-size: 30px;
color: white;
font-weight: 700;
`

const CardText = styled.div`
color: white;
margin-top: 15px;
`


const Card = ({ data }) => (
<CardGroup>
{data.allContentfulCard.edges.map (edge => (
<CardBackground image={'https:' + edge.node.backgroundImage.file.url} >
<CardContentGroup>
  <CardLogo src={'https:' + edge.node.logo.file.url} />   
  <CardTitle>{edge.node.title}</CardTitle>
  <CardText>{edge.node.description}</CardText>
  </CardContentGroup>
</CardBackground>
  ))}
</CardGroup>

)  
export default Card