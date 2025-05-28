export interface Employee {
    id: number;
    name: string;
    is_contractor: boolean;
    active: boolean;
}

export interface PerformanceMetric {
    id: number;
    employee_id: number;
    pick_rate: number;  // počet vychystání za hodinu
    pack_rate: number;  // počet zabalení za hodinu
    date: string;
}

export interface Shift {
    day_of_week: number;
    hours: number;
}
