import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const FooterGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;

  p {
    font-size: 12px;
    clear: both;
  }

  h3 {
    margin: 0px;
  }
`
const Footer = ({ data }) => (
<FooterGroup>
<h3>Thank you for visiting.</h3><br />
<p>Special thanks for <a href="https://icons8.com">Icons 8</a> for the free icons.</p>
</FooterGroup>
)

export default Footer
