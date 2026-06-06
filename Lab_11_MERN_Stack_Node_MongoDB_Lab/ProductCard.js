export default function ProductCard({ product }) {
return (
<div className="bg-white rounded-xl shadow hover:shadow-lg
transition overflow-hidden flex flex-col">
<img
src={product.image ||
'https://via.placeholder.com/300x200?text=Product'}
alt={product.name}
className="w-full h-48 object-cover"
/>
<div className="p-4 flex flex-col flex-1">
<span className="text-xs text-blue-600 font-semibold
uppercase tracking-wide">
{product.category}
</span>
<h2 className="text-lg font-bold text-gray-800
mt-1">{product.name}</h2>
<p className="text-sm text-gray-500 mt-1
flex-1">{product.description}</p>
<div className="flex justify-between items-center mt-4">
<span className="text-xl font-bold text-green-600">Rs.
{product.price}</span>
<span className="text-xs text-gray-400">{product.stock}
in stock</span>
</div>
<button className="mt-3 w-full bg-blue-600 text-white
py-2 rounded-lg hover:bg-blue-700 transition font-medium">
Add to Cart
</button>
</div>
</div>
);
}