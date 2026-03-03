import Link from "next/link";

export default function Header() {
  return (
    <header className="p-6  bg-sky-950">
      <nav className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/catalogue">Catalogue</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <h2 className="text-4xl font-bold pt-3">the Shop</h2>
    </header>
  );
}
