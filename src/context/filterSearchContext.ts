import { createContext } from "react";

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

export const filterSearchContext = createContext<FilterSearchContextType>({});