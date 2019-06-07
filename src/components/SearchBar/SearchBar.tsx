import React, { createRef, FunctionComponent, useState } from 'react';
import SpeechRecognition from 'react-speech-recognition';
import { withStyles } from '@material-ui/core';
import MicroIcon from '../MicroIcon/MicroIcon';
import Button from '@material-ui/core/Button/Button';
import Grid from '@material-ui/core/Grid/Grid';
import TextField from '@material-ui/core/TextField';

const options = {
  autoStart: false,
};

interface SearchBarProps {
  setQuery(query: string): void;
  transcript: string;
  resetTranscript: void;
  browserSupportsSpeechRecognition: boolean;
  startListening(): void;
  stopListening(): void;
  classes: {
    searchContainer: string;
    textField: string;
    icon: string;
    button: string;
  };
}

const SearchBar: FunctionComponent<SearchBarProps> = ({
  classes,
  setQuery,
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition,
  startListening,
  stopListening,
}): JSX.Element => {
  const [isListen, setIsListen] = useState(false);
  const [query, setQueryValue] = useState('');
  const searchRef = createRef<HTMLInputElement>();
  const handleClick = (): void => {
    if (searchRef.current && searchRef.current.value.length >= 3) {
      setQuery(searchRef.current.value);
    }
  };

  const handleKeyPress = (event: any): void => {
    if (event.key === 'Enter') handleClick();
  };

  const handleListening = (): void => {
    if (isListen) {
      stopListening();
    } else {
      startListening();
      setQueryValue(transcript);
    }
    setIsListen(!isListen);
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
    </Grid>
  );
};

const styles = {
  searchContainer: {
    marginTop: 20,
    marginBottom: 20,
    position: 'relative' as 'relative',
  },
  textField: {
    margin: 0,
    width: '100%',
    position: 'absolute' as 'absolute',
    '& > input': {
      padding: '18.5px 130px 18.5px 14px',
    },
  },
};

export default withStyles(styles)(SpeechRecognition(options)(SearchBar));
