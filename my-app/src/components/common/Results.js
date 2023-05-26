import { GridItem, Grid, } from "@chakra-ui/react";
import { ItemCard } from "./ItemCard";
import React from "react";


export function Results({ data }) {
  return (
      <Grid gap="16px" gridTemplateColumns={"1fr 1fr 1fr 1fr "}>
        {data.map(({
          id, title, img, url, meta
        }) => {
          return (
            <GridItem key={id}>
                <ItemCard 
                  title={title}
                  img={img}
                  url={url}
                  meta={meta}
                />
              </GridItem>
          );
        })}
    </Grid>
  );
}

