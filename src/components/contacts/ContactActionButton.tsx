import React from "react";
import { Button } from "flowbite-react";

const ContactActionButton: React.FC = () => {
    return (
        <div className="ml-auto flex items-center space-x-2 sm:space-x-3">
            <Button
                data-modal-target="add-user-modal"
                data-modal-toggle="add-user-modal"
            >
                Novo Contacto
            </Button>

            <Button
                href="#"
                className="focus:ring-primary-300 inline-flex  items-center justify-center border border-gray-300 bg-white text-sm font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 sm:w-auto"
            >
                <svg
                    className="-ml-1 mr-2 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                        clipRule="evenodd"
                    ></path>
                </svg>
                Exportar
            </Button>
        </div>
    );
};

export default ContactActionButton;
