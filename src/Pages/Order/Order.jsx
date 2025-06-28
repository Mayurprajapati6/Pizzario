import { useNavigate } from "react-router-dom";
import Layout from "../../Layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import { placeOrder } from "../../Redux/Slices/OrderSlice";

function Order() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {cartsData} = useSelector((state) => state.cart);

    const [details, setDetails] = useState({
        paymentMethod: 'OFFLINE',
        address: ''
    });

    function handleUserInput(e) {
        const {name, value} = e.target;
        setDetails({
         ...details,
         [name]: value
        })
    }

    async function handleFormSubmit(e) {
        e.preventDefault();
        if(details.paymentMethod === '' || details.address === '') {
            toast.error("Please fill all the fields");
            return;
        }

        const response = await dispatch(placeOrder());

        console.log("order response", response);

        if(response?.payload?.data?.success) {
            toast.success('Order placed successfully');
            navigate('/order/success');
        } else {
            toast.error('Something went wrong cannot place order');
        }

    }

    const totalAmount = cartsData?.items?.reduce((acc, item) => acc + (item?.quantity * item?.product?.price), 0) || 0;

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
                            Complete Your Order
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Thanks for choosing Pizzario! Just a few more details to get your delicious pizza on its way.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Order Summary */}
                        <div className="animate-fade-in-left">
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100 p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Order Summary
                                </h2>

                                {/* Items List */}
                                <div className="space-y-4 mb-6">
                                    {cartsData?.items?.map((item) => (
                                        <div key={item?.product?._id} className="flex items-center space-x-4 p-4 bg-orange-50/50 rounded-xl">
                                            <img
                                                src={item?.product?.productImage}
                                                alt={item?.product?.productName}
                                                className="w-16 h-16 object-cover rounded-lg"
                                            />
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-900">
                                                    {item?.product?.productName}
                                                </h3>
                                                <p className="text-sm text-gray-600">
                                                    Qty: {item?.quantity}
                                                </p>
                                            </div>
                                            <span className="font-bold text-orange-600">
                                                ₹{item?.product?.price * item?.quantity}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Total */}
                                <div className="border-t border-orange-200 pt-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-xl font-bold text-gray-900">Total Amount</span>
                                        <span className="text-2xl font-bold text-orange-600">
                                            ₹{totalAmount}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Checkout Form */}
                        <div className="animate-fade-in-right">
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100 p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Delivery Details
                                </h2>

                                <form onSubmit={handleFormSubmit} className="space-y-6">
                                    {/* Payment Method */}
                                    <div className="space-y-3">
                                        <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
                                            Payment Method <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <select 
                                                name="paymentMethod"
                                                required
                                                onChange={handleUserInput}
                                                value={details.paymentMethod}
                                                className="w-full px-4 py-3 text-gray-700 bg-white/50 backdrop-blur-sm border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                                            >
                                                <option value="OFFLINE">Cash on Delivery</option>
                                                <option value="ONLINE">Online Payment</option>
                                            </select>
                                            
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="space-y-3">
                                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                            Delivery Address <span className="text-red-500">*</span>
                                        </label>
                                        <textarea 
                                            name="address"
                                            placeholder="Enter your complete delivery address..."
                                            onChange={handleUserInput}
                                            value={details.address}
                                            rows="4"
                                            className="w-full px-4 py-3 text-gray-700 bg-white/50 backdrop-blur-sm border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                                        />
                                    </div>

                                    {/* Delivery Info */}
                                    <div className="bg-orange-50/50 rounded-xl p-4 space-y-3">
                                        <h3 className="font-semibold text-gray-900 flex items-center">
                                            <svg className="w-5 h-5 text-orange-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            Delivery Information
                                        </h3>
                                        <div className="space-y-2 text-sm text-gray-600">
                                            <div className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                <span>Estimated delivery time: 30-45 minutes</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                <span>Free delivery on orders above ₹500</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                <span>Contactless delivery available</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <button 
                                        type="submit"
                                        className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                    >
                                        Place Order
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Order;