import {
    LivepeerConfig,
    ThemeConfig,
    createReactClient,
    studioProvider,
  } from '@livepeer/react';
  import * as React from 'react';
import LiveStream from '@/components/livepeer/LiveStream';


  const livepeerClient = createReactClient({
    provider: studioProvider({
      apiKey: 'b8793269-4a3b-4da1-a424-097f2c64f7d5',
    }),
  });
   

export default function livepeerStream() {
    return (
      <LivepeerConfig client={livepeerClient} >
        <LiveStream />
      </LivepeerConfig>
      
    );
  }
