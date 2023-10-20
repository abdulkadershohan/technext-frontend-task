import CardSection from "src/sections/body/CardSection";
import Header from "src/sections/header/Header";

export default function HomePage() {

    return (
        <div
            className="flex flex-col gap-4"
        >
            <Header />
            <CardSection />
        </div>
    )
}
