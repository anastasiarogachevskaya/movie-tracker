import React from 'react';
import SearchResult from '../components/Search/SearchResult';
import getMovieByTitle from '../libs/getMovieByTitle';

const SearchResults =  ({ searchQuery, results }) => {
  return (
    <SearchResult searchQuery={searchQuery} searchResults={results}/>
  )
};

export default SearchResults;

export async function getServerSideProps(ctx) {
  const searchQuery = ctx.query.q;
  const { page, next, entries, results } = await getMovieByTitle(searchQuery);
  return {
    props: {
      searchQuery,
      results,
      entries,
      next,
      page,
    }
  }
}