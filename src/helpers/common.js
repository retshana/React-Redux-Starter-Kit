import uuid from 'uuid';

export const guId = () => uuid.v4(new Date().getTime());

export const getUrlParams = () => {
  if (window.location.search) {
    const params = {};
    window.location.search.split('?')[1].split('&').forEach((pair) => {
      const pairs = (`${pair}=`).split('=').map(decodeURIComponent);
      if (pairs[0].length) {
        const [key, value] = pairs;
        params[key] = value;
      }
    });
    return params;
  }
  return {};
};

export const getParamFromUrl = (param) => {
  const params = getUrlParams();
  return params[param];
};
