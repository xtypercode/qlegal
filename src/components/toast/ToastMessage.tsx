import { Toast } from "flowbite-react";
import React from "react";
import { IoCloseOutline, IoCheckmarkCircleOutline } from "react-icons/io5";

interface ToastMessageProps {
    message: string;
    onClose: () => void;
}

const ToastMessage: React.FC<ToastMessageProps> = ({ message, onClose }) => {
    return (
        <div className="fixed bottom-4 right-4 z-50">
            <Toast className="gap-2 bg-green-400 text-white">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
                    <IoCheckmarkCircleOutline />
                </div>
                <div className="text-sm font-normal">{message}</div>
                <button
                    className="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
                    onClick={onClose}
                    aria-label="Close"
                >
                    <IoCloseOutline />
                </button>
            </Toast>
        </div>
    );
};

export default ToastMessage;
