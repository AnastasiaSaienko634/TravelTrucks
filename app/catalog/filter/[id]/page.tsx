import { fetchCamperById } from "@/lib/api/serverApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";
import CamperDetails from "./CamperDetails.client";

interface Props {
  params: Promise<{ id: string }>;
}

// Camper Details Page
const CamperDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  // Fetch Camper by Id
  await queryClient.prefetchQuery({
    queryKey: ["camper", id],
    queryFn: () => fetchCamperById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CamperDetails />
    </HydrationBoundary>
  );
};

export default CamperDetailsPage;
