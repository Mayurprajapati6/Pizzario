import Layout from "../Layouts/Layout";
import { Link } from "react-router-dom";

function Services() {
    const services = [
        {
            icon: "🚚",
            title: "Fast Delivery",
            description: "Get your pizza delivered to your doorstep in 30-45 minutes. We guarantee hot and fresh delivery every time.",
            features: ["30-45 min delivery", "Hot & fresh guarantee", "Contactless delivery", "Real-time tracking"]
        },
        {
            icon: "🍕",
            title: "Fresh Ingredients",
            description: "We use only the finest and freshest ingredients sourced from local suppliers to ensure the best taste.",
            features: ["100% fresh ingredients", "Local suppliers", "Quality assurance", "No preservatives"]
        },
        {
            icon: "👨‍🍳",
            title: "Expert Chefs",
            description: "Our experienced chefs craft each pizza with love and expertise, ensuring perfect taste every time.",
            features: ["Experienced chefs", "Traditional recipes", "Custom orders", "Quality control"]
        },
        {
            icon: "💳",
            title: "Easy Payment",
            description: "Multiple payment options including cash on delivery, online payments, and digital wallets for your convenience.",
            features: ["Cash on delivery", "Online payments", "Digital wallets", "Secure transactions"]
        },
        {
            icon: "📱",
            title: "Mobile App",
            description: "Order from anywhere with our user-friendly mobile app. Track your order in real-time and get notifications.",
            features: ["User-friendly interface", "Real-time tracking", "Push notifications", "Order history"]
        },
        {
            icon: "🎉",
            title: "Special Offers",
            description: "Enjoy amazing deals, discounts, and special offers on our delicious pizzas and sides.",
            features: ["Daily deals", "Loyalty rewards", "First-order discount", "Bulk order savings"]
        }
    ];

    const deliveryAreas = [
        "Downtown Area", "North Campus", "South Campus", "East Side", 
        "West Side", "Central District", "University Area", "Business District"
    ];

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
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
                            Our Services
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            We're not just delivering pizza, we're delivering happiness! Discover what makes Pizzario the best choice for your pizza cravings.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {services.map((service, index) => (
                            <div 
                                key={index}
                                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100 p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="text-center mb-6">
                                    <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-3xl">{service.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    {service.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                            <span className="text-sm text-gray-700 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Delivery Areas */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-orange-100 p-8 mb-16 animate-fade-in-up">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
                                Delivery Areas
                            </h2>
                            <p className="text-lg text-gray-600">
                                We deliver to all major areas in the city. Check if we serve your location!
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {deliveryAreas.map((area, index) => (
                                <div 
                                    key={index}
                                    className="p-4 bg-orange-50/50 rounded-xl border border-orange-200 text-center hover:bg-orange-100 transition-colors duration-300"
                                >
                                    <span className="text-gray-800 font-medium">{area}</span>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-8">
                            <p className="text-gray-600 mb-4">
                                Don't see your area? Contact us and we'll try our best to serve you!
                            </p>
                            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="animate-fade-in-left">
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
                                Why Choose Pizzario?
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-orange-600 font-bold">✓</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
                                        <p className="text-gray-600">We never compromise on quality. Every pizza is made with the finest ingredients and cooked to perfection.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-orange-600 font-bold">⚡</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                                        <p className="text-gray-600">Our efficient delivery system ensures your pizza reaches you hot and fresh within 30-45 minutes.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-orange-600 font-bold">💝</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer First</h3>
                                        <p className="text-gray-600">Your satisfaction is our priority. We go above and beyond to ensure you have the best experience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="animate-fade-in-right">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-3xl blur-2xl"></div>
                                <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-orange-100">
                                    <div className="text-center space-y-6">
                                        <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto">
                                            <span className="text-4xl">🍕</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Ready to Order?</h3>
                                        <p className="text-gray-600">
                                            Experience the best pizza delivery service in town. Order now and taste the difference!
                                        </p>
                                        <Link
                                            to="/"
                                            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                        >
                                            Order Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-orange-100 p-8 animate-fade-in-up">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
                                Get in Touch
                            </h2>
                            <p className="text-lg text-gray-600">
                                Have questions? We're here to help!
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📞</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                                <p className="text-gray-600">+91 98765 43210</p>
                                <p className="text-sm text-gray-500">24/7 Customer Support</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📧</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                                <p className="text-gray-600">support@pizzario.com</p>
                                <p className="text-sm text-gray-500">We'll respond within 2 hours</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📍</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
                                <p className="text-gray-600">123 Pizza Street</p>
                                <p className="text-sm text-gray-500">City, State 12345</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Services; 