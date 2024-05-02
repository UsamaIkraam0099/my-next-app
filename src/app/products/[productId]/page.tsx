import { Metadata } from "next";

// others
import { type Props } from "./types";

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 2000);
  });

  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return <h1>Product about Details {params.productId}</h1>;
}
