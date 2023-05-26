import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { VStack } from "@chakra-ui/react";

export const Search = ({
  handleSubmit,
  query,
  handleChange,
}) => {
  return (
    <VStack mb="32px"
    maxWidth="100%"
    p="32px"
    border="1px solid lightgray" borderRadius="8px">
      <Form width="100%" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search</Form.Label>
          <Form.Control
            name="searchQuery"
            type="searchQuery"
            placeholder="enter search here"
            value={query}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </VStack>
  )
}