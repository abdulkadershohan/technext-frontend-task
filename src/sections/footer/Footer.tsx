import { home } from "src/demo-data/home";

export default function Footer() {
    return (
        <section className="container mx-auto px-4 py-8">
            <p
                className="text-gray-700 font-normal leading-6 text-base text-center"
            >
                {home.footerText}
            </p>
        </section>
    )

}
