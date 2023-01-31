import React from "react";
import { useState } from "react";
// import { ipfsClient } from "@/constants/api.constants";
import AxiosJsInstance from "@/hooks/AxiosInstance";
import { NFTStorage } from "nft.storage";
import axios from "axios";
import { GATEWAY } from "@/constants/api.constants";

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const retrieveFile = (e) => {
    const file = e.target.files[0];
    setImage(file);
    console.log(file);
    e.preventDefault();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(image);
    const client = new NFTStorage({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDg0MWI1RGRjMGU4MWI4QUYyZWI0NURBN0QzMTAzNjNjNTk1RTY1MTciLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3NDkwOTY5NDAzMiwibmFtZSI6ImRlY2Etb3JnIn0.GlZgUARw9EP_pA9fin75GdDIlLmk_b6uR-QM5G4bs-k",
    });
    const metadata = await client.store({
      name: "My NFT",
      description: "This is my NFT",
      image: image,
    });
    console.log(metadata);
    const metadataURL = GATEWAY + metadata.ipnft + "/metadata.json";
    const {data} = await axios.get(metadataURL);
    console.log(data)
    console.log(GATEWAY + data.image.slice(7));
    setImgUrl(GATEWAY + data.image.slice(7));
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={retrieveFile} />
        <button type="submit" className="btn">
          Upload file
        </button>
        {imgUrl}
        <img src={imgUrl} alt="uploaded" />
      </form>
    </div>
  );
};

export default UploadImage;
