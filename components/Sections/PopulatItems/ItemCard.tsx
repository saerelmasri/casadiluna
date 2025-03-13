"use client";

type ItemProps = {
  title: string;
  itemName: string;
  itemPhoto: string;
  price: string;
  itemLink?: string;
};

export default function ItemCard(props: ItemProps) {
  return (
    <div
      className="border border-gray-200 w-[20%] h-full bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: `url(${props.itemPhoto})` }}
    >
      <div className=" w-full py-4 px-3">
        <div className="w-fit bg-white flex items-center px-2 py-1">
          <p className="uppercase text-[10px] font-instrument">{props.title}</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center py-2 space-y-1">
        <p className="font-instrument text-xs text-gray-800 ">
          {props.itemName}
        </p>
        <p className="font-instrument text-sm text-gray-800 ">${props.price}</p>
      </div>
    </div>
  );
}
