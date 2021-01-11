import { ChakraProvider, Container, Divider, Flex, Spacer, Text, VStack } from '@chakra-ui/react'
import theme from "@chakra-ui/theme"
import PropTypes from "prop-types"
import React from "react"
import NavBar from './navbar'

function Layout({ title, children }) {
  const siteTheme = {
    ...theme,
  }

  return (
    <ChakraProvider theme={siteTheme}>
      <Container maxW="4xl">
        <VStack spacing={6}>
          <NavBar title={title} />
          <Divider />
          <main>{children}</main>
          <Divider />
          <Flex width="100%">
            <Text fontSize="sm">© {new Date().getFullYear()}{` `}The Lucid Lens</Text>
            <Spacer />
            <Text fontSize="sm">Made with ❤️ by Stephen Harrison</Text>
          </Flex>
        </VStack>
      </Container>
    </ChakraProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
