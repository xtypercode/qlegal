import { Event } from "../models/Event";

// Ensure that event datetime values represent future events
export const events: Event[] = [
    {
        id: 1,
        title: "Webex Video Call Demo",
        locationOrLink: "https://mycompany.webex.com/meet/john.doe",
        startDatetime: "2024-03-02T16:19:00Z", // Check this datetime
        endDatetime: "2024-03-02T17:19:20Z",
        duration: "60",
        timezone: "UTC",
        notification: "Email",
        description:
            "This is a demonstration of using the Webex API for video calls in a React project.",
    },
    {
        id: 2,
        title: "Webex Video Call Demo 2",
        locationOrLink: "https://mycompany.webex.com/meet/john.doe",
        startDatetime: "2024-03-05T16:19:00Z", // Check this datetime
        endDatetime: "2024-03-05T17:19:20Z",
        duration: "60",
        timezone: "UTC",
        notification: "Email",
        description:
            "This is a demonstration of using the Webex API for video calls in a React project.",
    },
];

