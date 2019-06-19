import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Features from '../components/Features';


const IndexPage = ({ data }) => (
  <div>
<div class="pageContent">
<Card data={data} />


<br />
<Features data={data} />

Do a skills section that has logos of all the apps I am proficient in like on design code.io

<Link to="/page-2/">This is a link</Link> <br />
</div>
</div>
)

export default IndexPage

export const query = graphql`
  query CardsQuery {
    site {
      siteMetadata {
        title
      }
    }
    
    allContentfulCard(sort: { fields: [createdAt], order: ASC }) {
  edges {
    node {
      title
      description
      logo {
        file {
          url
          fileName
          contentType
        }
        } 
        backgroundImage {
        file {
          url
          fileName
          contentType
        }
        } 
      }
    
      
    }
  }
  allContentfulFeature(sort: { fields: [createdAt], order: ASC })  {
  edges {
    node {
      title
      description
    }
  }
}
}

`