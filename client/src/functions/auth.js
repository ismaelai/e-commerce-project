import axios from 'axios';

// Request to server with token. Empty body object as arg cause we just send headers.
export const createOrUpdateUser = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/create-or-update-user`,
    {},
    {
      headers: {
        authtoken,
      },
    },
  );
};
export const currentUser = async (authtoken) => {
  
  return await axios.post(
    `${process.env.REACT_APP_API}/current-user`,
    {},
    {
      headers: {
        authtoken,
      },
    },
  );
};
