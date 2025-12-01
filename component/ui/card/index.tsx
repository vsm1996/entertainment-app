"use client";
import { useState } from "react";
import Image from "next/image";

import BookmarkIcon from "@/component/ui/icons/BookmarkIcon";

import MovieIcon from "@/public/assets/icon-nav-movies.svg";
import TVIcon from "@/public/assets/icon-nav-tv-series.svg";

import GreatLands from "@/public/assets/thumbnails/the-great-lands/regular/small.jpg";
import PlayIcon from "../icons/PlayIcon";

interface CardProps {
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular?: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: any;
  rating: string;
  isBookmarked: boolean;
  isTrending?: boolean;
  index?: number;
  onToggleBookmark?: () => void;
}

const Card = ({
  title,
  thumbnail,
  year,
  category,
  rating,
  index,
  isBookmarked,
  isTrending = false,
  onToggleBookmark,
}: CardProps) => {
  return (
    <div
      className={`${
        isTrending
          ? "grid place-content-center peer overflow-hidden rounded-(--spacing-100)"
          : "w-full h-full flex flex-col items-stretch transition-all duration-400 ease-out hover:scale-95"
      } items-start gap-100`}
    >
      <div
        className={`${
          isTrending && "row-1 col-1"
        } h-full relative overflow-hidden rounded-(--spacing-100) peer`}
      >
        <button
          className=" cursor-pointer p-200 z-10 absolute top-100 right-100 rounded-full overflow-hidden bg-blue-950/60 hover:bg-blue-950/50 transition duration-400 ease-out group"
          onClick={onToggleBookmark}
        >
          <BookmarkIcon fill={isBookmarked ? "#FFF" : "none"} />
        </button>
        {thumbnail && (
          <Image
            width={isTrending ? "470" : "280"}
            height={isTrending ? "230" : "174"}
            className={`${!isTrending && "w-full"} peer`}
            src={thumbnail.regular!.large || thumbnail.trending!.large}
            alt={title}
          />
        )}
      </div>

      <div className="z-10 hidden row-1 col-1 group-hover:flex flex-col items-center justify-center h-full bg-black/50">
        <button className="cursor-pointer text-3 text-white bg-white/25 p-100 rounded-[28.5px] flex items-center gap-200">
          <PlayIcon />
          Play
        </button>
      </div>

      <div
        className={`${
          isTrending
            ? "z-20 row-1 col-1 place-self-end p-200 bg-blue-950/50 rounded-(--spacing-100) flex flex-col gap-200 mb-200 mr-200 transition-all duration-400 ease-out peer-hover:-translate-y-4 peer-hover:bg-blue-950/65 "
            : "flex flex-col gap-100"
        }`}
      >
        <div className="flex flex-row items-center gap-100 text-6 text-white/75">
          <p>{year}</p>
          <span>&middot;</span>
          <div className="flex flex-row items-center gap-100">
            <Image src={category === "Movie" ? MovieIcon : TVIcon} alt="" />
            <p>{category}</p>
          </div>
          <span>&middot;</span>
          <p>{rating}</p>
        </div>

        <p className="text-4 text-white">{title}</p>
      </div>
    </div>
  );
};

export default Card;
