"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Searchsection = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();

    const handleSearchSubmit = (e) => {
        e.preventDefault(); 

        if (searchTerm.trim() === "") {
            console.log("Please enter a search term");
            return;
        } 

        console.log("Searching for:", searchTerm);
        
        if (onSearch) {
            onSearch(searchTerm);
        } else {
            // Global fallback: redirects to discover page with search query
            router.push(`/discover?search=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <div className="w-full relative">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                
                <input 
                    type="text" 
                    value={searchTerm}
                    placeholder="Search for products or stores..." 
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-[#1E2939] rounded-2xl py-4 pl-14 pr-36 w-full focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                />

               
                <button 
                    type="submit"
                    className="absolute right-2 bg-[#13244A] hover:bg-[#2C65C7] text-white px-6 py-2.5 rounded-xl font-semibold  cursor-pointer flex items-center gap-2"
                >
                    
                    Search
                </button>
            </form>
        </div>
    );
};

export default Searchsection;