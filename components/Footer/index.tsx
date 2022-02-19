import React from 'react'

const Footer = () => {
    return (
        <nav className="bg-slate-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <a href="#" className="flex items-center py-4 px-2">
                                <span className="font-semibold text-gray-500 text-lg">
                                    © 2021 MOVIE APP
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Footer
