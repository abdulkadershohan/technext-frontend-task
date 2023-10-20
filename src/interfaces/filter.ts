export interface ISelectStatus {
    id: number;
    name: string;
    value: string;
}

export interface ISelectDate {
    id: number;
    name: string;
    value: string;
}
export interface FilterSearchContextType {
    search?: string;
    setSearch?: (search: string) => void;
    isUpcoming?: boolean;
    setIsUpcoming?: (isUpcoming: boolean) => void;
    filterByStatus?: string;
    setFilterByStatus?: (filterByStatus: string) => void;
    filterByDate?: string;
    setFilterByDate?: (filterByDate: string) => void;

}