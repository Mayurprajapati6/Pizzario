import Layout from "../../Layouts/Layout";
import Food from '../../assets/Images/food.svg';

function AddProduct() {
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
                            Add New Product
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Create a new delicious product for your customers to enjoy
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Illustration */}
                        <div className="animate-fade-in-left">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-3xl blur-2xl"></div>
                                <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-orange-100">
                                    <img src={Food} alt="Add Product" className="w-full h-auto" />
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="animate-fade-in-right">
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-orange-100 p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                                    Product Information
                                </h2>

                                <form className="space-y-6">
                                    {/* Product Name */}
                                    <div className="space-y-2">
                                        <label 
                                            htmlFor="productName" 
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Product Name <span className="text-red-500">*</span>
                                        </label>
                                        <input 
                                            type="text" 
                                            required
                                            minLength={5}
                                            maxLength={20}
                                            name="productName" 
                                            id="productName" 
                                            placeholder="Enter product name"
                                            className="w-full px-4 py-3 text-gray-700 bg-white/50 backdrop-blur-sm border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                                        />
                                    </div>

                                    {/* Description */}
                                    <div className="space-y-2">
                                        <label 
                                            htmlFor="description" 
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Description <span className="text-red-500">*</span>
                                        </label>
                                        <textarea 
                                            required
                                            minLength={5}
                                            maxLength={60}
                                            name="description" 
                                            id="description" 
                                            rows="3"
                                            placeholder="Enter product description"
                                            className="w-full px-4 py-3 text-gray-700 bg-white/50 backdrop-blur-sm border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 placeholder-gray-400 resize-none"
                                        />
                                    </div>

                                    {/* Price and Quantity Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Price */}
                                        <div className="space-y-2">
                                            <label 
                                                htmlFor="price" 
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Price (₹) <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <input 
                                                    type="number" 
                                                    required
                                                    name="price" 
                                                    id="price" 
                                                    placeholder="0.00"
                                                    className="w-full px-4 py-3 text-gray-700 bg-white/50 backdrop-blur-sm border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                                                />
                                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                    <span className="text-gray-400">₹</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Quantity */}
                                        <div className="space-y-2">
                                            <label 
                                                htmlFor="quantity" 
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Quantity <span className="text-red-500">*</span>
                                            </label>
                                            <input 
                                                type="number" 
                                                required
                                                name="quantity" 
                                                id="quantity" 
                                                placeholder="0"
                                                className="w-full px-4 py-3 text-gray-700 bg-white/50 backdrop-blur-sm border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                                            />
                                        </div>
                                    </div>

                                    {/* Category */}
                                    <div className="space-y-2">
                                        <label 
                                            htmlFor="category" 
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Category <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <select 
                                                name="category" 
                                                id="category" 
                                                className="w-full px-4 py-3 text-gray-700 bg-white/50 backdrop-blur-sm border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 appearance-none"
                                            >
                                                <option value="veg">🍕 Vegetarian</option>
                                                <option value="non-veg">🥩 Non-Vegetarian</option>
                                                <option value="drinks">🥤 Soft Drinks</option>
                                                <option value="sides">🍟 Sides</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Upload */}
                                    <div className="space-y-2">
                                        <label 
                                            htmlFor="productImage" 
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Product Image <span className="text-orange-600">(.jpg, .png, .jpeg)</span>
                                        </label>
                                        <div className="relative">
                                            <input 
                                                type="file" 
                                                required
                                                name="productImage" 
                                                id="productImage" 
                                                accept=".jpg, .jpeg, .png"
                                                className="w-full px-4 py-3 text-gray-700 bg-white/50 backdrop-blur-sm border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                                            />
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                    >
                                        <span className="flex items-center justify-center space-x-2">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                            </svg>
                                            <span>Add Product</span>
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AddProduct;