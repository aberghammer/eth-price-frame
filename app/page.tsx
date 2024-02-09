import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Get current ETH Price!',
    },

    {
      action: 'post_redirect',
      label: 'ETH / USD',
    },
    {
      label: 'ETH / BTC',
      action: 'post_redirect',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/ETH.png`,
    aspectRatio: '1:1',
  },

  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'ETH Price',
  description: 'Get real-time ETH price!',
  openGraph: {
    title: 'ETH Price',
    description: 'Get real-time ETH price!',
    images: [`${NEXT_PUBLIC_URL}/ETH.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>
        follow <a href="https://warpcast.com/bytebrush">@bytebrush</a>
      </h1>
    </>
  );
}
