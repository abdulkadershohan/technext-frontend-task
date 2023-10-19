import { useState } from "react";
import { Select } from "../../components";

export default function HomePage() {
    const [checked, setChecked] = useState(false)
    console.log('checked', checked)
    return (
        <div
            className='flex items-center justify-center h-screen '
        >
            {/* <Card /> */}
            {/* <SearchInput /> */}
            <Select />
        </div>
    )
}
