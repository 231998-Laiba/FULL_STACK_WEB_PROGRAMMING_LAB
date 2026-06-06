export default function Header() {
return (
<header className="bg-blue-700 text-white shadow-md">
<div className="max-w-6xl mx-auto px-4 py-4 flex
justify-between items-center">
<h1 className="text-2xl font-bold tracking-wide">🛒
ShopEasy</h1>
<nav className="flex gap-6 text-sm font-medium">
<a href="/" className="hover:text-blue-200
transition">Home</a>
<a href="/products" className="hover:text-blue-200
transition">Products</a>
<a href="/cart" className="hover:text-blue-200
transition">Cart</a>
</nav>
</div>
</header>
);
}