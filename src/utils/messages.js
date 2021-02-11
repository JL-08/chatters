const moment = require('moment');

const formatMessage = (name, msg) => {
  return {
    name,
    msg,
    time: moment().format('h:mm a'),
  };
};

module.exports = formatMessage;
