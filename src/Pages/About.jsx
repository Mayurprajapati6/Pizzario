import Layout from "../Layouts/Layout";
import { Link } from "react-router-dom";

function About() {
    const teamMembers = [
        {
            name: "Your Name",
            role: "Founder & Head Chef",
            image: "👨‍🍳",
            description: "Add your own description here. Share your passion for pizza and culinary expertise."
        },
        {
            name: "Team Member",
            role: "Operations Manager",
            image: "👩‍💼",
            description: "Add team member details here. Describe their role and contribution to the business."
        },
        {
            name: "Team Member",
            role: "Delivery Manager",
            image: "🚚",
            description: "Add team member details here. Describe their role in ensuring smooth delivery operations."
        },
        {
            name: "Team Member",
            role: "Customer Success",
            image: "💬",
            description: "Add team member details here. Describe their dedication to customer satisfaction."
        }
    ];

    const milestones = [
        {
            year: "2025",
            title: "Pizzario Founded",
            description: "Started with a simple mission: deliver the best pizza experience to our community."
        },
        {
            year: "2025",
            title: "First Orders",
            description: "Began serving our first customers and building our reputation for quality and service."
        },
        {
            year: "2025",
            title: "Growing Strong",
            description: "Expanding our delivery coverage and serving more neighborhoods across the city."
        },
        {
            year: "2025",
            title: "Mobile App Launch",
            description: "Launched our mobile app to make ordering even more convenient for our customers."
        },
        {
            year: "2025",
            title: "Future Goals",
            description: "Planning to expand and serve even more customers with our delicious pizzas."
        }
    ];

    const values = [
        {
            icon: "🍕",
            title: "Quality First",
            description: "We never compromise on the quality of our ingredients or the taste of our pizzas."
        },
        {
            icon: "⚡",
            title: "Fast & Reliable",
            description: "We understand the importance of time and deliver your pizza hot and fresh."
        },
        {
            icon: "💝",
            title: "Customer Focused",
            description: "Your satisfaction is our priority. We go above and beyond to exceed expectations."
        },
        {
            icon: "🌱",
            title: "Community Driven",
            description: "We're proud to be part of our local community and support local suppliers."
        }
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
                            About Pizzario
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            We're not just a pizza delivery service – we're a family passionate about bringing joy through delicious food. 
                            Our story is one of love, dedication, and the perfect slice.
                        </p>
                    </div>

                    {/* Our Story */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="animate-fade-in-left">
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    Pizzario was born from a simple dream: to deliver the most delicious, authentic pizza right to your doorstep. 
                                    Founded in 2025, we started with a small kitchen and big ambitions.
                                </p>
                                <p>
                                    Our founder brought traditional recipes and combined them with modern 
                                    delivery technology to create something truly special. Every pizza we make carries the love and passion 
                                    of dedicated pizza makers.
                                </p>
                                <p>
                                    Today, we're proud to serve our community, and we still maintain that 
                                    same dedication to quality and service that we had on day one.
                                </p>
                            </div>
                        </div>

                        <div className="animate-fade-in-right">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-3xl blur-2xl"></div>
                                <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-orange-100">
                                    <div className="text-center space-y-6">
                                        <div className="w-32 h-32 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto">
                                            <span className="text-6xl">🍕</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Made with Love</h3>
                                        <p className="text-gray-600">
                                            Every pizza is crafted with the same care and attention that we would give to our own family.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our Values */}
                    <div className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
                                Our Values
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                These core values guide everything we do, from selecting ingredients to serving our customers.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <div 
                                    key={index}
                                    className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100 p-6 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 animate-fade-in-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl">{value.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Our Journey */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-orange-100 p-8 mb-16 animate-fade-in-up">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
                                Our Journey & Vision
                            </h2>
                            <p className="text-lg text-gray-600">
                                From where we started to where we're heading - our story of growth and ambition.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-6">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        2025
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">The Beginning</h3>
                                    <p className="text-gray-600">Started Pizzario with a dream to deliver the best pizza experience. Built our first kitchen and established our core values of quality, speed, and customer satisfaction.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        2025
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">First Success</h3>
                                    <p className="text-gray-600">Successfully launched our delivery service, served our first customers, and received amazing feedback. Built a loyal customer base in our local community.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        2025
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Innovation</h3>
                                    <p className="text-gray-600">Developed and launched our mobile app, making ordering more convenient. Implemented real-time tracking and improved our delivery system.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        2026
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Expansion Vision</h3>
                                    <p className="text-gray-600">Planning to expand our delivery coverage to more areas, introduce new menu items, and enhance our customer experience with advanced technology.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        Future
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                                    <p className="text-gray-600">To become the most loved pizza delivery service in the region, known for exceptional quality, lightning-fast delivery, and outstanding customer service. We aim to serve thousands of happy customers and expand to multiple locations.</p>
                                </div>
                            </div>
                        </div>

                        {/* Vision Statement */}
                        <div className="mt-12 p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border border-orange-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
                            <p className="text-lg text-gray-700 text-center leading-relaxed">
                                "To deliver happiness through delicious, fresh pizzas while providing the fastest and most reliable delivery service. We're committed to using the finest ingredients, maintaining the highest standards of quality, and creating memorable experiences for every customer."
                            </p>
                        </div>
                    </div>

                    {/* Our Team */}
                    <div className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
                                Meet Our Team
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                The passionate people behind every delicious pizza and exceptional service.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {teamMembers.map((member, index) => (
                                <div 
                                    key={index}
                                    className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100 p-6 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 animate-fade-in-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-3xl">{member.image}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">
                                        {member.name}
                                    </h3>
                                    <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {member.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 text-center text-white animate-fade-in-up">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Experience the Best Pizza?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Join our satisfied customers who choose Pizzario for their pizza cravings.
                        </p>
                        <Link
                            to="/"
                            className="inline-block px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                            Order Now
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default About; 