const axios = require('axios');

const getAllTopics = () => {
  axios
    .get('http://localhost:8000/api/topic')
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

module.exports = {
  getAllTopics,
};
