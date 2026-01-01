# 🔐 FundChain Smart Contract — Solidity + Ethereum

This folder contains the smart contract responsible for powering FundChain — a decentralized crowdfunding platform built on the Ethereum Sepolia network. All campaign data, donations, and ownership logic are stored **directly on the blockchain**, ensuring transparency and trust.

---

## 📌 Contract Details

| Field | Info |
|------|------|
| Contract Name | CrowdFunding.sol |
| Language | Solidity |
| Network | Ethereum — Sepolia Testnet |
| Contract Address | `0x8050D984f411Af8F9fcf351AD7be830BD685B8fD` |
| Compiler | `v0.8.9` or above |

View on Etherscan:  
➡ https://sepolia.etherscan.io/address/0x8050D984f411Af8F9fcf351AD7be830BD685B8fD#code

---

## 🧩 Smart Contract Features

- Create a new campaign with:
  - Title
  - Description
  - Target Amount
  - Deadline
  - Image URL
- Donate ETH directly to campaigns
- Show total amount raised
- Store donor addresses transparently
- Fetch all campaigns anytime
- Track campaigns by owner

✔ Fully on-chain  
✔ No intermediaries or centralized approval

---

## 🔍 Function List

| Function | Description |
|---------|-------------|
| `createCampaign()` | Create and store a campaign on-chain |
| `getCampaigns()` | Fetch all campaigns globally |
| `donateToCampaign()` | Donate ETH to a specific campaign |
| `getDonators()` | View supporters and contributions |

---

## 🧪 Testing

This contract is fully deployed and tested by interacting via:

- Thirdweb SDK
- MetaMask Transactions
- On-chain updates visible on UI

You may test further by calling functions on Etherscan under the **Write** tab (connect wallet required).

---

## 🚀 Deployment Method

The contract was deployed using:

- Thirdweb Deploy
- Sepolia Test ETH for gas
- Verified on Etherscan

---

## 🔒 Security Notes

- No owner-like central authority
- Funds move strictly wallet ↔ wallet
- Contract prevents expired fundraising

---

## 📌 Future Improvements

- Fund withdrawal access control
- Milestone-based release of funds
- NFT or token badges for donors
- Pausable or upgradeable contract support

---



> Smart contract layer securing FundChain — Funding with transparency ✨
