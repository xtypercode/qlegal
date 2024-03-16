import { Button, Card, CustomFlowbiteTheme } from "flowbite-react";
import { IoCreateOutline } from "react-icons/io5";

interface NotificationCardProps {
	title: string;
	date: string;
}

const customTheme: CustomFlowbiteTheme["card"] = {
	root: {
		children: "flex h-full flex-col justify-center gap-2 py-4 px-2 md:px-4",
	},
};

const NotificationCard: React.FC<NotificationCardProps> = ({ title, date }) => {
	return (
		<Card
			className="h-48 rounded-2xl bg-secondary-700 text-white"
			theme={customTheme}
		>
			<div className="flex gap-3">
				<div className="flex h-12 w-40 items-center justify-center rounded bg-[#546D8D] text-3xl text-white">
					<IoCreateOutline />
				</div>

				<div>
					<h2 className="font-semibold md:text-lg">{title}</h2>
					<p className="mt-1 text-sm text-gray-400">{date}</p>
					<p className="line-clamp-2 overflow-hidden text-ellipsis">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Corrupti amet, placeat explicabo corporis aperiam
						accusamus iure rem at, quaerat inventore consequuntur
						quis, aliquid quod distinctio nulla qui ducimus earum
						sit?
					</p>

					<Button className="mt-2 bg-yellow-300 enabled:hover:bg-yellow-400">
						Ir para evento
					</Button>
				</div>
			</div>
		</Card>
	);
};

export default NotificationCard;
