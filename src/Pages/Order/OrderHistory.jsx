import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Layouts/Layout";
import { Link } from "react-router-dom";

function OrderHistory() {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");
    
    // Get orders from Redux store
    const { ordersData } = useSelector((state) => state.order);
    const [orders, setOrders] = useState([]);

    // Convert Redux orders data to display format
    useEffect(() => {
        if (ordersData && ordersData.length > 0) {
            // Transform the orders data to match our display format
            const transformedOrders = ordersData.map((order, index) => ({
                _id: order._id || `order-${index}`,
                orderNumber: order.orderNumber || `ORD-${new Date().getFullYear()}-${String(index + 1).padStart(3, '0')}`,
                date: order.createdAt || new Date().toISOString(),
                status: order.status || 'preparing',
                total: order.totalAmount || 0,
                items: order.items || [],
                address: order.address || 'Address not available',
                paymentMethod: order.paymentMethod || 'Cash on Delivery'
            }));
            setOrders(transformedOrders);
        } else {
            setOrders([]);
        }
    }, [ordersData]);

    const getStatusColor = (status) => {
        switch (status) {
            case 'delivered': return 'bg-green-100 text-green-800';
            case 'preparing': return 'bg-orange-100 text-orange-800';
            case 'on-the-way': return 'bg-blue-100 text-blue-800';
            case 'cancelled': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'delivered':
                return (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                );
            case 'preparing':
                return (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                );
            case 'on-the-way':
                return (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                );
            case 'cancelled':
                return (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                );
            default:
                return (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                );
        }
    };

    const filteredOrders = orders.filter(order => {
        const matchesSearch = order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            (order.items && order.items.some(item => 
                                (item.productName || item.product?.productName || '').toLowerCase().includes(searchTerm.toLowerCase())
                            ));
        const matchesFilter = filterStatus === "all" || order.status === filterStatus;
        return matchesSearch && matchesFilter;
    });

    return (
        <Layout>
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 py-12">
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative max-w-6xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-12 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
                            Order History
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Track your past orders and their delivery status
                        </p>
                    </div>

                    {/* Search and Filter */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100 p-6 mb-8">
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Search */}
                            <div className="flex-1">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search orders by order number or product..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full px-4 py-3 pl-10 text-gray-700 bg-white/50 backdrop-blur-sm border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                                    />
                                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </div>
                            </div>

                            {/* Filter */}
                            <div className="md:w-48">
                                <select
                                    value={filterStatus}
                                    onChange={(e) => setFilterStatus(e.target.value)}
                                    className="w-full px-4 py-3 text-gray-700 bg-white/50 backdrop-blur-sm border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                                >
                                    <option value="all">All Orders</option>
                                    <option value="preparing">Preparing</option>
                                    <option value="on-the-way">On the Way</option>
                                    <option value="delivered">Delivered</option>
                                    <option value="cancelled">Cancelled</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Orders List */}
                    <div className="space-y-6">
                        {filteredOrders.length > 0 ? (
                            filteredOrders.map((order) => (
                                <div key={order._id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100 overflow-hidden animate-fade-in-up">
                                    {/* Order Header */}
                                    <div className="p-6 border-b border-orange-100">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                            <div className="flex items-center space-x-4">
                                                <div className="flex items-center space-x-2">
                                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                                                        {order.status.replace('-', ' ').toUpperCase()}
                                                    </span>
                                                    {getStatusIcon(order.status)}
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-900">{order.orderNumber}</h3>
                                                    <p className="text-sm text-gray-600">{new Date(order.date).toLocaleDateString()}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-2xl font-bold text-orange-600">₹{order.total}</p>
                                                <p className="text-sm text-gray-600">{order.paymentMethod}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Order Items */}
                                    <div className="p-6">
                                        <div className="space-y-3">
                                            {order.items && order.items.length > 0 ? (
                                                order.items.map((item, index) => (
                                                    <div key={index} className="flex items-center justify-between p-3 bg-orange-50/50 rounded-xl">
                                                        <div className="flex items-center space-x-3">
                                                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                                                <span className="text-orange-600 font-semibold">🍕</span>
                                                            </div>
                                                            <div>
                                                                <p className="font-medium text-gray-900">
                                                                    {item.productName || item.product?.productName || 'Product Name Not Available'}
                                                                </p>
                                                                <p className="text-sm text-gray-600">
                                                                    Qty: {item.quantity || 1}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <span className="font-semibold text-gray-900">
                                                            ₹{item.price || item.product?.price || 0}
                                                        </span>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="p-3 bg-gray-50 rounded-xl text-center">
                                                    <p className="text-gray-500">No items available</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Delivery Address */}
                                        <div className="mt-4 p-3 bg-gray-50 rounded-xl">
                                            <p className="text-sm text-gray-600">
                                                <span className="font-medium">Delivery Address:</span> {order.address}
                                            </p>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                            <Link
                                                to={`/order/track/${order._id}`}
                                                className="flex-1 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-xl text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                            >
                                                Track Order
                                            </Link>
                                            {order.status === 'preparing' && (
                                                <button className="flex-1 px-4 py-2 bg-red-500 text-white font-medium rounded-xl hover:bg-red-600 transform hover:scale-105 transition-all duration-300">
                                                    Cancel Order
                                                </button>
                                            )}
                                            {order.status === 'delivered' && (
                                                <button className="flex-1 px-4 py-2 bg-green-500 text-white font-medium rounded-xl hover:bg-green-600 transform hover:scale-105 transition-all duration-300">
                                                    Reorder
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-16 animate-fade-in">
                                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">No orders found</h2>
                                <p className="text-gray-600 mb-8">
                                    {searchTerm || filterStatus !== "all" 
                                        ? "Try adjusting your search or filter criteria."
                                        : "You haven't placed any orders yet. Start your pizza journey today!"
                                    }
                                </p>
                                {!searchTerm && filterStatus === "all" && (
                                    <Link
                                        to="/"
                                        className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                    >
                                        Start Ordering
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default OrderHistory; 