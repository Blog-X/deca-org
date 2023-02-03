import Web3Modal from "web3modal";
import { getWalletDetails } from "./getAddress.hook";
import { ethers } from "ethers";
import contract from "../contracts/DeOrgSbt.json";
import Web3 from "web3";

export const mintSBT = async (tokenUrl, address) => {
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

export const checkSbtBalance = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const SBTContract = new ethers.Contract(
      "0x9144Bee2672448b83820d82ef21281380e95d696",
      contract,
      signer
    );
    const web3 = new Web3('https://api.hyperspace.node.glif.io/rpc/v1');
    const contract1 = new web3.eth.Contract(contract, "0x9144Bee2672448b83820d82ef21281380e95d696")
    console.log(SBTContract);
    let balance = await SBTContract.balanceOf(address);
    // console.log(address);
    // let balance = contract1.methods.balanceOf('0xb17bc8c23e53f463F0332008D518121B74b260d2');
    console.log("balance", Number(balance));
    return {balance, address};
  } catch (error) {
    console.log(error);
  }
};
