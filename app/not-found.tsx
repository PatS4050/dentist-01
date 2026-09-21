import Header from "@/components/Header";
import Link from 'next/link';


export default function NotFound() {
    return (
        <main className="page-container">
            <div>
                <Header icon="/logo.svg" title="Tandartspraktijk de Tandenborstel"/>
                <section className="hero">
                    <div className="hero-content">
                        <h2>Ooops de pagina is zoek, the page is not found</h2>
                        <Link href="/">Terug naar de homepagina</Link>
                    </div>
                </section>
            </div>
        </main>
    )};