import { Button, SimpleGrid, Box } from "@chakra-ui/react"
import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SectionCard from "../components/section-card"

const IndexPage = ({ data }) => {
  console.log('index data', data)
  return (
    <Layout title="Portfolio">
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4}>
        {
          data.allFile.group.map((section) => <Box key={section.relativeDirectory}>
            <SectionCard section={section} />
          </Box>)
        }
      </SimpleGrid>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allFile(filter: {sourceInstanceName: {eq: "portfolio"}}) {
      group(field: relativeDirectory, limit: 1) {
        nodes {
          relativeDirectory
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

