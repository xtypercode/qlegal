"use client";
import { TextInput } from "flowbite-react";
import React from "react";

const SearchFormContacts: React.FC = () => {
    return (
        <div className="mb-3 items-center dark:divide-gray-700 sm:mb-0 sm:flex sm:divide-x sm:divide-gray-100">
            <form className="lg:pr-3" action="#" method="GET">
                <div className="relative mt-1 lg:w-64 xl:w-96">
                    <TextInput placeholder="Procurar" />
                </div>
            </form>
        </div>
    );
};

export default SearchFormContacts;
