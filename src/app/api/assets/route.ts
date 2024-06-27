import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const assets = await prisma.asset.findMany({});
  return NextResponse.json(assets, { status: 200 });
}
