import {
    LivepeerConfig,
    ThemeConfig,
    createReactClient,
    studioProvider,
  } from '@livepeer/react';
  import * as React from 'react';
  import VideoPlayer from '@/components/livepeer/Player';
import LiveStream from '@/components/livepeer/LiveStream';
import UploadVideoAsset from '@/components/livepeer/UploadVideoAsset';
import VideoNFTMinting from '@/components/livepeer/VideoNFTMinting';


  const livepeerClient = createReactClient({
    provider: studioProvider({
      apiKey: 'b8793269-4a3b-4da1-a424-097f2c64f7d5',
    }),
  });
   

export default function livepeer() {
    return (
      <LivepeerConfig client={livepeerClient} >
        {/* <VideoPlayer /> */}
        {/* <LiveStream /> */}
        <UploadVideoAsset /> 
            {/* <VideoNFTMinting /> */}
      </LivepeerConfig>
      
    );
  }
