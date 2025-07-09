import { BusinessDataCard } from "./";
import { Skeleton } from "components";

import { useAppSelector } from "store/store";
import { selectCombinedData } from "../selectors";

const BusinessesFeed: React.FC = () => {
  const { discoveredBusinesses, businessesPayload, pending, totalBusinesses = 0 } = useAppSelector(selectCombinedData);

  const pendingRows =
    businessesPayload.pageNumber === 1 || totalBusinesses - discoveredBusinesses.length > businessesPayload.pageSize
      ? businessesPayload.pageSize
      : totalBusinesses - discoveredBusinesses.length;

  return (
    <div className="xs:grid-cols-1 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {discoveredBusinesses.map(businessItem => (
        <div key={`${businessItem.id}`} className="flex text-center">
          <BusinessDataCard data={businessItem} />
        </div>
      ))}
      {pending &&
        Array.from({ length: pendingRows }).map((_, idx) => <Skeleton key={idx} classNames="min-h-[189px]" />)}
    </div>
  );
};

export default BusinessesFeed;
