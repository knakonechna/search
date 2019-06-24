export default time => {
  const h = Math.floor(time / 3600);
  const m = Math.floor((time % 3600) / 60);
  const s = Math.floor((time % 3600) % 60);
  return {
    hours: +('0' + h).slice(-2),
    minutes: +('0' + m).slice(-2),
    seconds: +('0' + s).slice(-2),
  };
};
