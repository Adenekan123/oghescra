import axios from "axios";

const AxiosIntsnace = axios.create({
  baseURL: "https://apps.ogshcra.com.ng/api",
});

export default AxiosIntsnace;
