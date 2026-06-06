'use client';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
export default function ProductsPage() {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');
const [search, setSearch] = useState('');
useEffect(() => {
fetch('http://localhost:5000/api/products')
.then(res => res.json())
.then(data => {
setProducts(data);
setLoading(false);
})
.catch(() => {

setError('Could not connect to backend. Make sure the
server is running on port 5000.');
setLoading(false);
});
}, []);
const filtered = products.filter(p =>
p.name.toLowerCase().includes(search.toLowerCase()) ||
p.category?.toLowerCase().includes(search.toLowerCase())
);
return (
<div className="flex flex-col min-h-screen">
<Header />
<main className="flex-1 max-w-6xl mx-auto px-4 py-10
w-full">
<h2 className="text-3xl font-bold text-gray-800 mb-2">All
Products</h2>
<p className="text-gray-500 mb-6">Data fetched from
MongoDB via Express API</p>
{/* Search Bar */}
<input
type="text"
placeholder="Search products..."
value={search}
onChange={e => setSearch(e.target.value)}
className="w-full max-w-md border border-gray-300
rounded-lg px-4 py-2 mb-8 focus:outline-none focus:ring-2
focus:ring-blue-400"
/>
{loading && (
<p className="text-center text-gray-500 py-20">Loading
products...</p>
)}
{error && (
<div className="bg-red-100 border border-red-300
text-red-700 rounded-lg p-4 mb-6">
⚠️ {error}

</div>
)}
{!loading && !error && filtered.length === 0 && (
<p className="text-center text-gray-400 py-20">No
products found.</p>
)}
<div className="grid grid-cols-1 sm:grid-cols-2
md:grid-cols-3 lg:grid-cols-4 gap-6">
{filtered.map(product => (
<ProductCard key={product._id} product={product} />
))}
</div>
</main>
<Footer />
</div>
);
}