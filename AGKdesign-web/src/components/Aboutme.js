import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'


const AboutMeContentGroup = styled.div `
max-width: 500px;
`

const Aboutme = ({ data }) => (
    <AboutMeContentGroup>
    <h2>A little more about me</h2> 
 
    <p>
       I have been designing products for over 16 years. <br />
        <br />
        In that time, I have create interfaces and experiences for medical products, streaming services, world class events, banks, fintech, IoT, blockchain, and world leading tech companies. <br />
        <br />
        I have won multiple awards for design and spoken at conferences all over the world. <br />
        <br />
        I also love <a href="https://instagram.com/agk42" target="_black">photography</a>, playing music and Korean food. <br />
        <br />
        <a href="mailto:alex@agkdesigns.net">Drop me a line </a>if you want to chat. <br />


    </p>

</AboutMeContentGroup>
)

export default Aboutme