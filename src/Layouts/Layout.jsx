import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Components/Footer';
import Pizzalogo from '../assets/Images/pizza1.png';
import CartIcon from '../assets/Images/cart.svg';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../Redux/Slices/AuthSlice';
import { useEffect, useState } from 'react';
import { getCartDetails } from '../Redux/Slices/CartSlice';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const userData = useSelector((state) => state.auth.data);
    const { cartsData } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showUserModal, setShowUserModal] = useState(false);

    // Debug: Log user data to see the structure
    useEffect(() => {
        console.log("User data from Redux:", userData);
        console.log("Is logged in:", isLoggedIn);
    }, [userData, isLoggedIn]);

    async function handleLogout(e) {
        e.preventDefault();
        dispatch(logout());
        setShowUserModal(false);
        navigate('/');
    }

    async function fetchCartDetails() {
        const res = await dispatch(getCartDetails());
        console.log("cart details", res)
        if(res?.payload?.isUnauthorized) {
            console.log("unauthorized");
            dispatch(logout());
        }
    }

    useEffect(() => {
        console.log(typeof(isLoggedIn))
        if(isLoggedIn) {
            fetchCartDetails();
        }
    }, []);

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showUserModal && !event.target.closest('.user-modal')) {
                setShowUserModal(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showUserModal]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div 
                            className="flex items-center space-x-3 cursor-pointer group transform hover:scale-105 transition-all duration-300"
                            onClick={() => navigate('/')}
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                                <img 
                                    src={Pizzalogo} 
                                    alt="Pizza logo" 
                                    className="relative w-10 h-10 drop-shadow-md"
                                />
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                                Pizzario
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className='hidden md:flex items-center space-x-8'>
                            <Link 
                                to="/" 
                                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300 relative group"
                            >
                                Menu
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                            {isLoggedIn && (
                                <Link 
                                    to="/orders" 
                                    className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300 relative group"
                                >
                                    Orders
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            )}
                            <Link 
                                to="/services" 
                                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300 relative group"
                            >
                                Services
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                            <Link 
                                to="/about" 
                                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300 relative group"
                            >
                                About
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        </div>

                        {/* Right side actions */}
                        <div className="flex items-center space-x-6">
                            {/* Cart */}
                            {isLoggedIn && (
                                <Link to={'/cart'} className="relative group">
                                    <div className="relative p-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full group-hover:from-orange-200 group-hover:to-amber-200 transition-all duration-300">
                                        <img 
                                            src={CartIcon} 
                                            className='w-6 h-6 text-orange-600' 
                                        />
                                        {cartsData?.items?.length > 0 && (
                                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                                                {cartsData.items.length}
                                            </span>
                                        )}
                                    </div>
                                </Link>
                            )}

                            {/* User Profile */}
                            <div className="relative user-modal">
                                {isLoggedIn ? (
                                    <div>
                                        <button 
                                            onClick={() => setShowUserModal(!showUserModal)}
                                            className="flex items-center space-x-2 p-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full hover:from-orange-200 hover:to-amber-200 transition-all duration-300 group"
                                        >
                                            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-semibold text-sm group-hover:scale-110 transition-transform duration-300">
                                                {(userData?.name || userData?.fullName || userData?.username || userData?.firstName || 'U').charAt(0).toUpperCase()}
                                            </div>
                                            <svg className={`w-4 h-4 text-gray-600 group-hover:text-orange-600 transition-all duration-300 ${showUserModal ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </button>

                                        {/* User Modal */}
                                        {showUserModal && (
                                            <div className="absolute right-0 mt-2 w-64 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-orange-100 overflow-hidden animate-fade-in-down">
                                                {/* User Info */}
                                                <div className="p-4 border-b border-orange-100">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                                                            {(userData?.name || userData?.fullName || userData?.username || userData?.firstName || 'U').charAt(0).toUpperCase()}
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-gray-900">
                                                                {userData?.name || userData?.fullName || userData?.username || userData?.firstName || 'User'}
                                                            </p>
                                                            <p className="text-sm text-gray-600">
                                                                {userData?.email || userData?.emailId || 'user@example.com'}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Menu Items */}
                                                <div className="py-2">
                                                    <Link
                                                        to="/orders"
                                                        onClick={() => setShowUserModal(false)}
                                                        className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-orange-50 transition-colors duration-200"
                                                    >
                                                        <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                                        </svg>
                                                        <span>My Orders</span>
                                                    </Link>
                                                    
                                                    <Link
                                                        to="/cart"
                                                        onClick={() => setShowUserModal(false)}
                                                        className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-orange-50 transition-colors duration-200"
                                                    >
                                                        <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>
                                                        </svg>
                                                        <span>Cart ({cartsData?.items?.length || 0})</span>
                                                    </Link>

                                                    <button
                                                        onClick={handleLogout}
                                                        className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors duration-200"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                                        </svg>
                                                        <span>Logout</span>
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link 
                                        to={'/auth/login'}
                                        className="px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                    >
                                        Sign In
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="relative">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>  
    )
}

export default Layout;