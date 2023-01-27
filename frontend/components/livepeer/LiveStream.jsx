import { Player, useCreateStream } from '@livepeer/react';
 
import { useMemo, useState } from 'react';


export default function LiveStream(){
    const [streamName, setStreamName] = useState('');
  const {
    mutate: createStream,
    data: stream,
    status,
  } = useCreateStream(streamName ? { name: streamName } : null);
 
  const isLoading = useMemo(() => status === 'loading', [status]);
 
  return (
    <div>
      <input
        type="text"
        placeholder="Stream name"
        onChange={(e) => setStreamName(e.target.value)}
      />
 
      {stream?.playbackId && (
        <Player
          title={stream?.name}
          playbackId={stream?.playbackId}
          autoPlay
          muted
        />
      )}
 
      <div>
        {!stream && (
          <button
            onClick={() => {
              createStream?.();
            }}
            disabled={isLoading || !createStream}
          >
            Create Stream
          </button>
        )}
      </div>
    </div>
  );
}