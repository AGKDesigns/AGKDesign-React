import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Features from '../components/Features';
import Skills from '../components/Skills'
import Aboutme from '../components/Aboutme'
import Footer from '../components/Footer'



const IndexPage = ({ data }) => (

<div class="pageContent">
<Card data={data} />

<h1>Recent interviews and features</h1>
<Features data={data} />
<Skills data={data}/>
<Aboutme />
<Footer data={data}/>
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
          url
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
      url
    }
  }
}
}

`