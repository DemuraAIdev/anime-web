"use client";
import React, { useState, useEffect } from "react";
import CardMini from "./Card";
import Loading from "./loading";

interface SearchResult {
  node: {
    id: string;
    title: string;
    main_picture: {
      large: string;
      medium: string;
    };
  };
}

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false); // New state variable

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading to true before fetching data
      try {
        const response = await fetch(`/api/animelist/search?q=${searchTerm}`);
        const { data } = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching data
      }
    };

    const timeoutId = setTimeout(() => {
      if (searchTerm) {
        fetchData();
      } else {
        setSearchResults([]);
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        className="mb-5 mt-1 block w-full rounded-md border-neutral-300 bg-gray-100 py-2 pl-4 pr-32 text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-700"
        placeholder="Search Anime Name..."
      />
      <div className="-m-4 flex flex-wrap">
        {isLoading ? (
          <Loading /> // Show Loading component if isLoading is true
        ) : (
          searchResults?.map((item) => (
            <CardMini
              key={item.node.id}
              id={item.node.id}
              picture={item.node.main_picture}
              title={item.node.title}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchBar;
