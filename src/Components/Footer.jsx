function Footer() {
        return (
              <footer className="relative mt-20">
                {/* Background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 via-amber-100/30 to-orange-50/50"></div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 left-1/4 w-32 h-32 bg-orange-300/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-amber-300/10 rounded-full blur-2xl"></div>
                
                <div className="relative bg-gradient-to-br from-orange-50/80 to-amber-50/80 backdrop-blur-sm border-t border-orange-200/50">
                  <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                      {/* Copyright */}
                      <div className="flex flex-col items-center md:items-start space-y-2">
                        <p className="text-gray-600 font-medium">
                          &copy; 2025 Pizzario
                        </p>
                        <p className="text-sm text-gray-500">
                          Crafting delicious moments, one slice at a time
                        </p>
                      </div>
                      
                      {/* Social Links */}
                      <div className="flex items-center space-x-4">
                        <a className="group p-3 bg-white/50 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-orange-100 hover:border-orange-200">
                          <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5 text-orange-600 group-hover:text-orange-700 transition-colors duration-300"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a className="group p-3 bg-white/50 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-orange-100 hover:border-orange-200">
                          <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5 text-orange-600 group-hover:text-orange-700 transition-colors duration-300"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a className="group p-3 bg-white/50 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-orange-100 hover:border-orange-200">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5 text-orange-600 group-hover:text-orange-700 transition-colors duration-300"
                            viewBox="0 0 24 24"
                          >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                          </svg>
                        </a>
                        <a className="group p-3 bg-white/50 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-orange-100 hover:border-orange-200">
                          <svg
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="0"
                            className="w-5 h-5 text-orange-600 group-hover:text-orange-700 transition-colors duration-300"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="none"
                              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                            ></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                          </svg>
                        </a>
                      </div>
                    </div>
                    
                    {/* Additional info */}
                    <div className="mt-8 pt-8 border-t border-orange-200/50 text-center">
                      <p className="text-sm text-gray-500">
                        Made with ❤️ for pizza lovers everywhere
                      </p>
                    </div>
                  </div>
                </div>
              </footer>
    );
}

export default Footer;