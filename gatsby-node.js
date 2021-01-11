const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const sectionTemplate = path.resolve( `./src/templates/section-template.tsx` )

  const portfolio = await graphql(
    `
    {
      allFile(filter: {sourceInstanceName: {eq: "portfolio"}}) {
        group(field: relativeDirectory) {
          nodes {
            relativeDirectory
            childImageSharp {
              fluid(maxWidth: 700) {
                base64
                aspectRatio
                sizes
                src
                srcSet
              }
              fixed(width: 300, height: 300) {
                base64
                width
                height
                src
                srcSet
              }
            }
          }
        }
      }
    }
    `
  )

  if (portfolio.errors) {
    reporter.panicOnBuild(
      `There was an error loading portfolio pages`,
      portfolio.errors
    )
    return
  }

  const sections = portfolio.data.allFile.group

  sections.forEach((section) => {
    createPage({
      path: `/section/${section.nodes[0].relativeDirectory}`,
      component: sectionTemplate,
      context: { section },
    })
  })
}

