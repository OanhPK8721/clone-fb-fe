const checkAuth = () => {
  const token = localStorage.getItem('token');
  return token !== null;
};

export default checkAuth;