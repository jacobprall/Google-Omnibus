
import { useState, useEffect } from 'react'
import { formatBook } from '../components/common/utils';

const BOOKS_URL = "https://www.googleapis.com/books/v1/volumes?q=";
const KEY = "AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4";

const formatBookData = (data) => data.map(formatBook);

const searchBooks = async (query) => {
   
    const url = BOOKS_URL + query + "&maxResults=9" + "&key=" + KEY;

    try {
        const response = await fetch(url);
        console.log(response);
        const jsonResponse = await response.json();
        const items = jsonResponse.items;
        console.log(items);
        return items;
    } catch (err) {
        alert(err);
    }
};

export const useSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const handleChange = (e) => setQuery(e.target.value);
    const searchMaps = async () => ([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const books = formatBookData(await searchBooks(query));
        const locations = await searchMaps(query);
        // transform the data to conform to a standard
        setResults([...books, ...locations])
    }

    return {
    query,
    handleChange,
    results,
    handleSubmit
    }
}