import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartDetails, removeProductFromCart } from "../../Redux/Slices/CartSlice";
import Layout from "../../Layouts/Layout";
import { Link } from "react-router-dom";

function CartDetails() {

    const [cartDetails, setCartDetails] = useState();
    const { cartsData } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    async function fetchCartDetails() {
        console.log("fetching cart details")
        const response = await dispatch(getCartDetails());
        console.log(response);
        setCartDetails(response?.payload?.data?.data);
    }

    async function handleRemove(productId) {
        // Remove product from cart
        const response = await dispatch(removeProductFromCart(productId));
        if(response?.payload?.data?.success) {
            console.log("removed successfully")
            dispatch(getCartDetails()); // Fetch cart details and update state
        }
    }
    
    useEffect(() => {
        console.log("re-rendering")
        fetchCartDetails();
    }, [cartsData?.items?.length]);

    const totalAmount = cartDetails?.items?.reduce((acc, item) => acc + (item?.quantity * item?.product?.price), 0) || 0;

    return (
        <Layout>
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 py-12">
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-12 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
                            Your Cart
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Review your delicious selections and proceed to checkout
                        </p>
                    </div>

                    {cartDetails?.items?.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Cart Items */}
                            <div className="lg:col-span-2 space-y-6 animate-fade-in-up">
                                {cartDetails?.items.map((item, index) => (
                                    <div 
                                        key={item._id} 
                                        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100 overflow-hidden transform hover:scale-105 transition-all duration-300"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="p-6">
                                            <div className="flex items-center space-x-6">
                                                {/* Product Image */}
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-xl blur-lg"></div>
                                                    <img
                                                        className="relative w-24 h-24 object-cover rounded-xl shadow-md"
                                                        src={item?.product?.productImage}
                                                        alt={item?.product?.productName}
                                                    />
                                                </div>

                                                {/* Product Details */}
                                                <div className="flex-1 min-w-0">
                                                    <Link to={`/product/${item?._id}`} className="group">
                                                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                                                            {item?.product?.productName}
                                                        </h3>
                                                    </Link>
                                                    <p className="text-gray-600 mt-1 line-clamp-2">
                                                        {item?.product?.description}
                                                    </p>
                                                    <div className="flex items-center justify-between mt-4">
                                                        <div className="flex items-center space-x-4">
                                                            <span className="text-2xl font-bold text-orange-600">
                                                                ₹{item?.product?.price}
                                                            </span>
                                                            <span className="text-sm text-gray-500">
                                                                Qty: {item?.quantity}
                                                            </span>
                                                        </div>
                                                        
                                                        {/* Remove Button */}
                                                        {item._id && (
                                                            <button
                                                                type="button"
                                                                onClick={() => handleRemove(item?.product?._id)}
                                                                className="flex items-center space-x-2 px-4 py-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors duration-300"
                                                            >
                                                                <svg
                                                                    className="w-4 h-4"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth="2"
                                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                    />
                                                                </svg>
                                                                <span className="font-medium">Remove</span>
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Order Summary */}
                            <div className="lg:col-span-1 animate-fade-in-right">
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100 p-6 sticky top-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                        Order Summary
                                    </h2>

                                    {/* Items List */}
                                    <div className="space-y-4 mb-6">
                                        {cartDetails?.items.map((item) => (
                                            <div key={item?.product?._id} className="flex justify-between items-center">
                                                <div className="flex-1">
                                                    <p className="font-medium text-gray-900 truncate">
                                                        {item?.product?.productName}
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        Qty: {item?.quantity}
                                                    </p>
                                                </div>
                                                <span className="font-semibold text-gray-900">
                                                    ₹{item?.product?.price * item?.quantity}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Total */}
                                    <div className="border-t border-orange-200 pt-4 mb-6">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xl font-bold text-gray-900">Total</span>
                                            <span className="text-2xl font-bold text-orange-600">
                                                ₹{totalAmount}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Checkout Button */}
                                    <Link
                                        to={'/order'}
                                        className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center block"
                                    >
                                        Proceed to Checkout
                                    </Link>

                                    {/* Continue Shopping */}
                                    <div className="mt-6 text-center">
                                        <span className="text-sm text-gray-500">or</span>
                                        <Link
                                            to={'/'}
                                            className="block mt-2 text-orange-600 hover:text-orange-700 font-medium transition-colors duration-300"
                                        >
                                            Continue Shopping
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Empty Cart State */
                        <div className="text-center py-16 animate-fade-in">
                            <div className="max-w-md mx-auto">
                                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
                                <p className="text-gray-600 mb-8">
                                    Looks like you haven't added any delicious pizzas to your cart yet.
                                </p>
                                <Link
                                    to={'/'}
                                    className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                >
                                    Start Shopping
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    )
}

export default CartDetails;