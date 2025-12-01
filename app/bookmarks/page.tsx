"use client";

import { useState } from "react";

import Card from "@/component/ui/card";
import Input from "@/component/ui/input";
import { useEntStore } from "@/store";

const Bookmarks = () => {
  const entertainmentData = useEntStore((state) => state.entertainmentData);
  const toggleBookmark = useEntStore((state) => state.toggleBookmark);

  const [searchTerm, setTerm] = useState<string>("");

  const filteredData = searchTerm
    ? entertainmentData.filter((item) =>
        item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
      )
    : entertainmentData;

  return (
    <div className="w-full p-200 sm:p-300 md:p-400 col-start-1 flex flex-col gap-300">
      <Input searchTerm={searchTerm} handleChangeTerm={setTerm} />

      <h1 className="text-1">Bookmarked Movies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:pr-200 gap-200">
        {filteredData
          .filter(
            (data) => data.isBookmarked === true && data.category === "Movie"
          )
          .map(
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
                onToggleBookmark={() => {
                  toggleBookmark(title);
                }}
              />
            )
          )}
      </div>
      <h1 className="text-1">Bookmarked TV Series</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:pr-200 gap-200">
        {filteredData
          .filter(
            (data) =>
              data.isBookmarked === true && data.category === "TV Series"
          )
          .map(
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
                onToggleBookmark={() => {
                  toggleBookmark(title);
                }}
              />
            )
          )}
      </div>
    </div>
  );
};

export default Bookmarks;
