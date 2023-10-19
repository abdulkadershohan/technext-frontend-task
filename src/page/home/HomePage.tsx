import { home } from "src/demo-data/home"
export default function HomePage() {

    return (
        <div>
            <h1
                className="text-danger text-2xl font-bold"
            >
                {home.title}
            </h1>
        </div>
    )
}
