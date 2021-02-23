const axios = require('axios');

const getAllTopics = async () => {
  const res = await axios
    .get('http://localhost:8000/api/topic')
    .catch((err) => console.log(err));

  if (res.data.data.topics) {
    return res.data.data.topics;
  }
};

const getAllMessages = async (topic) => {
  const res = await axios
    .get(`http://localhost:8000/api/topic/${topic}/messages`)
    .catch((err) => console.log(err));

  if (res.data.data.length > 0) {
    return res.data.data[0].messages;
  }
};

module.exports = {
  getAllTopics,
  getAllMessages,
};
