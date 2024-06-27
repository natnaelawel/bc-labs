import { NextResponse } from 'next/server';
// import { assets_data } from './assets_data';
import prisma from '@/lib/prisma';

// To handle a GET request to /api
export async function GET(request: Request) {
  // const assets = assets_data.assets;
  const assets = await prisma.asset.findMany({});
  return NextResponse.json(assets, { status: 200 });
}
