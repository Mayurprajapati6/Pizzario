import { useNavigate } from "react-router-dom";
import Layout from "../../Layouts/Layout";
import OrderSuccessImage from "../../assets/Images/ordered-success.png"

function OrderSuccess() {
    const navigate = useNavigate();
    
    // Mock order ID - replace with actual order ID from Redux state
    const orderId = "ORD-2024-002";
    
    return (
        <Layout>
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 flex items-center justify-center py-12">
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-200/5 to-amber-200/5 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-2xl mx-auto px-6 text-center">
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-orange-100 p-12 animate-scale-in">
                        {/* Success Icon */}
                        <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>

                        {/* Success Image */}
                        <div className="mb-8 animate-fade-in-up">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-2xl blur-xl"></div>
                                <img 
                                    src={OrderSuccessImage}
                                    alt="Order Success"
                                    className="relative w-64 h-64 mx-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* Success Message */}
                        <div className="space-y-6 animate-fade-in-up delay-200">
                            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                                Order Placed Successfully!
                            </h1>
                            
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Your delicious pizza is being prepared with love and will be delivered to your doorstep soon.
                            </p>

                            {/* Order Details */}
                            <div className="bg-orange-50/50 rounded-2xl p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900">Order Information</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Order Number:</span>
                                        <span className="font-semibold text-gray-900">{orderId}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Estimated Delivery:</span>
                                        <span className="font-semibold text-green-600">30-45 minutes</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Payment Method:</span>
                                        <span className="font-semibold text-gray-900">Cash on Delivery</span>
                                    </div>
                                </div>
                            </div>

                            {/* What's Next Section */}
                            <div className="bg-orange-50/50 rounded-2xl p-6 space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900">What's Next?</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                    <div className="flex flex-col items-center space-y-2">
                                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 font-medium">Preparing</span>
                                    </div>
                                    <div className="flex flex-col items-center space-y-2">
                                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 font-medium">On the Way</span>
                                    </div>
                                    <div className="flex flex-col items-center space-y-2">
                                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 font-medium">Delivered</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
                                <button
                                    onClick={() => navigate(`/order/track/${orderId}`)}
                                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                >
                                    Track Order
                                </button>
                                <button
                                    onClick={() => navigate('/')}
                                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                >
                                    Order More Pizza
                                </button>
                                <button
                                    onClick={() => navigate('/orders')}
                                    className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-orange-200 hover:border-orange-300"
                                >
                                    View All Orders
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default OrderSuccess;