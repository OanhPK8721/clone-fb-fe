import { useState } from 'react';
import { AuthenticateService } from '../../services/authen';
const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const authService = new AuthenticateService();

  const handleLogin = async ({
    username,
    password,
  }) => {
    try {
      const res = await authService.login(username, password);
      setIsLoading(true);
      return res;
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    isLoading,
    error,
    handleLogin,
  };
};

export default useLogin;