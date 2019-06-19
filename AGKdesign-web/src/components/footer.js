import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const FooterGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
`
const Footer = ({ data }) => (
<FooterGroup>This will soon be my footer!</FooterGroup>
)

export default Footer
