"use client";
import { useState } from "react";

import { useEntStore } from "@/store";

import Carousel from "@/component/ui/carousel";
import Card from "@/component/ui/card";
import Input from "@/component/ui/input";

export default function Home() {
  const entertainmentData = useEntStore((state) => state.entertainmentData);
  const toggleBookmark = useEntStore((state) => state.toggleBookmark);

  const [searchTerm, setTerm] = useState<string>("");

  const filteredData = searchTerm
    ? entertainmentData.filter((item) =>
        item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
      )
    : entertainmentData;
  return (
    <main className="px-200 py-300 md:px-0 grid grid-rows-[max-content_max-content_max-content] gap-300 text-white">
      <Input searchTerm={searchTerm} handleChangeTerm={setTerm} />

      {searchTerm ? (
        <>
          <div className="overflow-hidden w-full col-start-1 flex flex-col gap-300">
            <h1 className="text-1">Trending</h1>
          </div>

          <div className="col-start-1 flex flex-col gap-300">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:pr-200 gap-200">
              {filteredData.map(
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
        </>
      ) : (
        <>
          <div className="overflow-hidden w-full col-start-1 flex flex-col gap-300">
            <h1 className="text-1">Trending</h1>

            <Carousel
              items={[
                ...filteredData
                  .filter((data) => data.isTrending === true)
                  .map(
                    (
                      {
                        title,
                        thumbnail,
                        year,
                        category,
                        rating,
                        isBookmarked,
                        isTrending,
                      },
                      index
                    ) => (
                      <Card
                        key={index}
                        title={title}
                        thumbnail={thumbnail}
                        year={year}
                        category={category}
                        isBookmarked={isBookmarked}
                        isTrending={isTrending}
                        rating={rating}
                        onToggleBookmark={() => {
                          toggleBookmark(title);
                        }}
                      />
                    )
                  ),
              ]}
            />
          </div>

          <div className="col-start-1 flex flex-col gap-300">
            <h2 className="text-1">Reccommended for you</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:pr-200 gap-200">
              {filteredData
                .filter((data) => data.isTrending === false)
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
        </>
      )}
    </main>
  );
}
