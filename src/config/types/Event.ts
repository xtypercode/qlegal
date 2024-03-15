export interface Event {
    id: number;
    title: string;
    locationOrLink: string;
    startDatetime: string;
    endDatetime: string;
    duration: string;
    description: string;
    timezone?: string;
    notification?: string;
}
