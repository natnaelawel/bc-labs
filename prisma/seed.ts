import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const assetsData: Prisma.AssetCreateInput[] = [
  {
    name: 'BTC',
    currency: 'USD',
    last_trade: '$63,000.00',
    image: '/cryptocurrencycolorbtc.svg',
    hour_24_change: '-$1.426.18',
    hour_24_change_percent: '-2.21%',
  },
  {
    name: 'ETH',
    currency: 'USD',
    last_trade: '$3,408.90',
    image: '/cryptocurrencycoloreth.svg',
    hour_24_change: '-$11.20',
    hour_24_change_percent: '-0.33%',
  },

  {
    name: 'DOGE',
    currency: 'USD',
    last_trade: '$0.15',
    image: '/cryptocurrencycolordoge.svg',
    hour_24_change: '+$0.02',
    hour_24_change_percent: '+15.75%',
  },
  {
    name: 'ALGO',
    currency: 'USD',
    last_trade: '$0.15',
    image: '/cryptocurrencycoloralgo.svg',
    hour_24_change: '$0.00',
    hour_24_change_percent: '+0.00%',
  },

  {
    name: 'DOT',
    currency: 'USD',
    last_trade: '$5.64',
    image: '/cryptocurrencycolordot.svg',
    hour_24_change: '$0.00',
    hour_24_change_percent: '+0.00%',
  },
  {
    name: 'UNI',
    currency: 'USD',
    last_trade: '$9.79',
    image: '/tokenbrandeduni.svg',
    hour_24_change: '$0.00',
    hour_24_change_percent: '+0.00%',
  },
  {
    name: 'COMP',
    currency: 'USD',
    last_trade: '$45.67',
    image: '/cryptocurrencycolorcomp.svg',
    hour_24_change: '-$0.44',
    hour_24_change_percent: '-0.95%',
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of assetsData) {
    const asset = await prisma.asset.create({
      data: u,
    });
    console.log(`Created asset with id: ${asset.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
