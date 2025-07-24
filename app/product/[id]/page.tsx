import { notFound } from 'next/navigation';
import { products } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

// This is a server component
export default function ProductDetailPage({ params }: { params: { id: string } }) {
    const productId = parseInt(params.id, 10);
    const product = products.find((p) => p.id === productId);

    if (!product) {
        notFound();
    }

    const relatedProducts = products.filter(
        (p) => p.category === product.category && p.id !== product.id
    ).slice(0, 5);

    return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}
