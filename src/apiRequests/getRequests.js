import axios from "axios";

const getGlobalData = () => {
  return axios
    .get("https://api.covid19api.com/summary")
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err, "error");
    });
};

export default getGlobalData;
