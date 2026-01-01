import React, { createContext, useContext } from "react";
import {
  useAddress,
  useMetamask,
  useSigner,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import crowdfundingAbi from "../abi/Crowdfunding.json";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const address = useAddress();
  const connect = useMetamask();
  const signer = useSigner();

  const contractAddress =
    "0x8050D984f411Af8F9fcf351AD7be830BD685B8fD";

  // Initialize Contract using signer instead of useContract()
  const getContract = () => {
    if (!signer) return null;
    return new ethers.Contract(
      contractAddress,
      crowdfundingAbi,
      signer
    );
  };

  const publishCampaign = async (form) => {
    const contract = getContract();
    if (!contract) {
      alert("Connect wallet and wait a moment…");
      return;
    }

    try {
      const tx = await contract.createCampaign(
        address,
        form.title,
        form.description,
        form.target,
        Math.floor(new Date(form.deadline).getTime() / 1000),
        form.image
      );

      await tx.wait();
      console.log("🚀 Campaign Created:", tx);
      return tx;
    } catch (err) {
      console.error("❌ Error:", err);
    }
  };

  const getCampaigns = async () => {
    const contract = getContract();
    if (!contract) return [];
    const campaigns = await contract.getCampaigns();

    return campaigns.map((c, i) => ({
      owner: c.owner,
      title: c.title,
      description: c.description,
      target: ethers.utils.formatEther(c.target.toString()),
      deadline: c.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(
        c.amountCollected.toString()
      ),
      image: c.image,
      pId: i,
    }));
  };

  const donate = async (pId, amount) => {
    const contract = getContract();
    if (!contract) return;
    const tx = await contract.donateToCampaign(pId, {
      value: ethers.utils.parseEther(amount),
    });
    await tx.wait();
    return tx;
  };

  const getDonations = async (pId) => {
    const contract = getContract();
    if (!contract) return [];
    const donations = await contract.getDonators(pId);

    return donations[0].map((donator, i) => ({
      donator,
      donation: ethers.utils.formatEther(
        donations[1][i].toString()
      ),
    }));
  };

  return (
    <StateContext.Provider
      value={{
        address,
        connect,
        publishCampaign,
        getCampaigns,
        donate,
        getDonations,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
