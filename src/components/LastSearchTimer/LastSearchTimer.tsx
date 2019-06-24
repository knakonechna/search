import React, { useState } from 'react';
import useInterval from '../../hooks/useInterval';
import Typography from '@material-ui/core/Typography/Typography';
import parseTheTime from '../../services/parseTheTime';

interface Intl {
  RelativeTimeFormat: any;
}

declare var Intl: Intl;

const LastSearchTimer = (): JSX.Element => {
  const [state, setState] = useState({
    time: 0,
    delay: 1000,
    date: new Date(Date.now()),
  });
  const { navigator }: any = window;
  const language = navigator.userLanguage || navigator.language;
  const formatter = new Intl.RelativeTimeFormat(language, { numeric: 'auto' });
  const increaseTime = (): void =>
    setState({ time: state.time + 1, delay: state.delay, date: state.date });
  useInterval(increaseTime, state.delay, state.time);
  const { hours, minutes, seconds } = parseTheTime(state.time);
  const timeFormat =
    minutes > 0 && hours === 0
      ? formatter.format(-minutes, 'minute')
      : hours > 0
      ? formatter.format(-hours, 'hour')
      : formatter.format(-seconds, 'second');
  return (
    <Typography variant="h6" color="textPrimary" gutterBottom>
      Your search: {timeFormat}
    </Typography>
  );
};

export default React.memo(LastSearchTimer);
