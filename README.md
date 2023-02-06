<p align="center">
  <a href="" rel="noopener">
 <img src="https://user-images.githubusercontent.com/92905626/216983935-046c7e1a-bfbe-48a4-bdfe-b3896e402c7c.png" alt="Project logo"></a>
</p>
<h3 align="center">Deca-Org</h3>

---

<p align="left"> Deca-Org is the one-stop destination to take your organisation's day-to-day operations to Filecoin with provable data storage, Cross-Chain bridge, SBT issuance, Video conferencing, live streaming, and much more. Deca-Org is powered by F(E)VM and made for the filecoin ecosystem.
    <br> 
</p>

## 📝 Table of Contents

- [Problem Statement](problem-statement)
- [Idea / Solution](idea)
- [Future Scope](future-scope)
- [Setting up a local environment](getting-started)
- [Usage](usage)
- [Technology Stack](tech-stack)
- [Authors](authors)

## 🧐 Problem Statement <a name="#problem-statement"> </a>

* `Storage providers` and utility protocols are critical components of the filecoin ecosystem because they provide a variety of critical services to filecoin users. Storage providers are currently viewed as individual, single-person entities providing **provable storage** services via the `filecoin market place` in the current filecoin ecosystem.
* Storage providers do not consider the possibility of `multiple storage providers` providing storage as service in the form of a single entity.
* Other than this filecoin also lacks utility protocols that are built directly on filecoin and provide provable storage on the filecoin chain.

This limits the potential of filecoin and makes it difficult for teams to shift to filecoin and work to their full potential.

## 💡 Idea / Solution <a name="#idea"> </a>

**Deca-Org**, which is built on top of `F(E)VM` is one stop solution, to above problems and provides extensive features as stated below. Deca-Org gives a complete infrastructure for organisations/ DOAs/ groups of storage providers to completely shift their day to day operations to the Hyperspace testnet.

![Flowchart (1) (1)](https://user-images.githubusercontent.com/92905626/216996400-6fe1ed40-6e26-42de-a86a-10aa9fa808a0.png)

1. At Deca-Org, users can create their own `soul-bound token(SBT) gated organisations`. From the organisation’s page, the corresponding admins can invite new members by minting them invitation SBTs.
2. Whenever a file is stored or a SBT is minted, a `mock deal` is created on filecoin to show implementation of `provable storage`.
3. Deca-Org allows its users to use the inbuilt `cross chain bridge` to transfer “DORG“ tokens from hyperspace testnet to matic testnet and vice versa.
4. We provide our own `video conferencing` and `live streaming` for connected organizations and their teams.
5. Video conferences include some amazing features like `meeting transcript generation`, storage of `meeting recordings on IPFS`, group and solo chats, etc.
6. Admins can even create `SBT gated channels` inside the orgs with specific goals and allows channel members to share files, chat across the team, and have channel specific video conferences and live streams.
7. We even allow file encryption/decryption, along with storage, sharing, uploading, downloading and `minting of video assets(NFTs) `and live streams.

## 🚀 Future Scope <a name="#future-scope"> </a>

1. Support of selling organisation data and files though filecoin marketplace.
2. Dynamic creation of custom ERC 20 tokens specific to the organisations, and corresponding cross-chain bridge.
3. Implementation of proposal voting and Improvement in UI/UX of Deca-Orgs
4. NFT avatars representing member personalities will be added

## 🏁 Getting Started <a name="#getting-started"> </a>

Root directory contains to folders `frontend` and `backend`. Each of the folders have their own READMEs which explain how to use them.

## 🎈 Usage <a name="#usage"> </a>

We have deployed our app at [Vercel](https://deca-org.vercel.app/) and [Spheron](https://deca-org-6b8c9f.spheron.app/)

Our repository can be cloned locally too, for using.

<details> <summary> Note </summary>
While testing our application through the deployed link, sometimes our server fails to respond (as it is a free server), we highly suggest you to use `localhost:5000` as the server URL and clone the repository (This can be done by navigating to `frontend/constants/backend.constants.jsx` and commenting the first line and un-commenting the second line). Soon we will be upgrading our servers and then everything will work very smoothly.
</details>

## ⛏️ Built With <a name = "tech-stack"></a>

- [Solidity](https://soliditylang.org/) - Smart contracts
- [F(E)VM](https://fvm.filecoin.io/) - Deploying smart contracts
- [Huddle01](https://huddle01.com/docs) - Video conferencing
- [LivePeer](https://livepeer.org/) - Streaming and video NFT minting
- [LightHouse](https://www.lighthouse.storage/) - File storage, encryption and decrytion
- [Push(EPNS)](https://push.org/) - Communication
- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NextJs](https://nextjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

[Soham Ratnaparkhi](https://github.com/SohamRatnaparkhi), [Rohan Sasne](https://github.com/RohanSasne), [Om Surase](https://github.com/omsurase)
