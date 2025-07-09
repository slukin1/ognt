import { ROUTES } from "router/routes";

export const TAB_ITEMS: TabItem[] = [
  { value: "Surveys", key: `/${ROUTES.discover}/${ROUTES.survey}` },
  { value: "Businesses", key: `/${ROUTES.discover}/${ROUTES.businesses}` },
];

export const FOR_YOU_ITEM: TabItem = { value: "For You", key: `/${ROUTES.discover}/${ROUTES.forYou}` };

export type TabItem = {
  value: string;
  key: string;
};
