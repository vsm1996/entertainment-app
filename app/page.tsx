"use client";
import { useState } from "react";

import CardData from "@/data.json";

import Carousel from "@/component/ui/carousel";
import Card from "@/component/ui/card";
import Input from "@/component/ui/input";
import { ItemProp } from "@/utils/types";

export default function Home() {
  const [cardData, setData] = useState<ItemProp[]>(CardData);
  const [searchTerm, setTerm] = useState<string>("");

  const filterData = () => {
    const filtered = CardData.filter((data) =>
      data.title.toLocaleLowerCase().includes(searchTerm)
    );

    if (filtered.length < 1) {
      setData(CardData);
    } else {
      setData(filtered);
    }
  };

  // conditional
  // if searchTerm is present, present search list
  // else
  return (
    <>
      <main className="px-200 py-300 md:px-0 grid grid-rows-[max-content_max-content_max-content] gap-300 text-white">
        <Input
          searchTerm={searchTerm}
          handleChangeTerm={setTerm}
          handleFilterData={filterData}
        />

        <div className="overflow-hidden w-full col-start-1 flex flex-col gap-300">
          <h1 className="text-1">Trending</h1>

          <Carousel
            items={[
              ...cardData
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
                    />
                  )
                ),
            ]}
          />
        </div>

        <div className="col-start-1 flex flex-col gap-300">
          <h2 className="text-1">Reccommended for you</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:pr-200 gap-200">
            {cardData
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
                  />
                )
              )}
          </div>
        </div>
      </main>
    </>
  );
}
