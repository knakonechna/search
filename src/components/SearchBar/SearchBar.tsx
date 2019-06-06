import React, { createRef, FunctionComponent, useState } from 'react';
import SpeechRecognition from 'react-speech-recognition';
import MicroIcon from '../MicroIcon/MicroIcon';
import Button from '@material-ui/core/Button/Button';
import Grid from '@material-ui/core/Grid/Grid';

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
}

const SearchBar: FunctionComponent<SearchBarProps> = ({
  setQuery,
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition,
  startListening,
  stopListening,
}): JSX.Element => {
  const [isListen, setIsListen] = useState(false);
  const searchRef = createRef<HTMLInputElement>();
  const handleClick = (): void => {
    if (searchRef.current && searchRef.current.value.length >= 3) {
      setQuery(searchRef.current.value);
    }
  };
  const handleListening = (): void => {
    if (isListen) {
      stopListening();
      setIsListen(false);
    } else {
      startListening();
      setIsListen(true);
    }
  };

  return (
    <Grid container>
      <Grid item>
        <input type="text" ref={searchRef} />
        <Button variant="contained" color="primary" onClick={handleClick}>
          Search
        </Button>
        <MicroIcon isActive={isListen} handleListening={handleListening} />
      </Grid>
      <span>{transcript}</span>
    </Grid>
  );
};

export default SpeechRecognition(options)(SearchBar);
