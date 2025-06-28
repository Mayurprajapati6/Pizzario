import IconArrowRight from "../Components/Icons/ArrowRight";

import PizzaImage from '../assets/Images/pizza2.png';
import CookingImage from '../assets/Images/cooking1.png';
import IconPatchCheck from "../Components/Icons/IconPatchCheck";
import OrderFood from '../assets/Images/orderFood.png';
import Pickup from '../assets/Images/pickup.png';
import Enjoy from '../assets/Images/enjoy.png';
import Layout from "../Layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { getAllProducts } from "../Redux/Slices/ProductSlice";
import { Link } from "react-router-dom";

function Home() { 
    const dispatch = useDispatch();
    const scrollContainerRef = useRef(null);

    const { productsData } = useSelector((state) => state.product);

    useEffect(() => {
        // This will be called when the component mounts
        dispatch(getAllProducts());
    }, []);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    return (
        <Layout>
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
            {/* Hero section */}
            <section className="relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 via-transparent to-amber-100/30"></div>
                <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                
                <div className="relative flex flex-col-reverse items-center justify-center px-6 py-16 md:flex-row md:gap-12 lg:gap-20 max-w-7xl mx-auto">
                    <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
                        <div className="space-y-4">
                            <div className="flex justify-center md:justify-start items-center space-x-2">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 bg-clip-text text-transparent animate-fade-in">
                                    Enjoy the Slice
                                </h1>
                                <span className="text-4xl md:text-5xl lg:text-6xl animate-bounce">😋</span>
                            </div>
                        </div>

                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0 animate-fade-in-up">
                            The Pizza App lets you order your favorite pizza from the comfort of your home. 
                            Enjoy the best pizza in town with just a few clicks.
                        </p>

                        <button className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out animate-fade-in-up delay-200">
                            <span>Order Now</span>
                            <span className="ml-3 transition-transform duration-300 ease-out group-hover:translate-x-2">
                                <IconArrowRight />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center animate-fade-in-right">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-full blur-2xl animate-pulse"></div>
                            <img
                                src={PizzaImage}
                                alt="Delicious Pizza"
                                className="relative w-full max-w-lg h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services section */}
            <section className="relative py-20 bg-gradient-to-br from-white via-orange-50/50 to-amber-50/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                <img
                                    src={CookingImage}
                                    alt="Professional Cooking"
                                    className="relative w-full max-w-lg h-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                                />
                            </div>
                        </div>
                        
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent leading-tight">
                                    Cooked by the best <br/> chefs in the world
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    There are many benefits regarding to that but the main ones are:
                                </p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { icon: <IconPatchCheck className="text-orange-500 w-6 h-6" />, text: "Perfect taste" },
                                    { icon: <IconPatchCheck className="text-orange-500 w-6 h-6" />, text: "Prepared quickly" },
                                    { icon: <IconPatchCheck className="text-orange-500 w-6 h-6" />, text: "Food hygiene guaranteed" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center space-x-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-orange-100 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                                        {item.icon}
                                        <span className="text-xl font-semibold text-gray-800">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process section */}
            <section className="py-20 bg-gradient-to-br from-orange-50/50 via-white to-amber-50/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
                            How It Works
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: OrderFood,
                                title: "Order Food",
                                description: "As easy as 1, 2, 3. Just select your favorite pizza and place your order.",
                                delay: "0"
                            },
                            {
                                icon: Pickup,
                                title: "Pickup Food",
                                description: "Pick up your order from the nearest store or get it delivered to your doorstep.",
                                delay: "200"
                            },
                            {
                                icon: Enjoy,
                                title: "Enjoy Food",
                                description: "As soon as you get your order, enjoy the delicious pizza with your loved ones.",
                                delay: "400"
                            }
                        ].map((item, index) => (
                            <div 
                                key={index}
                                className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-orange-100 hover:border-orange-200"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-amber-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative">
                                    <div className="flex justify-center mb-6">
                                        <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <img src={item.icon} alt={item.title} className="w-12 h-12" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-orange-600 transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-center leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products section */}
            <section className="py-20 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
                            Our Delicious Menu
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover our handcrafted pizzas made with the finest ingredients and traditional recipes
                        </p>
                    </div>

                    {/* Scroll Navigation */}
                    <div className="flex items-center justify-between mb-8">
                        <button
                            onClick={scrollLeft}
                            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-orange-200 hover:border-orange-300"
                        >
                            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                            </svg>
                        </button>
                        <button
                            onClick={scrollRight}
                            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-orange-200 hover:border-orange-300"
                        >
                            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Horizontal Scroll Container */}
                    <div className="relative">
                        <div 
                            ref={scrollContainerRef}
                            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-6"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {productsData.map((item) => {
                                return (
                                    item.inStock && (
                                        <Link to={`/product/${item._id}`} key={item._id} className="flex-shrink-0 w-80">
                                            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-orange-100 hover:border-orange-200 h-full">
                                                <div className="relative overflow-hidden">
                                                    <img 
                                                        src={item.productImage}
                                                        alt={item.productName}
                                                        className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                </div>
                                                <div className="p-6 space-y-4">
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                                                            {item.category}
                                                        </span>
                                                        <span className="text-2xl font-bold text-orange-600">
                                                            ₹{item.price}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                                                        {item.productName}
                                                    </h3>
                                                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                                                        {item.description}
                                                    </p>
                                                    <div className="flex items-center justify-between pt-4">
                                                        <span className="text-sm text-green-600 font-medium flex items-center">
                                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                                            In Stock
                                                        </span>
                                                        <span className="text-orange-600 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                                                            View Details →
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </Layout>
    );
}

export default Home;