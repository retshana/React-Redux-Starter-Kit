import datetime from 'moment';

datetime.locale('ru');

export const format = (time, formatString = 'DD MMMM YYYY h:mm:ss') => (
  datetime(time).format(formatString, false)
);

export default {
  format,
};

