"use client";
import React, { ChangeEvent, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(searchParams.get("search") || "");

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);

    const params = new URLSearchParams(searchParams.toString());
    if (newValue) {
      params.set("search", newValue);
    } else {
      params.delete("search");
    }
  };
  return (
    <div>
      <input
        type={"search"}
        name={"search"}
        value={value}
        placeholder="Search products"
        className=" bg-mist-300 rounded-lg p-1 text-black"
        onChange={searchHandler}
      />
      <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
        <svg></svg>
      </button>
    </div>
  );
};

export default Search;

/* couldnt figure out how to achieve the what i had in mind for the search bar. 
import Search from "@/components/SearchBar"; insert this into the header component 

and then add <Search /> in the nav bar below all the Links. */
