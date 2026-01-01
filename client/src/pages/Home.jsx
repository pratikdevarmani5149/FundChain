import React, { useState, useEffect } from "react";
import { DisplayCampaigns } from "../components";
import { useStateContext } from "../context";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    console.log("⏳ Fetching campaigns...");
    const data = await getCampaigns();
    console.log("📌 Campaigns fetched:", data);
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (address) fetchCampaigns();
  }, [address]);

  return (
    <DisplayCampaigns
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  );
};

export default Home;
