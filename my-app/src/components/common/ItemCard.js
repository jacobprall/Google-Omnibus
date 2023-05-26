import { GridItem, Box, Grid, Heading, Image, VStack, Link, Text, Button } from "@chakra-ui/react";
import React from "react";


const moveUp = (hovered) => (hovered ? {
  transform: 'translateY(-10px)',
  transition: 'transform 0.2s linear',
} : {
  transition: 'transform 0.2s linear',
})

const slowlyMoveUp = (hovered) => (hovered ? {
  transform: 'translateY(-100%)',
  transition: 'transform 20s linear',
} : {
  transition: 'transform 1s linear',
})

export const ItemCard = ({
  title,
  img,
  meta,
  url,
}) => {
  const [hovered, setHovered] = React.useState(false);
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  return (
    <VStack 
      width="100%" 
      mw="300px" 
      height="100%"
      border="0.1px solid #ebeff5" 
      borderTopRadius="16px"
      borderBottomRadius="4px"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      align="start"
      style={{
        ...moveUp(hovered)
      }}
    >
      <Box borderTopRadius="16px" width="100%" maxHeight="160px" overflow="hidden">
        <Image style={{ ...slowlyMoveUp(hovered)}} backgroundSize="cover" src={img} w="100%" />
      </Box>
      <VStack flexGrow={1}  w="100%" align="start" p="16px">
        <Heading fontSize="18px" fontWeight="600">{title}</Heading>
          <Grid gap="16px" gridTemplateColumns={"1fr 1fr"}>
            {
              meta.map(({ label, info }) => (
                <GridItem width="100%">
                  <VStack align="start" gap="0px" width="100%">
                    <Text fontSize="14px" fontWeight="600" p="0px" m="0px">{label}</Text>
                    <Text fontSize="11px" fontWeight="400" p="0px" m="0px">{info}</Text>
                  </VStack>
                </GridItem>
              ))
            }
        </Grid>
      </VStack>
      <Box pb="32px" pl="16px"><Button><Link href={url}>Learn More</Link></Button></Box>
    </VStack>
  )
}