// others
import Link from "next/link";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function Home() {
  return (
    <>
      <h1>Welcome Home!</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </>
  );
}
