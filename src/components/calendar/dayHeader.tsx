export function DayHeader({ day }: { day: string }) {
	return (
		<div className="h-6 text-center text-sm font-semibold leading-6 text-gray-500 dark:text-gray-400">
			{day}
		</div>
	);
}
