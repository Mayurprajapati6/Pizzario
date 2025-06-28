import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getproductDetails } from "../../Redux/Slices/ProductSlice";
import Layout from "../../Layouts/Layout";
import { addProductToCart, getCartDetails, removeProductFromCart } from "../../Redux/Slices/CartSlice";

function ProductDetails() {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const [productDetails, setProductDetails] = useState({});
    const [isInCart, setIsInCart] = useState(false); // Check if product is in cart

    async function fetchProductDetails() {
        const details = await dispatch(getproductDetails(productId));
        console.log(details);
        setProductDetails(details?.payload?.data?.data);
    }

    async function handleCart() {
        // Add product to cart
        const response = await dispatch(addProductToCart(productId));
        if(response?.payload?.data?.success) {
            setIsInCart(true);
            dispatch(getCartDetails()); // Fetch cart details and update state
        }
    }

    async function handleRemove() {
        // Remove product from cart
        const response = await dispatch(removeProductFromCart(productId));
        if(response?.payload?.data?.success) {
            setIsInCart(false);
            dispatch(getCartDetails()); // Fetch cart details and update state
        }
    }

    useEffect(() => {
        fetchProductDetails();
    }, [productId]);

    return (
        <Layout>
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 py-12">
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-orange-100 overflow-hidden">
                        <div className="flex flex-col lg:flex-row">
                            {/* Product Image */}
                            <div className="w-full lg:w-1/2 p-8 animate-fade-in-left">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                    <img
                                        alt={productDetails?.productName}
                                        className="relative w-full h-96 lg:h-[500px] object-cover object-center rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                                        src={productDetails?.productImage}
                                    />
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="w-full lg:w-1/2 p-8 lg:p-12 animate-fade-in-right">
                                <div className="space-y-6">
                                    {/* Category Badge */}
                                    <div className="inline-flex">
                                        <span className="px-4 py-2 text-sm font-medium text-orange-600 bg-orange-100 rounded-full">
                                            {productDetails?.category}
                                        </span>
                                    </div>

                                    {/* Product Title */}
                                    <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                                        {productDetails?.productName}
                                    </h1>

                                    {/* Rating and Reviews */}
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-1">
                                            {[...Array(5)].map((_, index) => (
                                                <svg
                                                    key={index}
                                                    fill={index < 4 ? "#f59e0b" : "#e5e7eb"}
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="w-5 h-5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                </svg>
                                            ))}
                                            <span className="ml-2 text-gray-600 font-medium">4.0</span>
                                        </div>
                                        <span className="text-gray-400">•</span>
                                        <span className="text-gray-600">4 Reviews</span>
                                    </div>

                                    {/* Social Share */}
                                    <div className="flex items-center space-x-4 pt-4 border-t border-orange-100">
                                        <span className="text-sm font-medium text-gray-700">Share:</span>
                                        <div className="flex space-x-3">
                                            <a className="p-2 bg-orange-100 rounded-full hover:bg-orange-200 transition-colors duration-300">
                                                <svg
                                                    fill="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-4 h-4 text-orange-600"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a className="p-2 bg-orange-100 rounded-full hover:bg-orange-200 transition-colors duration-300">
                                                <svg
                                                    fill="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-4 h-4 text-orange-600"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a className="p-2 bg-orange-100 rounded-full hover:bg-orange-200 transition-colors duration-300">
                                                <svg
                                                    fill="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-4 h-4 text-orange-600"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="space-y-3">
                                        <h3 className="text-lg font-semibold text-gray-900">Description</h3>
                                        <p className="text-gray-600 leading-relaxed text-lg">
                                            {productDetails?.description}
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-3">
                                        <h3 className="text-lg font-semibold text-gray-900">Features</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                <span className="text-gray-600">Fresh ingredients</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                <span className="text-gray-600">Handcrafted</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                <span className="text-gray-600">Premium quality</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                <span className="text-gray-600">Fast delivery</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Price and Action */}
                                    <div className="pt-6 border-t border-orange-100">
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-1">
                                                <span className="text-3xl font-bold text-orange-600">
                                                    ₹{productDetails?.price}
                                                </span>
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-sm text-green-600 font-medium flex items-center">
                                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                                        In Stock
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            {isInCart ? (
                                                <button
                                                    className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                                    onClick={() => handleRemove(productId)}
                                                >
                                                    Remove from Cart
                                                </button>
                                            ) : (
                                                <button
                                                    className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                                    onClick={handleCart}
                                                >
                                                    Add to Cart
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductDetails;