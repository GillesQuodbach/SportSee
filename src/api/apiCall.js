import axios from "axios";

/**
 * Retrieve user activity
 * @param {number} id
 * @returns {Array}
 */
export const getUserActivity = async (id) => {
  try {
    const res = await axios.get(`REACT_APP_BASE_URL/user/${id}/activity`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
/**
 * Get User Infos
 * @param {number} id
 * @returns {object}
 */

export const getUserInfos = async (id) => {
  try {
    const res = await axios.get(`REACT_APP_BASE_URL/${id}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

/**
 * Get User Performance
 * @param {number} id
 * @returns {object}
 */

export const getUserPerformance = async (id) => {
  try {
    const res = await axios.get(`REACT_APP_BASE_URL/user/${id}/performance`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
/**
 * Get User Average Session
 * @param {number} id
 * @returns {object}
 */

export const getUserAverageSessions = async (id) => {
  try {
    const res = await axios.get(
      `REACT_APP_BASE_URL/user/${id}/average-sessions`
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
