import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const HeaderGroup = styled.div`
padding: 24px;
color: #FA7268;
background: white;

h2 {
color: black;
font-size: 26px;
}

h1 {
  font-weight: 700;
  font-size: 42px;
}
`



const Header = ({ siteTitle }) => (
  <HeaderGroup>



        <h1>Hello, <br />
        I'm Alex Knight.</h1>
        <h2>I design <br />
        Import Lottie Here<br />
        experiences that people love</h2>

   
  </HeaderGroup>
)

export default Header
