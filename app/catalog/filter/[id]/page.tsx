import { fetchCamperById } from "@/lib/api/serverApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";
import CamperDetailsClient from "./CamperDetailsClient.client";

interface Props {
  params: Promise<{ id: string }>;
}

const CamperDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["camper", id],
    queryFn: () => fetchCamperById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CamperDetailsClient />
    </HydrationBoundary>
  );
};

export default CamperDetailsPage;
