const useAuth = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn === "1";
};

export default useAuth;
