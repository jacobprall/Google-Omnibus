import React from "react";
import { useGetBook } from '../../hooks/useGetBook';
import { Heading, Card, CardBody, Stack, Text } from '@chakra-ui/react'

const SingleBook = () => {
  const {
    book
  } = useGetBook();

  console.log({ book })

  return (
    <Card>
      <CardBody>
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{book?.title}</Heading>
          <Text size='md'>{book?.authors}</Text>
          <Text size='md'>{book?.volumeInfo?.title}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default SingleBook;
