import React, { useRef, FunctionComponent, useState } from 'react';
import {
  withStyles,
  createStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import MicroIcon from '../MicroIcon/MicroIcon';
import Button from '@material-ui/core/Button/Button';
import Grid from '@material-ui/core/Grid/Grid';

interface SearchBarProps {
  setQuery({ query: string, page: number }): void;
  classes: any;
}

interface Window {
  webkitSpeechRecognition: any;
  SpeechRecognition: any;
  msSpeechRecognition: any;
  mozSpeechRecognition: any;
}

declare var window: Window;

const SearchBar: FunctionComponent<SearchBarProps> = ({
  classes,
  setQuery,
}): JSX.Element => {
  const [isListen, setIsListen] = useState(false);
  const [query, setQueryValue] = useState('');
  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 5;

  const searchRef = useRef<HTMLInputElement>();
  const isValidField = searchRef.current && searchRef.current.value.length >= 3;
  const handleClick = (): void => {
    if (searchRef.current && searchRef.current.value.length >= 3) {
      setQuery({ query: searchRef.current.value, page: 1 });
    }
  };
  const handleKeyPress = (event): void => {
    if (event.key === 'Enter') handleClick();
  };
  const handleListening = (): void => {
    if (isListen) {
      recognition.end();
    } else {
      recognition.start();
      setQueryValue('');
    }
    setIsListen(!isListen);
  };

  recognition.onresult = event => setQueryValue(event.results[0][0].transcript);
  recognition.onend = (): void => {
    setIsListen(false);
    handleClick();
  };

  return (
    <Grid
      className={classes.searchContainer}
      container
      alignContent="center"
      justify="flex-end"
    >
      <TextField
        label="Search field"
        type="search"
        margin="normal"
        variant="outlined"
        inputRef={searchRef}
        onChange={e => setQueryValue(e.target.value)}
        value={query}
        className={classes.textField}
        onKeyPress={handleKeyPress}
      />
      <MicroIcon
        isActive={isListen}
        handleListening={handleListening}
        className={classes.icon}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        className={classes.button}
      >
        Search
      </Button>
      {!isValidField && (
        <Typography className={classes.error} variant="caption" color="error">
          Please write 3 and more letters
        </Typography>
      )}
    </Grid>
  );
};

const styles = createStyles({
  searchContainer: {
    marginTop: 20,
    marginBottom: 20,
    position: 'relative',
  },
  textField: {
    margin: 0,
    width: '100%',
    position: 'absolute',
    '& > input': {
      padding: '18.5px 130px 18.5px 14px',
    },
  },
  error: {
    position: 'absolute',
    bottom: -20,
    left: 0,
  },
});

export default withStyles(styles)(SearchBar);
