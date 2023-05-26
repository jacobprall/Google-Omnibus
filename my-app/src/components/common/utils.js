export const formatBook = (book) => ({
  id: book.id,
  title: book.volumeInfo.title,
  img: book?.volumeInfo?.imageLinks?.thumbnail,
  url: `http://localhost:3001/singlebook?id=${book.id}`,
  meta: [
    {
      label: 'Author',
      info: book?.volumeInfo?.authors?.join(', ') ?? 'Unknown'
    },
    {
      label: 'Categories',
      info: book?.volumeInfo.categories?.join(', ') ?? 'Unknown'
    },
    {
      label: 'Page Count',
      info: `${book?.volumeInfo?.pageCount ?? 'Unknown'} pages`,
    },
  ]
})

