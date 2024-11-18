import { useState } from 'react';
import { AuthenticateService } from '../../services/authen';
const useRegister = () => {
  // Tương tự như useLogin, không cần quản lý state ở đây
  // chuyển sang folder src/api/authen.js

  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const authService = new AuthenticateService();
  const handleRegister = async ({
    name,
    password,
    email
  }) => {
    let res;
    try {
       res = await authService.register({
        name,
        password,
        email
      });
    } catch (error) {
      res = error;
    } finally {
      return res;
    }
  };

  return {
    name,
    setUsername,
    password,
    setPassword,
    isLoading,
    email,
    setEmail,
    error,
    handleRegister,
  };
};

export default useRegister;