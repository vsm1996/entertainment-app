"use client";

import CardData from "@/data.json";
import Card from "@/component/ui/card";
import Input from "@/component/ui/input";

const TVSeries = () => {
  return (
    <div className="p-200 sm:p-300 md:p-400 col-start-1 flex flex-col gap-300">
      <Input />

      <h1 className="text-1">TV Series</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:pr-200 gap-200">
        {CardData.filter((data) => data.category === "TV Series").map(
          (
            { title, thumbnail, year, category, rating, isBookmarked },
            index
          ) => (
            <Card
              key={index}
              title={title}
              thumbnail={thumbnail}
              year={year}
              category={category}
              isBookmarked={isBookmarked}
              rating={rating}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TVSeries;
