import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'


const CardGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  text-decoration: none;

:a {
  text-decoration: none;
}
  @media (max-width: 780px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const CardBlanket = styled.div`
  background-color: rgba(0,0,0,.5);
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1.0);
  border-radius: 20px;

  :hover {
    background-color: rgba(0,0,0,.2);
  }
`

const CardBackground = styled.div`

background: url(${props => props.image});
min-height: 200px;
background-repeat: no-repeat;
background-size: 100%;
border-radius: 20px;
background-position: center; 
transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1.0);
:hover {
  background-size: 110%;
  opacity: 1;
}
a:link {
  text-decoration:none;
}
`

const CardLogo = styled.img`
width: 85px;
height: 85px;
`

const CardContentGroup = styled.div`
padding: 25px;
`




const CardTitle = styled.div`
font-size: 30px;
color: white;
font-weight: 700;
text-shadow: 0px 8px 8px rgba(0,0,0,0.3);
`

const CardText = styled.div`
color: white;
font-weight:600;
margin-top: 15px;
text-shadow: 0px 8px 16px rgba(0,0,0,0.3);


`


const Card = ({ data }) => (
<CardGroup>
{data.allContentfulCard.edges.map (edge => (
  <a href={edge.node.url} >

<CardBackground image={'https:' + edge.node.backgroundImage.file.url} >
<CardBlanket>
<CardContentGroup>
  <CardLogo src={'https:' + edge.node.logo.file.url} />   
  <CardTitle>{edge.node.title}</CardTitle>
  <CardText>{edge.node.description}</CardText>


  </CardContentGroup>
  </CardBlanket>
</CardBackground>

</a>
  ))}
</CardGroup>

)  
export default Card