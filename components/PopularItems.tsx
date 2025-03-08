"use client";

export default function PopularItems() {
  return (
    <section className="relative bg-white min-h-[90vh] overflow-hidden">
      <div className="border w-full p-5">
        <p className="text-2xl">Popular Items</p>
      </div>
      <div className="border w-full px-5 flex flex-row justify-between">
        <div className="flex flex-row space-x-2">
          <div className="px-3 rounded-xl bg-[#bbb59e]">
            <p>All</p>
          </div>
        </div>
        <div className="flex flex-row space-x-2">
          <p>Show All</p>
        </div>
      </div>
    </section>
  );
}
