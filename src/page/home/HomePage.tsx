import { useState } from "react";
import { Checkbox } from "../../components";

export default function HomePage() {
    const [checked, setChecked] = useState(false)
    console.log('checked', checked)
    return (
        <div
            className='flex items-center justify-center h-screen '
        >
            {/* <Card /> */}
            {/* <SearchInput /> */}
            <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
            />
        </div>
    )
}
