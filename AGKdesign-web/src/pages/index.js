import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Features from '../components/Features';
import Skills from '../components/Skills'
import Aboutme from '../components/Aboutme'
import Footer from '../components/footer'
import Social from '../components/Social'


const IndexPage = ({ data }) => (

<div class="pageContent">
<Social data={data}/>
<Card data={data} />
<Features data={data} />
<Skills data={data}/>
<Aboutme />
<Social data={data}/>
<Footer data={data}/>
.
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
      url
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

allContentfulSkills(sort: { fields: [createdAt], order: ASC })  {
  edges {
    node {
      title
      icon {
        file {
          url
        }
      }
    }
  }
}

allContentfulTools(sort: { fields: [createdAt], order: ASC })  {
  edges {
    node {
      title
      icon {
        file {
          url
        }
      }
    }
  }
}

allContentfulSocial(sort: { fields: [createdAt], order: ASC })  {
  edges {
    node {
      title
      url
      icon {
        file {
          url
        }
      }
    }
  }
}
}

`