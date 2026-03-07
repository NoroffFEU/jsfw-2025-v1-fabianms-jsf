import Link from "next/link";

export default function Header() {
  return (
    <header className="p-6  bg-sky-950 border-b-8 border-cyan-700">
      <nav className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/catalogue">Catalogue</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/cart">Cart</Link>
      </nav>
      <div className="p-8 bg-sky-950  text-center">
        <h1 className="text-5xl font-extrabold text-mist-300 tracking-tighter">
          the Shop
        </h1>
      </div>
    </header>
  );
}
