import image from '../../assets/svg/Property1.svg'
export default function Card() {
    const data = {
        id: 1,
        image: image,
        date: '25 March 2021',
        title: 'Property 1',
        text: 'Falcon 1',
        status: 'failed',
    }
    return (
        <div
            className='flex items-center justify-center border-solid border-[1px] border-[#f00] '
        >
            <img src={data.image} alt="img"
                className='h-96 w-96 object-cover'
            />
            <p>{data.date}</p>
            <h1>{data.title}</h1>
            <p>Launch Status:</p>
            <p>{data.status}</p>
        </div>
    )
}
