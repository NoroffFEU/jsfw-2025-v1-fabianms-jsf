import Link from "next/link";

export default function Header() {
  return (
    <header className="p-6 bg-sky-950">
      <nav className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/catalogue">Catalogue</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
