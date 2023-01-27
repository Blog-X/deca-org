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
      apiKey: '363b44cf-980b-429f-91e0-cc6aefaa3d02',
    }),
  });
   

export default function livepeer() {
    return (
      <LivepeerConfig client={livepeerClient} >
        {/* <VideoPlayer /> */}
        {/* <LiveStream /> */}
        {/* <UploadVideoAsset /> */}
        <VideoNFTMinting />
      </LivepeerConfig>
      
    );
  }