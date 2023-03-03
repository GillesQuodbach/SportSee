import {
  USER_MAIN_DATA,
  USER_PERFORMANCE,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
} from "./mockedData";
import axios from "axios";
const BASE_URL = "http://localhost:3000/";

console.log("USER_MAIN_DATA: ", USER_MAIN_DATA);

console.log("USER_ACTIVITY: ", USER_ACTIVITY);

console.log("USER_AVERAGE_SESSIONS: ", USER_AVERAGE_SESSIONS);

console.log("USER_PERFORMANCE: ", USER_PERFORMANCE);
export class SportSeeApi {
  async fetchUserMainData() {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  }
}
