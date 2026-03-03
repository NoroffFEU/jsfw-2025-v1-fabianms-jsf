import Link from "next/link";

interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: {
    url: string;
    alt: string;
  };
  rating: number;
  tags: string[];
  reviews: Review[];
}

interface ApiResponse {
  data: Product[];
}

export default async function Catalogue() {
  const response = await fetch("https://v2.api.noroff.dev/online-shop");

  if (!response.ok) {
    return (
      <p>Oops, trouble loading the products Status Code: {response.status}</p>
    );
  }

  const result: ApiResponse = await response.json();
  const products = result.data;

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-6">Catalogue</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8">
        {products.map((product) => (
          <div key={product.id} className="border p-6 rounded-lg shadow">
            <img
              src={product.image.url}
              alt={product.image.alt}
              className="w-full h-64 object-cover mb-4"
            />
            <h2 className="text-2xl font-bold">{product.title}</h2>

            <p className="text-sm text-blue-600 mb-4">
              {product.reviews.length} reviews from customers
            </p>

            <div className="bg-gray-50 p-4 rounded mt-4">
              <h3 className="font-semibold mb-2">Customer Feedback:</h3>
              {product.reviews.length > 0 ? (
                product.reviews.map((rev) => (
                  <div key={rev.id} className="border-b last:border-0 py-2">
                    <p className="text-sm italic">"{rev.description}"</p>
                    <p className="text-xs text-gray-500">
                      - {rev.username} ({rev.rating}/5)
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-400">No reviews yet.</p>
              )}
            </div>

            <Link
              href={`/product/${product.id}`}
              className="block mt-6 text-center bg-black text-white p-2 rounded"
            >
              View Product Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
