import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'


const FeatureGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
`
const FeatureItem = styled.div`

`

const FeatureTitle = styled.div`
color: #FA7268;


a {
    color: #FA7268;
    text-decoration: none;
}
a:visited {
    color: #E27D75;
    text-decoration: none;
}
`

const FeatureDesc = styled.div`

`

const Features = ({ data }) => (
<div>
{data.allContentfulFeature.edges.map (edge => (
<FeatureGroup> 
    <FeatureItem>
        <FeatureTitle> <a href={edge.node.url}><h2>{edge.node.title}</h2></a></FeatureTitle>
        <FeatureDesc><p> {edge.node.description}</p></FeatureDesc>
    </FeatureItem>
</FeatureGroup>
 ))}
</div>
)
export default Features