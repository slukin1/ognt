import { useLocation, useNavigate } from "react-router-dom";

const useNavigateWIthQuery = () => {
  const navigate = useNavigate();
  const currentUrl = useLocation();

  const query = new URLSearchParams(currentUrl.search);

  const navigateWithQuery = (pathname: string, search?: string) => {
    navigate({ pathname, search: search ? search : query.toString() });
  };

  return { navigateWithQuery };
};

export default useNavigateWIthQuery;
