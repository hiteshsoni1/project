import React from 'react';
import { Autocomplete } from '@material-ui/lab'
import { TextField, makeStyles } from '@material-ui/core'
import './Header.css';

const useStyles = makeStyles({
  root: {
    width: '300px',
    backgroundColor: 'white',
  },
  text: {
    margin: '0px'
  }
});

function Header(props) {
  const searchQueries = (localStorage.getItem('search') ?? '').split(',');
  let classes = useStyles(props);

  const saveSearchQuery = (e) => {
    let search = e.target.value;
    if (13 == e.which && !searchQueries.includes(search)) {
      localStorage.setItem('search', searchQueries.join(',').concat(`,${search}`))
    }
  }

  return (
    <div className='header'>
      <div className='search'>
        <span className='span'>Search Ptotos</span>
        <Autocomplete
          className={classes.root}
          freeSolo
          disableClearable
          onInputChange={(e, value) => props.setQuery(value)}
          options={searchQueries.map(option => option)}
          renderInput={params => (
            <TextField
              className={classes.text}
              {...params}
              margin="normal"
              onChange={(e) => props.setQuery(e.target.value)}
              onKeyPress={(e) => saveSearchQuery(e)}
              fullWidth
              InputProps={{ ...params.InputProps, type: 'search' }}
            />
          )}
        />
      </div>
    </div>
  );
}

export default Header;
