import React from "react";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "./search-bar";
import { UserProfile } from "./user-profile";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="overflow-hidden gap-10 relative flex flex-col md:flex-row justify-between items-center rounded-xl md:rounded-full px-4 sm:px-6 lg:px-8 py-3 w-full bg-white">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/22daf4b21d1d4b0a95de48f1bbb2282d/6df09ec20c950a4ba7313cf8d0b4a852a209079609bcb6d457f343fd23248403?placeholderIfAbsent=true"
        alt="Logo"
        className="h-8 w-auto object-contain cursor-pointer"
        onClick={() => navigate('/')}
      />

      <div className="w-full lg:mx-4 min-w-0 flex justify-center">
        <SearchBar />
      </div>

      <div className="flex flex-row items-center gap-2 sm:gap-6 flex-shrink-0">
        <button className="flex items-center justify-center px-3 sm:px-6 py-3 text-sm font-medium text-white bg-[#F08524] rounded-full transition-all duration-200 hover:bg-[#e07616] whitespace-nowrap">
          Start Record
        </button>
        <UserProfile
          user={{
            initials: "LA",
            name: "Lily Aniston",
          }}
        />
      </div>
    </header>
  );
};
