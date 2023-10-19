import { useState } from "react";
import { Checkbox, SearchInput, Select } from "../../components";
import { filterByDateSelect, selectStatusData } from '../../demo-data/filter';
import { home } from "../../demo-data/home";

export default function Header() {
    const [check, setCheck] = useState(false)
    const [filterByDate, setFilterByDate] = useState('')
    const [filterByStatus, setFilterByStatus] = useState('')
    return (
        <section
            className="container mx-auto px-4 py-8"
        >
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
            <div
                className=" md:hidden pt-16"
            >
                <SearchInput />
            </div>
            {/* check box  */}
            <div
                // to right end
                className="flex md:justify-end my-8"
            >
                <Checkbox
                    checked={check}
                    onChange={() => setCheck(!check)}
                    label="Show upcoming only"
                />

            </div>
            {/* search bar */}
            <div
                className="flex flex-col md:flex-row  justify-between "
            >
                <div
                    className="hidden md:block"
                >
                    <SearchInput />
                </div>
                <div
                    className="flex flex-col md:flex-row gap-4 "

                >
                    <div>
                        <Select
                            data={selectStatusData}

                            placeholder="By Launch Status"
                            value={filterByStatus}
                            onChange={(e: any) => setFilterByStatus(e.target.value)}


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
