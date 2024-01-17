const LogoutService = {
  logout: () => {
    localStorage.removeItem("token");
  },
};

export default LogoutService;
