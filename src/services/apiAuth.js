import axios from "axios";
const baseurl = import.meta.env.VITE_BACKEND_URL;
export async function getCurrentUser() {
  try {
    const response = await axios.get(`${baseurl}/getuser`, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error for handling in the calling component
  }
}


export async function logout()
{
  try {
    const response = await axios.get(`${baseurl}/logout`, {
      headers: {
        Authorization: `${localStorage.getItem('token')}`,
      },
    });
    localStorage.removeItem('token');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error for handling in the calling component
  }
  
}