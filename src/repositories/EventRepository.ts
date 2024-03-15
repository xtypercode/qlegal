import { Event } from "../config/types/Event";
import { events } from "../data/events";

export class EventRepository {
	getEvents(): Promise<Event[]> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(events);
			}, 500);
		});
	}

	addEvent(event: Event): Promise<void> {
		return new Promise((resolve) => {
			setTimeout(() => {
				events.push(event);
				console.log(events);

				resolve();
			}, 500);
		});
	}

	updateEvent(event: Event): Promise<void> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const index = events.findIndex((e) => e.id === event.id);
				if (index !== -1) {
					events[index] = event;
					resolve();
				} else {
					reject(new Error("Event not found"));
				}
			}, 500);
		});
	}

	deleteEvent(eventId: number): Promise<void> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const index = events.findIndex((e) => e.id === eventId);
				if (index !== -1) {
					events.splice(index, 1);
					resolve();
				} else {
					reject(new Error("Event not found"));
				}
			}, 500);
		});
	}
}
