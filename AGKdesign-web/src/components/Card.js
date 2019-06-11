import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'


const CardGroup = styled.div``
const CardLogo = styled.img``
const CardTitleGroup = styled.div``
const CardTitle = styled.div``
const CardText = styled.div``


const Card = ({ data }) => (
  <div> 
Hello
{data.allContentfulCard.edges.map (edge => (
  <div>
  {edge.node.title}
  {edge.node.description}
  </div>
  ))}
</div> 

)
export default Card