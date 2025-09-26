'use client'
import { useState } from 'react';
import Link from 'next/link'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	const [isAccordion, setIsAccordion] = useState(1)

const handleAccordion = (key: any) => {
    setIsAccordion(prevState => prevState === key ? null : key)
}
	return (
		<>
			<div className="mobile-header mobile-haeder1 d-block d-lg-none">
				<div className="container-fluid">
					<div className="col-12">
						<div className="mobile-header-elements">
							<div className="mobile-logo">
								<Link href="//"><img src="/assets/img/event_img/SARA-2025-LOGO-2.jpg" alt="" /></Link>
							</div>
							<div className="mobile-nav-icon dots-menu" onClick={handleMobileMenu}>
								<i className="fa-solid fa-bars-staggered" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`mobile-sidebar mobile-sidebar1 ${isMobileMenu ? 'mobile-menu-active' : ''}`}>
				<div className="logosicon-area">
					<div className="logos">
						<img src="/assets/img/event_img/SARA-2025-LOGO-2.jpg" alt="" />
					</div>
					<div className="menu-close" onClick={handleMobileMenu}>
						<i className="fa-solid fa-xmark" />
					</div>
				</div>
				<div className="mobile-nav mobile-nav1">
					<ul className="mobile-nav-list nav-list1">
						<li className="has-sub hash-has-sub">
							<Link href="/#" className="hash-nav">Accueil </Link>
							{/* <ul className={`sub-menu ${isAccordion  == 1 ? "open-sub" : ""}`} style={{ display: `${isAccordion  == 1 ? "block" : "none"}` }}>
								<li className="hash-has-sub"><Link href="/" className="hash-nav">Accueil 1</Link></li>
								<li className="hash-has-sub"><Link href="/index2" className="hash-nav">Accueil 2</Link></li>
								<li className="hash-has-sub"><Link href="/index3" className="hash-nav">Accueil 3</Link></li>
								<li className="hash-has-sub"><Link href="/index4" className="hash-nav">Accueil 4</Link></li>
								<li className="hash-has-sub"><Link href="/index5" className="hash-nav">Accueil 5</Link></li>
								<li className="hash-has-sub"><Link href="/index6" className="hash-nav">Accueil 6</Link></li>
								<li className="hash-has-sub"><Link href="/index7" className="hash-nav">Accueil 7</Link></li>
								<li className="hash-has-sub"><Link href="/index8" className="hash-nav">Accueil 8</Link></li>
								<li className="hash-has-sub"><Link href="/index9" className="hash-nav">Accueil 9</Link></li>
								<li className="hash-has-sub"><Link href="/index10" className="hash-nav">Accueil 10</Link></li>
							</ul> */}
						</li>
						<li className="hash-has-sub"><Link href="/a_propos_de_levenement" className="hash-nav">A propos de l'événement</Link></li>
						<li className="hash-has-sub"><Link href="/faq" className="hash-nav">FAQ,s</Link></li>
						{/*<li className="has-sub hash-has-sub"><span className={`submenu-button ${isAccordion  == 2 ? "submenu-opened" : ""}`}onClick={() => handleAccordion (2)}><em /></span>
							<Link href="/features" className="hash-nav">Speakers</Link>
							<ul className={`sub-menu ${isAccordion  == 2 ? "open-sub" : ""}`} style={{ display: `${isAccordion  == 2 ? "block" : "none"}` }}>
								<li className="hash-has-sub"><Link href="/intervenant" className="hash-nav">Intervenants</Link></li>
								<li className="hash-has-sub"><Link href="/speakers-single" className="hash-nav">Détails intervenant</Link></li>
							</ul>
						</li>
						{/* <li className="has-sub hash-has-sub"><span className={`submenu-button ${isAccordion  == 3 ? "submenu-opened" : ""}`}onClick={() => handleAccordion (3)}><em /></span>
							<Link href="/features" className="hash-nav">Schedule</Link>
							<ul className={`sub-menu ${isAccordion  == 3 ? "open-sub" : ""}`} style={{ display: `${isAccordion  == 3 ? "block" : "none"}` }}>
								<li className="hash-has-sub"><Link href="/event" className="hash-nav">Our Event</Link></li>
								<li className="hash-has-sub"><Link href="/event-schedule" className="hash-nav">Event Schedule</Link></li>
								<li className="hash-has-sub"><Link href="/event-single" className="hash-nav">Event Details</Link></li>
							</ul>
						</li> */}
						{/* <li className="has-sub hash-has-sub"><span className={`submenu-button ${isAccordion  == 4 ? "submenu-opened" : ""}`}onClick={() => handleAccordion (4)}><em /></span>
							<Link href="/#" className="hash-nav">Blogs</Link>
							<ul className={`sub-menu ${isAccordion  == 4 ? "open-sub" : ""}`} style={{ display: `${isAccordion  == 4 ? "block" : "none"}` }}>
								<li className="hash-has-sub"><Link href="/blog" className="hash-nav">Blog</Link></li>
								<li className="hash-has-sub"><Link href="/blog-single" className="hash-nav">Details Blog</Link></li>
							</ul>
						</li>
						<li className="has-sub hash-has-sub"><span className={`submenu-button ${isAccordion  == 5 ? "submenu-opened" : ""}`}onClick={() => handleAccordion (5)}><em /></span>
							<Link href="/#" className="hash-nav">Pages</Link>
							<ul className={`sub-menu ${isAccordion  == 5 ? "open-sub" : ""}`} style={{ display: `${isAccordion  == 5 ? "block" : "none"}` }}>
								<li className="hash-has-sub"><Link href="/memories" className="hash-nav">Our Memories</Link></li>
								<li className="hash-has-sub"><Link href="/pricing-plan" className="hash-nav">Pricing Plan</Link></li>
								
								<li className="hash-has-sub"><Link href="/contact" className="hash-nav">Contact Us</Link></li>
							</ul>
						</li>
						<li className="hash-has-sub"><Link href="/contact" className="hash-nav">Contact Us</Link></li>
						 */}
						<li>
							<Link href="http://localhost:8082/auth/jwt/sign-in/?returnTo=%2Fparticipant%2F" className="event-btn4">
								<span className='color-white'>Connexion</span>
							</Link>
						</li>
						<li>
							<Link href="/inscription" className="event-btn1">
								<span>Inscription</span>
							</Link>
						</li>
					</ul>

					
				</div>
			</div>
		</>
	)
}
