import React, { ReactNode } from "react";

interface HeaderProps {
    children: ReactNode;
}

const ContactListHeader: React.FC<HeaderProps> = ({ children }) => {
    return (
        <div className="block items-center justify-between overflow-x-hidden border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex lg:mt-1.5">
            <div className="mb-1 w-full">
                <div className="sm:flex">{children}</div>
            </div>
        </div>
    );
};

export default ContactListHeader;
