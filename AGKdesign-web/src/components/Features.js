import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'


const FeatureGroup = styled.div`

`

const Features = ({ data }) => (
<div>
{data.allContentfulFeature.edges.map (edge => (
   <FeatureGroup> 
   <Link to={edge.node.url}><h2>{edge.node.title}</h2></Link>
<p> {edge.node.description}</p>
</FeatureGroup>
 ))}
</div>
)
export default Features