import { Camper } from "@/types/campers";
import { nextServer } from "./api";

interface FetchCampersResponse {
  total: number;
  items: Camper[];
}

//Fetch all Campers
export const fetchCampers = async (): Promise<Camper[]> => {
  const response = await nextServer.get<FetchCampersResponse>("/campers");
  return response.data.items;
};

//Fetch Camper by Id
export const fetchCamperById = async (id: string) => {
  const response = await nextServer.get<Camper>(`/campers/${id}`);
  return response.data;
};

//Fetch by Categorie(location)
export const fetchCampersbyCategorie = async (query: string) => {
  const response = await nextServer.get("/campers", {
    params: { location: query },
  });
  return response.data.items;
};
