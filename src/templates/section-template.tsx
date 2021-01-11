import { Text, Button, SimpleGrid, VStack, HStack, Flex, Spacer, Box, Container } from "@chakra-ui/react";
import React from "react";
import Layout from '../components/layout';
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import SectionCard from "../components/section-card";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ButtonFirst, ButtonLast } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { ArrowBackIcon, ArrowForwardIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

function ImageCard({ image }) {
    return (
        <Box alignContent="center">
            <Img fluid={image.fluid} />
        </Box>
    )
}

function ImageGrid({ images }) {
    console.log('images', images)
    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={images.length}
        >
            <Flex>
                <ButtonBack><ArrowLeftIcon /></ButtonBack>
                <Container width="4xl">
                    <Box width="100%">
                        <Slider>
                            {
                                images.map((image, index) => <Slide key={index} index={index} ><ImageCard image={image.childImageSharp} /></Slide>)
                            }
                        </Slider>
                    </Box>
                </Container>
                <ButtonNext><ArrowRightIcon /></ButtonNext>
            </Flex>
        </CarouselProvider>
        // <Container width="4xl">
        //     <Carousel
        //         dynamicHeight
        //         infiniteLoop
        //         useKeyboardArrows
        //         renderItem={(item: React.ReactNode) => <Box>{item}</Box>}
        //         renderThumbs={(children: React.ReactChild[]) => children.map(child => <Box>{child}</Box>)}
        //     >
        //         {
        //             images.map(image => <ImageCard image={image.childImageSharp} />)
        //         }
        //     </Carousel>
        // </Container>
    )
}

function SectionTemplate({ pageContext }) {
    const { section } = pageContext

    return (
        <Layout title={section.nodes[0].relativeDirectory}>
            <ImageGrid images={section.nodes} />
        </Layout>
    );
};

export default SectionTemplate;
