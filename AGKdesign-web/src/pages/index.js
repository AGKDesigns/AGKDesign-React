import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Card from '../components/Card';


const IndexPage = ({ data }) => (
  <div>
    <h1>Hello and welcome to my site!</h1>
    <p>So the plan is to have a header, some tiles, and use contentful to store all of the details!</p>
    <p>Tile, Artcile items, footer content, what </p>



<Card data={data}/>

 <Link to="/page-2/">Go to page 2</Link>
 <a href="http://www.github.com/maisonm" target="_blank" rel="noopener norefferer">Hello </a>


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
          createdAt
        }
      }
    }
  }
`