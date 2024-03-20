import React from "react";

const ContactTableHeader: React.FC = () => {
    return (
        <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input
                            id="checkbox-all"
                            aria-describedby="checkbox-1"
                            type="checkbox"
                            className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        />
                        <label htmlFor="checkbox-all" className="sr-only">
                            checkbox
                        </label>
                    </div>
                </th>
                <th
                    scope="col"
                    className="p-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
                >
                    Empresa
                </th>
                <th
                    scope="col"
                    className="p-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
                >
                    País
                </th>
                <th
                    scope="col"
                    className="p-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
                >
                    Email
                </th>
                <th
                    scope="col"
                    className="p-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
                >
                    Nome
                </th>
                <th
                    scope="col"
                    className="p-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
                >
                    Departamento
                </th>
                <th
                    scope="col"
                    className="p-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
                >
                    Contacto
                </th>
                <th
                    scope="col"
                    className="p-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
                >
                    Ações
                </th>
            </tr>
        </thead>
    );
};

export default ContactTableHeader;
