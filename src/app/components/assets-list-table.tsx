import React, { Suspense } from 'react';
import TableListItem from './table-list-item';

type AssetType = {
  id: string;
  name: string;
  currency: string;
  last_trade: string;
  image: string;
  hour_24_change: string;
  hour_24_change_percent: string;
};

const fetchAssets = async () => {
  try {
    const response = await fetch(`${process.env.API_URL}/api/assets`, {
      method: 'GET',
      next: {
        revalidate: 5, // revalidate every 5 seconds
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching assets:', error);
    return [];
  }
};

const AssetsListTable = async () => {
  const assets = await fetchAssets();
  return (
    <div className="flex w-full max-w-full flex-1 flex-col items-start justify-start">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex w-full flex-col items-start justify-start gap-[8px] overflow-y-hidden rounded-3xs border-[1px] border-solid border-darkslategray-100 bg-gray-300 px-10 py-7 [backdrop-filter:blur(30px)]">
          <table className="w-full table-auto overflow-scroll overflow-x-auto rounded-3xs bg-gray-300 [backdrop-filter:blur(30px)]">
            <thead>
              <tr className="text-sm">
                <th className="whitespace-nowrap pb-5">ASSETS</th>
                <th className="whitespace-nowrap pb-5">LAST TRADE</th>
                <th className="whitespace-nowrap pb-5">24H %</th>
                <th className="whitespace-nowrap pb-5">24H CHANGE</th>
                <th className="flex items-center justify-end overflow-hidden text-ellipsis whitespace-nowrap pb-5 font-semibold text-royalblue">{`More >`}</th>
              </tr>
              <tr className="border-t">
                <th className="h-5"></th>
              </tr>
            </thead>
            <tbody className="">
              {assets.map((asset: AssetType) => (
                <TableListItem
                  key={asset.id}
                  image={asset.image}
                  name={asset.name}
                  currency={asset.currency}
                  last_trade={asset.last_trade}
                  hour_24_change={asset.hour_24_change}
                  hour_24_change_percent={asset.hour_24_change_percent}
                />
              ))}
            </tbody>
          </table>
        </div>
      </Suspense>
    </div>
  );
};

export default AssetsListTable;
