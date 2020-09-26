import Axios from "axios";

export const client = Axios.create({
  baseURL: "https://www.lottoland.com/api/",
  timeout: 100000
})