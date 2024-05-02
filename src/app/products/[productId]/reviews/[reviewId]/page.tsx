"use client";
import { notFound } from "next/navigation";

// others
import { type Props } from "./types";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetails({ params }: Props) {
  // const random = getRandomInt(2);

  // if (random === 1) throw new Error("Opps review not available");

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
