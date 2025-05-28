export interface Employee {
    id: number;
    name: string;
    is_contractor: boolean;
    active: boolean;
    pick_rate_mon: number;
    pick_rate_tue: number;
    pick_rate_wed: number;
    pick_rate_thu: number;
    pick_rate_fri: number;
    pack_rate_mon: number;
    pack_rate_tue: number;
    pack_rate_wed: number;
    pack_rate_thu: number;
    pack_rate_fri: number;
}

export interface Shift {
    id: number;
    day_of_week: number;
    hours: number;
}
