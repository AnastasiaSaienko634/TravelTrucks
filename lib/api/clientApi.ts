import { Camper } from "@/types/campers";
import { nextServer } from "./api";

interface FetchCampersResponse {
  total: number;
  items: Camper[];
}

export const fetchCampers = async (): Promise<Camper[]> => {
  const response = await nextServer.get<FetchCampersResponse>("/campers");
  return response.data.items;
};
