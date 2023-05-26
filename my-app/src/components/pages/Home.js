import React from "react";
import { VStack } from "@chakra-ui/react";
import Container from "react-bootstrap/Container";
import { useSearch } from '../../hooks/useSearch';
import { Results } from '../common/Results';
import { Search } from "../common/Search";

const Home = () => {
  const {
    handleSubmit,
    query,
    handleChange,
    results,
  } = useSearch();

  return (
    <VStack mt="32px">
      <Search 
        handleChange={handleChange}
        query={query}
        handleSubmit={handleSubmit}
      />
      <Container>
        {results?.length !== 0 && 
        (
          <Results data={results} />
        )}
      </Container>
    </VStack>
  );
};

export default Home;
