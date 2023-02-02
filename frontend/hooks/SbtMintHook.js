import Web3Modal from "web3modal";
import { getWalletDetails } from "./getAddress.hook";
import { ethers } from "ethers";
import contract from "../contracts/DeOrgSbt.json";

export const mintSBT = async (tokenUrl, address) => {
  const { signer, provider } = await getWalletDetails();
  let sbt = {
    tokenURL: tokenUrl,
    recieverAddress: address,
    abi: contract,
  };
  console.log(tokenUrl);
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const SBTContract = new ethers.Contract(
      "0x9144Bee2672448b83820d82ef21281380e95d696",
      sbt.abi,
      signer
    );
    console.log(SBTContract);
    let mint = await SBTContract.safeMint(sbt.recieverAddress, sbt.tokenURL);
    console.log("safemint", mint);
  } catch (error) {
    console.log(error);
  }
};
