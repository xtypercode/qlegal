import React from "react";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<>
			<>
				{" "}
				// Header
				<main className="h-full">{children}</main>
			</>{" "}
			// Footer
		</>
	);
};

export default DashboardLayout;
