import React, { useState } from 'react';
import useInterval from '../../hooks/useInterval';

interface Intl {
  RelativeTimeFormat: any;
}

declare var Intl: Intl;

const LastSearchTimer = (): JSX.Element => {
  const [state, setState] = useState({
    time: 0,
    delay: 1000,
  });
  const { navigator }: any = window;
  const language = navigator.userLanguage || navigator.language;
  const formatter = new Intl.RelativeTimeFormat(language, {});
  const increaseTime = (): void =>
    setState({ time: state.time + 1, delay: state.delay });
  useInterval(increaseTime, state.delay, state.time);
  return <div>Your search was {formatter.format(-state.time, 'second')}</div>;
};

export default LastSearchTimer;
