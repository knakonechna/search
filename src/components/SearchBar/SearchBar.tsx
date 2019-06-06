import React, { createRef, FunctionComponent } from 'react';
import SpeechRecognition from 'react-speech-recognition';

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
  const searchRef = createRef<HTMLInputElement>();
  const handleClick = (): void => {
    if (searchRef.current && searchRef.current.value.length >= 3) {
      setQuery(searchRef.current.value);
    }
  };
  return (
    <>
      <input type="text" ref={searchRef} />
      <button type="button" onClick={handleClick}>
        Search
      </button>
      <button onClick={startListening}>Start recognitions</button>
      <button onClick={stopListening}>Stop recognitions</button>
      <span>{transcript}</span>
    </>
  );
};

export default SpeechRecognition(options)(SearchBar);
