import React, { useState, useEffect } from "react";
import {
	Sidebar,
	SidebarItem,
	SidebarItemGroup,
	SidebarItems,
} from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import {
	IoHomeOutline,
	IoChatbubblesOutline,
	IoCalendarOutline,
	IoSettingsOutline,
	IoGridOutline,
	IoPeopleOutline,
	IoChevronBackOutline,
	IoChevronForwardOutline,
} from "react-icons/io5";
import { useLocation } from "react-router-dom";

interface SidebarLayoutProps {
	children: React.ReactNode;
}

const customTheme: CustomFlowbiteTheme["sidebar"] = {
	root: {
		base: "h-full relative justify-center",
		inner: "md:w-80 h-full overflow-y-auto overflow-x-hidden rounded bg-secondary-700 py-4 px-3 dark:bg-gray-800",
	},
	item: {
		base: "w-full flex items-center justify-center rounded-lg p-2 text-base font-normal text-white hover:bg-secondary-500 hover:text-white dark:text-white dark:hover:bg-gray-700",
		active: "bg-primary-600 hover:bg-primary-700 text-white dark:bg-gray-700",
		collapsed: {
			insideCollapse: "group w-full pl-8 transition duration-75",
			noIcon: "font-bold",
		},
		icon: {
			base: "h-6 w-6 flex-shrink-0 transition duration-75 group-hover:text-white dark:text-gray-400 dark:group-hover:text-white",
			active: "dark:text-gray-100",
		},
	},
};

const sidebarItems = [
	{ href: "/dashboard", icon: IoHomeOutline, label: "Inicio" },
	{ href: "/dashboard/projects", icon: IoGridOutline, label: "Projetos" },
	{
		href: "/dashboard/calendar",
		icon: IoCalendarOutline,
		label: "Calendario",
	},
	{ href: "/dashboard/chat", icon: IoChatbubblesOutline, label: "Chat" },
	{ href: "/dashboard/contacts", icon: IoPeopleOutline, label: "Contactos" },
	{
		href: "/dashboard/settings",
		icon: IoSettingsOutline,
		label: "Definições",
	},
];

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [collapsed, setCollapsed] = useState<boolean>(false);
	const [activePage, setActivePage] = useState<number>(0);
	const location = useLocation();

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const toggleCollapse = () => {
		setCollapsed(!collapsed);
	};

	const handlePageChange = (index: number) => {
		setActivePage(index);
	};

	useEffect(() => {
		if (location.pathname === "/dashboard") {
			setActivePage(0);
		} else if (location.pathname === "/dashboard/calendar") {
			setActivePage(2);
		} else if (location.pathname === "/dashboard/contacts") {
			setActivePage(4);
		}
	}, [location.pathname]);

	return (
		<div className="flex h-full gap-1 md:gap-6">
			<Sidebar
				aria-label="sidebar"
				className="md:w-80 h-svh"
				theme={customTheme}
				collapsed={isMobile || collapsed}
			>
				<button
					onClick={toggleCollapse}
					className="absolute -right-4 top-3 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 border-primary bg-white"
				>
					{collapsed ? (
						<IoChevronForwardOutline />
					) : (
						<IoChevronBackOutline />
					)}
				</button>
				<SidebarItems>
					<SidebarItemGroup>
						{sidebarItems.map((item, index) => (
							<SidebarItem
								key={index}
								href={item.href}
								icon={item.icon}
								active={index === activePage}
								onClick={() => handlePageChange(index)}
							>
								{item.label}
							</SidebarItem>
						))}
					</SidebarItemGroup>
				</SidebarItems>
			</Sidebar>
			{children}
		</div>
	);
};

export default SidebarLayout;
