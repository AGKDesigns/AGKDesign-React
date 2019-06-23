import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'


const FeatureGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;

`
const FeatureItem = styled.div`
margin-top: -40px;
max-width: 500px;
`

const FeatureTitle = styled.div`
color: #FA7268 !important;
font-size: 12px;

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
<h2>Interviews and features</h2> <br />
    <FeatureGroup> 

    {data.allContentfulFeature.edges.map (edge => (

        <FeatureItem>
            <FeatureTitle> <a href={edge.node.url}><h2>{edge.node.title}</h2></a></FeatureTitle>
            <FeatureDesc><p> {edge.node.description}</p></FeatureDesc>
        </FeatureItem>

    ))}
    </FeatureGroup>
</div>
)
export default Features