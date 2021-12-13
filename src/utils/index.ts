import { InvolvedCompany } from "../types";

export const getDevs = (arr: InvolvedCompany[]) => {
  return arr
    .filter((el) => el.developer)
    .map((el) => el.company.name)
    .filter((v, i, a) => a.indexOf(v) === i);
};

export const getPublishers = (arr: InvolvedCompany[]) => {
  return arr
    .filter((el) => el.publisher)
    .map((el) => el.company.name)
    .filter((v, i, a) => a.indexOf(v) === i);
};
