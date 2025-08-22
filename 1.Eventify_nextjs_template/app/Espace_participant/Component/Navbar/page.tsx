import Link from 'next/link'


export default function Navbar({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch }: any) {
    return (
        <>
            <header>
                <div className={`header-area homepage1 header header-sticky d-none d-lg-block ${scroll ? 'sticky' : ''}`} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/"><img src="/assets/img/logo/logo1.png" alt="" /></Link>
                                    </div>
                                    <div className="main-menu">
                                        <ul>
                                            
                                            <li><Link href="/about">Accueil</Link></li>
                                            <li>
                                                <Link href="/speakers">Intervenant </Link>
                                                
                                            </li>
                                            <li>
                                                <Link href="/#">Horaires <i className="fa-solid fa-angle-down" /></Link>
                                                <ul className="dropdown-padding">
                                                    <li><Link href="/event">Liste des Activités</Link></li>
                                                    <li><Link href="/event-schedule">Horaire</Link></li>
                                                    <li><Link href="/event-single">Détail de l'événement</Link></li>
                                                </ul>
                                            </li>
                                            
                                            <li>
                                                <Link href="/#">Pages <i className="fa-solid fa-angle-down" /></Link>
                                                <ul className="dropdown-padding">
                                                    {/*<li><Link href="/memories">Souvenir récents</Link></li>*/}
                                                    <li><Link href="/pricing-plan">Plan Tarifaire</Link></li>
                                                    <li><Link href="/faq">FAQ,s</Link></li>
                                                    <li><Link href="/contact">Nous Contactez</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="btn-area">
                                        
                                        <ul>
                                            <li>
                                                <Link href="/#"><i className="fa-brands fa-facebook-f" /></Link>
                                            </li>
                                            <li>
                                                <Link href="/#"><i className="fa-brands fa-instagram" /></Link>
                                            </li>
                                            <li>
                                                <Link href="/#"><i className="fa-brands fa-linkedin-in" /></Link>
                                            </li>
                                            <li>
                                                <Link href="/#" className="m-0"><i className="fa-brands fa-pinterest-p" /></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    {isSearch && <div className="body-overlay active" onClick={handleSearch} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
