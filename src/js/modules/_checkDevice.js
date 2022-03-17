// ------------------------------------------------------
// デバイス判定
// ------------------------------------------------------

const mq = (device) => {
  if (window.matchMedia('(max-width:768px)').matches && device === 'sp') {
    return true;
  }
  return window.matchMedia('(min-width:769px)').matches && device === 'pc';
};

export default mq;
