import React, { useRef } from 'react';
import { Container, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const IndexPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const submitForm = () => {
    const form = formRef.current;
    const q = form?.elements.namedItem('q') as HTMLInputElement;
    if (q.value) {
      form?.submit();
    }
  };
  return (
    <Container>
      <form
        ref={formRef}
        action="/search?q="
        onSubmit={submitForm}
      >
        <TextField
          id="search-bar"
          label="Search..."
          placeholder="Search..."
          helperText="just pick one"
          variant="standard"
          name='q'
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
      </form>
    </Container>
  );
}

export default IndexPage;