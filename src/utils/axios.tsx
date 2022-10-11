import axios from "axios";

const DOMAIN = "http://localhost:3000";

// 쿠키 데이터 전송받기 위해
axios.defaults.withCredentials = true;

// 수정해야할 수도 있음
interface IRequest {
  method: string;
  url: string;
  data: object;
}

export const request = ({ method, url, data }: IRequest) => {
  return axios({
    method,
    url: DOMAIN + url,
    data,
  });
};
