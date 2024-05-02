"use client";
// others
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
    router.push("/");
    // router.replace("/");
    // router.forward()
  };

  return (
    <>
      <h1>Order Product!</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  );
}
