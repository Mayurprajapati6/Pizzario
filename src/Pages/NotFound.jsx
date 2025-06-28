import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 flex items-center justify-center py-12">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-200/5 to-amber-200/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-2xl mx-auto px-6 text-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-orange-100 p-12 animate-scale-in">
                    {/* Error Icon */}
                    <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"></path>
                        </svg>
                    </div>

                    {/* Error Code */}
                    <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4 animate-fade-in">
                        404
                    </h1>

                    {/* Error Message */}
                    <div className="space-y-6 animate-fade-in-up delay-200">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Page Not Found
                        </h2>
                        
                        <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto">
                            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
                            <button
                                onClick={() => navigate(-1)}
                                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                Go Back
                            </button>
                            <button
                                onClick={() => navigate('/')}
                                className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-orange-200 hover:border-orange-300"
                            >
                                Go Home
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;