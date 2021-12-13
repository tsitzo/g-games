import { Authorization, ClientID } from "@env";

import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.igdb.com/v4",
  headers: {
    Accept: "application/json",
    "Client-ID": `${ClientID}`,
    Authorization: `${Authorization}`,
  },
});
