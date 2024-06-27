import clsx from 'clsx';
import type { NextPage } from 'next';
import Link from 'next/link';

export type TableListItemType = {
  className?: string;
  image?: string;
  currency?: string;
  name?: string;
  last_trade?: string;
  hour_24_change_percent?: string;
  hour_24_change?: string;
};

const TableListItem: NextPage<TableListItemType> = ({
  className = '',
  currency,
  image,
  name,
  last_trade,
  hour_24_change_percent,
  hour_24_change,
}) => {
  return (
    <tr
      className={clsx(
        'w-full flex-row items-center justify-start gap-x-5 px-0 py-2 pb-10 text-left font-roboto text-lg text-zinc-50',
        className,
      )}>
      <td className="pb-5">
        <div className="flex w-full min-w-44 flex-row items-center justify-start gap-4">
          <img
            className="relative h-10 shrink-0 overflow-hidden rounded-lg md:h-16"
            loading="lazy"
            alt=""
            src={image}
          />
          <div className="box-border flex flex-col items-start justify-start px-0 py-5">
            <div className="flex flex-row items-start justify-start self-stretch">
              <span className="relative flex-1 text-ellipsis whitespace-nowrap text-sm font-medium md:text-base">
                {name}/
              </span>
              <span className="relative flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium text-dimgray md:text-base">
                {currency}
              </span>
            </div>
          </div>
        </div>
      </td>

      <td className="pb-5">
        <div className="relative inline-block w-32 text-ellipsis whitespace-nowrap text-sm font-medium md:text-base">
          {last_trade}
        </div>
      </td>
      <td className="pb-5">
        <div
          className={clsx(
            'relative inline-block min-w-28 overflow-hidden text-ellipsis whitespace-nowrap font-medium',
            {
              'text-tomato': hour_24_change_percent?.includes('-'),
              'text-springgreen': !hour_24_change_percent?.includes('-'),
              '!text-gray-100': hour_24_change_percent === '+0.00%',
            },
          )}>
          {hour_24_change_percent}
        </div>
      </td>
      <td className="pb-5">
        <div
          className={clsx(
            'relative inline-block min-w-[71px] overflow-hidden text-ellipsis whitespace-nowrap font-medium text-tomato',
            {
              'text-tomato': hour_24_change?.includes('-'),
              'text-springgreen': !hour_24_change?.includes('-'),
              '!text-gray-100': hour_24_change === '$0.00',
            },
          )}>
          {hour_24_change}
        </div>
      </td>
      <td className="min-w-20 pb-5">
        <div className="flex items-center justify-end">
          <div className="box-border flex w-16 flex-row items-center justify-center bg-springgreen p-1.5 text-sm text-darkslategray-200 md:p-2.5 md:text-base">
            <Link
              href={`/trade`}
              className="relative flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-center font-medium">
              Trade
            </Link>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TableListItem;
