import { useNavigate } from "react-router-dom";

import { Icons } from "components/icons";

import { BreadcrumbProps } from "./types";

const Breadcrumb: React.FC<BreadcrumbProps> = ({ path, label }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (path) {
      navigate(path);
    } else {
      navigate(-1);
    }
  };

  return (
    <div
      onClick={handleNavigate}
      className="inline-flex h-5 items-center justify-start gap-2 rounded-xl cursor-pointer"
    >
      <div className="relative h-5 w-5">
        <Icons.ArrowLeft />
      </div>
      <div className="text-sm font-medium leading-tight text-zinc-600 dark:text-zinc-400">{label}</div>
    </div>
  );
};

export default Breadcrumb;
