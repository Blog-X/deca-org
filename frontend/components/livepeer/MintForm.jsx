import { useState } from "react";
import { mint } from "../../utils/mint";

const MintForm = ({ setAppState, chainId, setMessage, setNftInfo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const handleSubmit = (e) => {
      e.preventDefault()
      mint(chainId, title, { nftMetadata: {description, traits: { "author": "Rahat"}}}, setAppState, setMessage, setNftInfo)
  }

  return (
    <div className="flex h-screen justify-center items-center">
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="flex-column p-2" >
        <label>NFT Title</label>
        <input
          className="m-2 textarea textarea-info"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          required
        />
      </div>
      <div className="flex-column">
        <label className="align-top">Description</label>
        <textarea
          className="m-2 textarea textarea-info"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name="description"
          rows="4"
          cols="50"
          required
        />
      </div>
      <button type="submit" className="file-input file-input-bordered file-input-primary w-full max-w-xs m-10">Choose Video and Mint</button>
    </form>
    </div>
  );
};

export default MintForm;
