export const usePreventLeave = () => {
  const Listener = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
  const protect = () => {
    window.addEventListener("beforeunload", Listener);
  };
  const unprotect = () => {
    window.removeEventListener("beforeunload", Listener);
  };

  return { protect, unprotect };
};
