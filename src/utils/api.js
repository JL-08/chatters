const axios = require('axios');

const getAllTopics = () => {
  axios
    .get('http://localhost:8000/api/topic')
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
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
