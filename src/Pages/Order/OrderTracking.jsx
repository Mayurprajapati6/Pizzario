import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../../Layouts/Layout";

function OrderTracking() {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const [currentStep, setCurrentStep] = useState(2);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    // Get orders from Redux store
    const { ordersData } = useSelector((state) => state.order);

    useEffect(() => {
        if (ordersData && ordersData.length > 0) {
            // Find the specific order by ID
            const foundOrder = ordersData.find(order => order._id === orderId);
            
            if (foundOrder) {
                // Transform the order data to match our display format
                const transformedOrder = {
                    _id: foundOrder._id,
                    orderNumber: foundOrder.orderNumber || `ORD-${new Date().getFullYear()}-${String(ordersData.indexOf(foundOrder) + 1).padStart(3, '0')}`,
                    date: foundOrder.createdAt || new Date().toISOString(),
                    status: foundOrder.status || 'preparing',
                    total: foundOrder.totalAmount || 0,
                    estimatedDelivery: "30-45 minutes",
                    items: foundOrder.items || [],
                    address: foundOrder.address || 'Address not available',
                    paymentMethod: foundOrder.paymentMethod || 'Cash on Delivery',
                    deliveryPerson: "John Doe", // Mock delivery person
                    deliveryPhone: "+91 98765 43210" // Mock delivery phone
                };
                
                setOrder(transformedOrder);
                
                // Set current step based on order status
                switch (foundOrder.status) {
                    case 'delivered':
                        setCurrentStep(4);
                        break;
                    case 'on-the-way':
                        setCurrentStep(3);
                        break;
                    case 'preparing':
                        setCurrentStep(2);
                        break;
                    default:
                        setCurrentStep(1);
                }
            } else {
                setNotFound(true);
            }
        } else {
            setNotFound(true);
        }
        setLoading(false);
    }, [ordersData, orderId]);

    const trackingSteps = [
        {
            id: 1,
            title: "Order Placed",
            description: "Your order has been confirmed",
            icon: "📋",
            completed: true
        },
        {
            id: 2,
            title: "Preparing",
            description: "Our chefs are preparing your delicious pizza",
            icon: "👨‍🍳",
            completed: currentStep >= 2,
            current: currentStep === 2
        },
        {
            id: 3,
            title: "On the Way",
            description: "Your order is being delivered",
            icon: "🚚",
            completed: currentStep >= 3,
            current: currentStep === 3
        },
        {
            id: 4,
            title: "Delivered",
            description: "Enjoy your delicious pizza!",
            icon: "🎉",
            completed: currentStep >= 4,
            current: currentStep === 4
        }
    ];

    if (loading) {
        return (
            <Layout>
                <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-600">Loading order details...</p>
                    </div>
                </div>
            </Layout>
        );
    }

    if (notFound || !order) {
        return (
            <Layout>
                <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 py-12">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-4xl">🔍</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
                            Order Not Found
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            We couldn't find the order you're looking for. It might have been cancelled or the order ID is incorrect.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/orders"
                                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                            >
                                View All Orders
                            </Link>
                            <Link
                                to="/"
                                className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-xl border-2 border-orange-200 hover:border-orange-300 transform hover:scale-105 transition-all duration-300"
                            >
                                Order New Pizza
                            </Link>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 py-12">
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative max-w-4xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-12 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
                            Track Your Order
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Follow your delicious pizza from kitchen to doorstep
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Order Details */}
                        <div className="lg:col-span-1 animate-fade-in-left">
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100 p-6 sticky top-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Order Details
                                </h2>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Order Number:</span>
                                        <span className="font-semibold text-gray-900">{order.orderNumber}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Order Date:</span>
                                        <span className="font-semibold text-gray-900">
                                            {new Date(order.date).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Total Amount:</span>
                                        <span className="text-2xl font-bold text-orange-600">₹{order.total}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Payment:</span>
                                        <span className="font-semibold text-gray-900">{order.paymentMethod}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">Est. Delivery:</span>
                                        <span className="font-semibold text-green-600">{order.estimatedDelivery}</span>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-orange-200">
                                    <h3 className="font-semibold text-gray-900 mb-3">Order Items</h3>
                                    <div className="space-y-2">
                                        {order.items && order.items.length > 0 ? (
                                            order.items.map((item, index) => (
                                                <div key={index} className="flex justify-between items-center text-sm">
                                                    <span className="text-gray-600">
                                                        {item.productName || item.product?.productName || 'Product Name Not Available'} x {item.quantity || 1}
                                                    </span>
                                                    <span className="font-semibold">₹{item.price || item.product?.price || 0}</span>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-gray-500 text-sm">No items available</p>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-orange-200">
                                    <h3 className="font-semibold text-gray-900 mb-3">Delivery Address</h3>
                                    <p className="text-sm text-gray-600">{order.address}</p>
                                </div>

                                {order.deliveryPerson && (
                                    <div className="mt-6 pt-6 border-t border-orange-200">
                                        <h3 className="font-semibold text-gray-900 mb-3">Delivery Person</h3>
                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-600">
                                                <span className="font-medium">Name:</span> {order.deliveryPerson}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                <span className="font-medium">Phone:</span> {order.deliveryPhone}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Tracking Timeline */}
                        <div className="lg:col-span-2 animate-fade-in-right">
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100 p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                                    Order Progress
                                </h2>

                                <div className="space-y-8">
                                    {trackingSteps.map((step, index) => (
                                        <div key={step.id} className="flex items-start space-x-4">
                                            {/* Timeline Line */}
                                            <div className="flex flex-col items-center">
                                                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${
                                                    step.completed 
                                                        ? 'bg-green-500 text-white' 
                                                        : step.current 
                                                        ? 'bg-orange-500 text-white animate-pulse' 
                                                        : 'bg-gray-200 text-gray-500'
                                                }`}>
                                                    {step.icon}
                                                </div>
                                                {index < trackingSteps.length - 1 && (
                                                    <div className={`w-0.5 h-16 mt-2 ${
                                                        step.completed ? 'bg-green-500' : 'bg-gray-200'
                                                    }`}></div>
                                                )}
                                            </div>

                                            {/* Step Content */}
                                            <div className="flex-1 pt-2">
                                                <h3 className={`text-lg font-semibold ${
                                                    step.completed || step.current ? 'text-gray-900' : 'text-gray-500'
                                                }`}>
                                                    {step.title}
                                                </h3>
                                                <p className={`text-sm mt-1 ${
                                                    step.completed || step.current ? 'text-gray-600' : 'text-gray-400'
                                                }`}>
                                                    {step.description}
                                                </p>
                                                {step.current && (
                                                    <div className="mt-3 p-3 bg-orange-50 rounded-xl border border-orange-200">
                                                        <p className="text-sm text-orange-800 font-medium">
                                                            🕐 Currently in progress...
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Live Status Updates */}
                                <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border border-orange-200">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                                        Live Updates
                                    </h3>
                                    <div className="space-y-3">
                                        <div className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">Order confirmed</p>
                                                <p className="text-xs text-gray-500">2 minutes ago</p>
                                            </div>
                                        </div>
                                        {currentStep >= 2 && (
                                            <div className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">Chef started preparing your pizza</p>
                                                    <p className="text-xs text-gray-500">1 minute ago</p>
                                                </div>
                                            </div>
                                        )}
                                        {currentStep >= 3 && (
                                            <div className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">Your order is on the way</p>
                                                    <p className="text-xs text-gray-500">Just now</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                    <Link
                                        to="/orders"
                                        className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                    >
                                        View All Orders
                                    </Link>
                                    <button className="flex-1 px-6 py-3 bg-white text-orange-600 font-semibold rounded-xl border-2 border-orange-200 hover:border-orange-300 transform hover:scale-105 transition-all duration-300">
                                        Contact Support
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default OrderTracking; 