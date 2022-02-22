import React from 'react';
import BasicCard from '../../elements/Card';
import Grid from './Grid';

const SearchResult = ({ searchQuery, searchResults }) => {
  if (searchQuery.length === 0) {
    return null;
  }
  if (searchResults.length === 0) {
    return <div>No results found</div>;
  } else {
    console.log(searchResults)
    return (
      <Grid>
        {searchResults.map(({ id, titleText, releaseDate }) => {
          return <BasicCard title={titleText.text} releaseDate={releaseDate} key={id} />;
        }
        )}
      </Grid>
    );
    }
};

export default SearchResult;
