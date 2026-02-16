import { Camper } from "@/types/campers";
import { nextServer } from "./api";

interface FetchCampersResponse {
  total: number;
  items: Camper[];
}

interface FetchParamsCampers {
  pageParam: number;
  limit: number;
}

//Fetch all Campers
export const fetchCampers = async ({
  pageParam = 1,
  limit = 4,
}: FetchParamsCampers) => {
  const response = await nextServer.get<FetchCampersResponse>("/campers", {
    params: {
      page: pageParam,
      limit,
    },
  });
  return response.data;
};

//Fetch Camper by Id
export const fetchCamperById = async (id: string) => {
  const response = await nextServer.get<Camper>(`/campers/${id}`);
  return response.data;
};

//Fetch by Filter(filter)
export const fetchCampersByFilter = async (
  vehicleEquipment: Record<string, boolean>,
  vehicleType: string,
  location: string,
) => {
  const filteredEquipment: Record<string, boolean> = {};
  Object.keys(vehicleEquipment).forEach((key) => {
    if (vehicleEquipment[key]) filteredEquipment[key] = true;
  });
  const response = await nextServer.get("/campers", {
    params: { location: location, form: vehicleType, ...filteredEquipment },
  });
  return response.data.items;
};
