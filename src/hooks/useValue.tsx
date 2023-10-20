import { useState } from "react";

export default function useValue() {
    const [check, setCheck] = useState<boolean>(false)
    const [filterByDate, setFilterByDate] = useState('')
    const [filterByStatus, setFilterByStatus] = useState('')
    const [search, setSearch] = useState('')
    const [isUpcoming, setIsUpcoming] = useState<boolean>(false)
    const value = {
        check,
        setCheck,
        filterByDate,
        setFilterByDate,
        filterByStatus,
        setFilterByStatus,
        search,
        setSearch,
        isUpcoming,
        setIsUpcoming
    }
    return value

}
