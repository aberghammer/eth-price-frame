import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
import { createTextImageAndOverlay } from '../../../utils/createTextAndImageOverlay';
import { Currency } from '../../../utils/enums';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;
  // const body: FrameRequest = await req.json();
  // const { message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });
  const message = {
    button: 2,
  };
  let curr = Currency.USD;
  if (message?.button === 2) {
    curr = Currency.BTC;
  }
  const returnImage = await createTextImageAndOverlay(curr);

  const base64Image = returnImage.toString('base64');
  const dataUrl = `data:image/png;base64,${base64Image}`;

  return new NextResponse(
    getFrameHtmlResponse({
      image: {
        src: dataUrl,
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  console.log('req', req);
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
