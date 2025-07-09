import { useSearchParams } from "react-router-dom";

export const useGetSearchParams = (searchParamsName: string) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSearchParams = searchParams.get(searchParamsName) ?? "";

  return { currentSearchParams, setSearchParams, searchParams };
};
