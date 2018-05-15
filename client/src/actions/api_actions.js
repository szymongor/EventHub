import axios from 'axios';

export const API_POST_EVENT = 'API_POST_EVENT';

export function postCategory(eventData) {
  const request = axios.post(`/api/addEvent`, eventData);
  return {
    type: API_POST_EVENT,
    payload: request
  };
}
