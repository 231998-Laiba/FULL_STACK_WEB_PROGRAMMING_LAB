import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Home() {
return (
<div className="flex flex-col min-h-screen">
<Header />
<main className="flex-1">
{/* Hero Section */}
<section className="bg-gradient-to-r from-blue-700
to-blue-500 text-white py-20 text-center px-4">
<h2 className="text-4xl font-extrabold mb-4">Welcome to
ShopEasy ️</h2>
<p className="text-lg text-blue-100 max-w-xl mx-auto">
Discover amazing products at great prices. Built with
the MERN Stack.
</p>
<a
href="/products"
className="mt-8 inline-block bg-white text-blue-700
font-bold px-8 py-3 rounded-full shadow hover:bg-blue-50
transition"
>
Browse Products →
</a>
</section>
{/* Features Section */}
<section className="max-w-5xl mx-auto px-4 py-16 grid
grid-cols-1 md:grid-cols-3 gap-8 text-center">
<div className="p-6 bg-white rounded-xl shadow">
<div className="text-4xl mb-3">🚀</div>
<h3 className="font-bold text-lg text-gray-800">Fast
Delivery</h3>
<p className="text-sm text-gray-500 mt-2">Get your
orders delivered quickly across Pakistan.</p>
</div>
<div className="p-6 bg-white rounded-xl shadow">
<div className="text-4xl mb-3">🔒</div>

<h3 className="font-bold text-lg
text-gray-800">Secure Payments</h3>
<p className="text-sm text-gray-500 mt-2">100% safe
and secure checkout process.</p>
</div>
<div className="p-6 bg-white rounded-xl shadow">
<div className="text-4xl mb-3">💬</div>
<h3 className="font-bold text-lg text-gray-800">24/7
Support</h3>
<p className="text-sm text-gray-500 mt-2">We are here
to help you anytime, anywhere.</p>
</div>
</section>
</main>
<Footer />
</div>
);
}