import React from "react";
import { useState } from "react";
// import { ipfsClient } from "@/constants/api.constants";
import AxiosJsInstance from "@/hooks/AxiosInstance";
import { NFTStorage } from "nft.storage";
import axios from "axios";

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const retrieveFile = (e) => {
    const file = e.target.files[0];
    setImage(file);
    console.log(file);

    // const reader = new window.FileReader();
    // reader.readAsArrayBuffer(file);
    // reader.onloadend = () => {
    //   console.log("Buffer file: ", Buffer(reader.result));
    //   setImage(Buffer(reader.result));
    // };
    e.preventDefault();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("image = " + image);
    // try {
    //   const { data } = await AxiosJsInstance.post("/api/sbt/create", {
    //     image,
    //   });
    //   console.log(data);
    //   setImgUrl(data.url);
    // } catch (error) {
    //   console.log(error.message);
    // }
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
    const url = `https://ipfs.io/ipfs/${metadata.ipnft}`;
    // // const { data } = await fetch(metadata.url).then((res) => s);
    // // const response = await fetch(metadata.url, {
    // //     method: "GET",
    // //     headers: {
    // //         "Content-Type": "application/json",
    // //     },

    // // });
    // let s = ""
    // for (let i = 0; i < metadata.url.length; i++) {
    //     if (metadata.url[i] == " ") {
    //         s += "%20"
    //     } else if (metadata.url[i] == ':') {
    //         s += "%3A"
    //     }
    //     else {
    //         s += metadata.url[i]
    //     }
    // }
    // console.log(s)

    // const response = await axios.get(s);
    // console.log(response.data);
    setImgUrl(metadata.url.image);
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
