import Link from 'next/link'

export default function Navigation() {
    return (
        <nav>
            <div className="navigation-container">
                <h4 className="navigation-company-name">De Tandenborstel</h4>
                {/* Prefetched when the link is hovered or enters the viewport */}
                <ul>
                    <li>
                        <Link href="/" className="navigation-links">Home</Link>
                    </li>
                    <li>
                        <Link href="/gaatjes" className="navigation-links">Gaatjes</Link>
                    </li>
                    <li>
                        <Link href="/bleken" className="navigation-links">Bleken</Link>
                    </li>
                    <li>
                        <Link href="/afspraken" className="navigation-button">Afspraken</Link>
                    </li>
                </ul>
                {/* No prefetching */}
                {/*<a href="/contact">Contact</a>*/}
            </div>

        </nav>
    )
}