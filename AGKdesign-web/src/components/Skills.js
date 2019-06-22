import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const SkillsContainer = styled.div `
display: grid;
grid-gap: 20px;
grid-template-columns: repeat(6, 1fr);
margin-bottom: 42px;
max-width: 600px;

@media only screen and (max-width: 740px) { 
    grid-template-columns: repeat(4, 1fr);
    max-width: 300px;
}
`

const SkillsGroup = styled.div`

background: #fafafa;
border-radius: 10px;
margin-left: auto;
margin-right: auto;
width: 80px;
padding: 10px;
-webkit-filter: grayscale(0%);
  filter: grayscale(0%);
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1.0);
  
`



const SkillsTitle = styled.div`
font-size: 10pt;
color: gray;
text-align: center;
margin-top: 8px;
`



const SkillsIcon = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 50px;
height: 50px;

`

const Skills = ({ data }) => (
<div>
<h2>Skills</h2>
    <SkillsContainer>
        {data.allContentfulSkills.edges.map (edge => (
            <SkillsGroup>
                    <SkillsIcon src={'https:' + edge.node.icon.file.url} />   
                    <SkillsTitle>{edge.node.title}</SkillsTitle>
            </SkillsGroup>
        ))}
    </SkillsContainer>

<h2>Tools</h2>
    <SkillsContainer>
        {data.allContentfulTools.edges.map (edge => (
            <SkillsGroup>
                <SkillsIcon src={'https:' + edge.node.icon.file.url} />   
                <SkillsTitle>{edge.node.title}</SkillsTitle>
            </SkillsGroup>
        ))}
    </SkillsContainer>
 </div>
)

export default Skills