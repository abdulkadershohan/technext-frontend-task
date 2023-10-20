import React from "react"
import { filterSearchContext } from "src/context/filterSearchContext"
export default function SearchInput() {
    const [searchText, setSearchText] = React.useState('')
    const { setSearch } = React.useContext(filterSearchContext) as any
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch(searchText)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div className="relative mb-4 flex w-full ">
                    <input
                        //type="search"
                        className="relative m-0 -mr-0.5 block  rounded-l border border-solid border-gray-400 bg-transparent 
                     px-3 py-[0.25rem] text-base font-normal leading-[1.6] 
                      focus:outline-none  focus:border-primary
                      w-full 
                      "
                        placeholder="Search..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="relative z-[2] flex items-center rounded-r bg-primary px-3 py-2.5 text-white  hover:shadow-lg "
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_536_464)">
                                <rect width="16" height="16" fill="white" fillOpacity="0.01" />
                                <g clipPath="url(#clip1_536_464)">
                                    <path d="M11.7417 10.3431C12.71 9.02181 13.1437 7.38361 12.956 5.75627C12.7683 4.12893 11.9731 2.63246 10.7294 1.56625C9.48579 0.500045 7.88543 -0.0572725 6.24851 0.00580065C4.6116 0.0688738 3.05886 0.747686 1.90095 1.90643C0.743029 3.06518 0.0653277 4.6184 0.00342583 6.25536C-0.058476 7.89231 0.499986 9.49228 1.56708 10.7352C2.63418 11.9781 4.13122 12.7722 5.7587 12.9587C7.38617 13.1452 9.02406 12.7104 10.3447 11.7411H10.3437C10.3737 11.7811 10.4057 11.8191 10.4417 11.8561L14.2917 15.7061C14.4792 15.8938 14.7336 15.9992 14.9988 15.9993C15.2641 15.9994 15.5185 15.8941 15.7062 15.7066C15.8938 15.5191 15.9993 15.2647 15.9994 14.9995C15.9995 14.7342 15.8942 14.4798 15.7067 14.2921L11.8567 10.4421C11.8209 10.4059 11.7825 10.3725 11.7417 10.3421V10.3431ZM11.9997 6.49912C11.9997 7.22139 11.8574 7.93659 11.581 8.60388C11.3046 9.27117 10.8995 9.87749 10.3888 10.3882C9.87804 10.8989 9.27173 11.3041 8.60444 11.5805C7.93715 11.8569 7.22195 11.9991 6.49968 11.9991C5.77741 11.9991 5.06221 11.8569 4.39492 11.5805C3.72763 11.3041 3.12131 10.8989 2.61059 10.3882C2.09987 9.87749 1.69474 9.27117 1.41834 8.60388C1.14194 7.93659 0.999677 7.22139 0.999677 6.49912C0.999677 5.04043 1.57914 3.64149 2.61059 2.61004C3.64204 1.57859 5.04099 0.999124 6.49968 0.999124C7.95837 0.999124 9.35731 1.57859 10.3888 2.61004C11.4202 3.64149 11.9997 5.04043 11.9997 6.49912Z" fill="white" />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_536_464">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                                <clipPath id="clip1_536_464">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </button>
                </div>
            </form>

        </div>
    )
}
