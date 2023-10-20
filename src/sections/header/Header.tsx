import React, { useState } from "react";
import { Checkbox, SearchInput, Select } from "src/components";
import { filterSearchContext } from "src/context/filterSearchContext";
import { filterByDateSelect, selectStatusData } from 'src/demo-data/filter';
import { home } from "src/demo-data/home";

export default function Header() {
    const { check, setCheck, setFilterByStatus, filterByStatus } = React.useContext(filterSearchContext) as any
    const [status, setStatus] = useState('')
    const [filterByDate, setFilterByDate] = useState('')
    React.useEffect(() => {
        if (status === 'success') {
            setFilterByStatus(true)
        }
        else if (status === 'failure') {
            setFilterByStatus(false)
        }
        else {
            setFilterByStatus('')
        }
    }, [status, setFilterByStatus])
    return (
        <section className="container mx-auto px-4 py-8">
            {/* top sec  */}
            <div
                className="md:flex flex-col gap-2 justify-center items-center "
            >
                <h1
                    className="text-4xl font-medium  leading-[48px]"
                >
                    {home.title}
                </h1>
                <p
                    className="text-base  leading-[24px]"
                >
                    {home.text}
                </p>
            </div>
            <div className=" md:hidden pt-16">
                <SearchInput />
            </div>
            {/* check box  */}
            <div className="flex md:justify-end my-8">
                <Checkbox
                    checked={check}
                    onChange={() => setCheck(!check)}
                    label="Show upcoming only"
                />
            </div>
            {/* search bar */}
            <div className="flex flex-col md:flex-row justify-between ">
                <div className="hidden md:block">
                    <SearchInput />
                </div>
                <div className="flex flex-col md:flex-row gap-4 ">
                    <div>
                        <Select
                            data={selectStatusData}
                            placeholder="By Launch Status"
                            value={status}
                            onChange={(e: any) => setStatus(e.target.value)}
                        />
                    </div>
                    <div>
                        <Select
                            data={filterByDateSelect}
                            placeholder="By Launch Date"
                            value={filterByDate}
                            onChange={(e: any) => setFilterByDate(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
