import { StarIcon } from '@chakra-ui/icons';
import { Box, Image, VStack, Text, Spacer, Flex, Button, Container } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";
import Img from 'gatsby-image'

function SectionCard({ section }) {
    console.log('section card', section)
    const first = section.nodes[0]

    return (
        <Link to={`/section/${first.relativeDirectory}`}>
            <Box minHeight="300" minWidth="300">
                <Img fixed={first.childImageSharp.fixed} />
            </Box>
        </Link>
    );
};

export default SectionCard;
