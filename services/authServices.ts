
import axios from 'axios';
export const AuthServices = {
  login: async (email, password) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      return data;
    }
    catch (error) {
      throw error;
    }

  }
  ,
  register: async (name, email, password) => {
    try {
      const confirmPassword = password;
      const response = await axios.post('http://localhost:3001/api/v1/auth/register', { name: name, email: email, password: password, confirmPassword: confirmPassword });

      if (response.status === 201) {
        return response.data;
      }
      return response.data;

    } catch (error) {
      throw error;
    }

  }
  ,
};
