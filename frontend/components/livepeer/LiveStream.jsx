import { Player, useCreateStream } from '@livepeer/react';

import { useMemo, useState } from 'react';

import { useEffect } from 'react';
import fetchStreams from '@/api/livepeer.api';


export default function LiveStream() {
  const [streamName, setStreamName] = useState('');
  const [playbackId, setPlaybackId] = useState('');
  const {
    mutate: createStream,
    data: stream,
    status,
  } = useCreateStream(streamName ? { name: streamName } : null);

  const isLoading = useMemo(() => status === 'loading', [status]);

  useEffect(() => {
    setPlaybackId('a2fb3rpgxc1oxiwl');
  }, []);

  return (
    <div>

      <div className="border-4 border-sky-500 ">


        <Player
          title={stream?.name}
          playbackId={playbackId}
          autoPlay
          muted
        />
      </div>


    </div>
  );
}