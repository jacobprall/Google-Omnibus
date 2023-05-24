import { GridItem, Box, Grid, Heading, Image, VStack, Link } from "@chakra-ui/react";
import React from "react";

export const ItemCard = ({
  title,
  img,
  meta,
  url,
}) => {
  return (
    <VStack width="100%" mw="300px" height="100%" border="0.5px solid lightgray" borderRadius="4px">
      <Box width="100%" maxHeight="160px" overflow="hidden">
        <Image backgroundSize="cover" src={img} w="100%" />
      </Box>
      <VStack p="16px">
        <Heading fontSize="16px">{title}</Heading>
          <Grid gridTemplateColumns={"1fr 1fr"}>
            {
              meta.map(({ label, info }) => (
                <GridItem>
                  <VStack>
                    {label}
                    {info}
                  </VStack>
                </GridItem>
                
              ))
            }
        </Grid>
        <Link href={url}>Learn more</Link>
      </VStack>
    </VStack>
  )
}

export function Results({ data }) {
  return (
      <Grid gridTemplateColumns={"1fr 1fr 1fr 1fr "}>
        {data.map(({
          id, volumeInfo
        }) => {
          return (
            <GridItem key={id}>
                <ItemCard 
                  title={volumeInfo.title}
                  img={volumeInfo.imageLinks.thumbnail}
                  url={`http://localhost:3000/singlebook?id=${id}`}
                  meta={[
                    {
                      label: 'Author',
                      info: volumeInfo.authors
                    },
                    {
                      label: 'Categories',
                      info: volumeInfo.categories
                    },
                    {
                      label: 'Page Count',
                      info: `${volumeInfo.pageCount} pages`
                    }
                  ]}
                />
              </GridItem>
          );
        })}
    </Grid>
  );
}

