import { ISelectDate, ISelectStatus } from "src/interfaces/filter";

export const filterByDateSelect: ISelectDate[] = [
    {
        id: 1,
        name: 'Last week',
        value: 'lastWeek'
    },
    {
        id: 2,
        name: 'Last month',
        value: 'lastMonth'
    },
    {
        id: 3,
        name: 'Last year',
        value: 'lastYear'
    }
]

export const selectStatusData: ISelectStatus[] = [
    {
        id: 1,
        name: 'Failure',
        value: 'failure'
    },
    {
        id: 2,
        name: 'Success',
        value: 'success'
    }
]