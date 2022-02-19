const Topbar = () => {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <a href="#" className="flex items-center py-4 px-2">
                                <img src="/Assets/Images/Button-Play-icon.png" alt="Logo" className="h-8 w-8 mr-2" />
                                <span className="font-semibold text-gray-500 text-lg">
                                    Movie Review
                                </span>
                            </a>
                        </div>
                        <div className="hidden md:flex items-center space-x-1">
                            <a
                                href="/search"
                                className="py-4 px-2 text-blue-500 border-b-4 border-blue-500 font-semibold "
                            >
                            Search
                            </a>
                            <a
                                href="/comparison"
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
                            >
                            Comparison
                            </a>
                            <a
                                href="/trending"
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
                            >
                            Trending
                            </a>
                            <a
                                href="/watched"
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
                            >
                            Watched
                            </a>
                            <a
                                href="/createsession"
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
                            >
                            Create Session
                            </a>
                            <a
                                href="/deletesession"
                                className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
                            >
                            Delete Session
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Topbar
