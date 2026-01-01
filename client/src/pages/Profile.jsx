import React, { useState, useEffect } from "react";
import { DisplayCampaigns } from "../components";
import { useStateContext } from "../context";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    if (!address) return;

    setIsLoading(true);
    const all = await getCampaigns();

    // Case-insensitive address match
    const mine = all.filter(
      (c) =>
        c.owner.toLowerCase() === address.toLowerCase()
    );

    console.log("📌 My campaigns:", mine);
    setCampaigns(mine);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCampaigns();
  }, [address]);

  return (
    <DisplayCampaigns
      title="Your Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  );
};

export default Profile;
