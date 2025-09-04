'use client'
import CountUp from 'react-countup'
import Slider from "react-slick"
import '../../../public/assets/css/EventVariables.css';

const settings = {
	autoplay: true,
	autoplaySpeed: 2500,
	speed: 1500,
	slidesToShow: 1,
	slidesToScroll: 1,
	pauseOnHover: false,
	dots: false,
	arrows: false,
	pauseOnDotsHover: true,
	cssEase: 'linear',
	fade: true,
	draggable: true,
	// prevA,
	// nextArrow: $(".testimonial-next-arrow"),
}

import Countdown from '@/components/elements/Countdown'
import Link from 'next/link'

export default function Section1() {
	// Fonction pour défiler vers RegistrationForm
	const scrollToRegistration: () => void = () => {
		const el = document.getElementById('RegistrationForm');
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
		}
	}
	return (
		<>

			<Slider {...settings} className="hero2-slider-area">
				<div className="her2-section-area">
					<img src="/assets/img/elements/elements9.png" alt="" className="elements9" />
					<img src="/assets/img/elements/elements10.png" alt="" className="elements10" />
					<img src="/assets/img/elements/elements11.png" alt="" className="elements11" />
					<div className="img1">
						<img src="/assets/img/all-images/hero/hero-img2.png" alt="" />
					</div>
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="hero2-header">
									
									<div className="hero1-header heading1">
										<h5 data-aos="fade-left" data-aos-duration={800}><img src="/assets/img/icons/sara2025.jpeg" alt="" />Le SARA, l'évènement à ne pas rater</h5>
										<div className="space16" />
										<h1 className="text-anime-style-3">
											Thème :
											<br className="d-lg-block d-none" />
											Innover et Réussir en 2025
										</h1>
										<div className="space16" />
										<p data-aos="fade-left" data-aos-duration={900}>
											Cette conférence est bien plus qu’un simple rassemblement : <br className="d-lg-block d-none" />
											c’est un véritable rendez-vous d’inspiration et d’opportunités.
										</p>
										<div className="space32" />
										<div className="btn-area2" data-aos="fade-left" data-aos-duration={1100}>
											<button className="event-btn4 .event-space1" onClick={scrollToRegistration}>S'inscrire</button>
											<Link href="/connexion" className="event-btn1">Se Connecter</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="her2-section-area">
					<img src="/assets/img/elements/elements9.png" alt="" className="elements9" />
					<img src="/assets/img/elements/elements10.png" alt="" className="elements10" />
					<img src="/assets/img/elements/elements11.png" alt="" className="elements11" />
					<div className="img1">
						<img src="/assets/img/all-images/hero/hero-img3.png" alt="" />
					</div>
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="hero2-header">
									
									<div className="hero1-header heading1">
										<h5 data-aos="fade-left" data-aos-duration={800}><img src="/assets/img/icons/sara2025.jpeg" alt="" />Le SARA, l'évènement à ne pas rater</h5>
										<div className="space16" />
										<h1 className="text-anime-style-3">
											Thème :
											<br className="d-lg-block d-none" />
											Innover et Réussir en 2025
										</h1>
										<div className="space16" />
										<p data-aos="fade-left" data-aos-duration={900}>
											Cette conférence est bien plus qu’un simple rassemblement : <br className="d-lg-block d-none" />
											c’est un véritable rendez-vous d’inspiration et d’opportunités.
										</p>
										<div className="space32" />
										<div className="btn-area2" data-aos="fade-left" data-aos-duration={1100}>
											<button className="event-btn4 .event-space1" onClick={scrollToRegistration}>S'inscrire</button>
											<Link href="/connexion" className="event-btn1">Se Connecter</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="her2-section-area">
					<img src="/assets/img/elements/elements9.png" alt="" className="elements9" />
					<img src="/assets/img/elements/elements10.png" alt="" className="elements10" />
					<img src="/assets/img/elements/elements11.png" alt="" className="elements11" />
					<div className="img1">
						<img src="/assets/img/all-images/hero/hero-img4.png" alt="" />
					</div>
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="hero2-header">
									
									<div className="hero1-header heading1">
										<h5 data-aos="fade-left" data-aos-duration={800}><img src="/assets/img/icons/sara2025.jpeg" alt="" />Le SARA, l'évènement à ne pas rater</h5>
										<div className="space16" />
										<h1 className="text-anime-style-3">
											Thème :
											<br className="d-lg-block d-none" />
											Innover et Réussir en 2025
										</h1>
										<div className="space16" />
										<p data-aos="fade-left" data-aos-duration={900}>
											Cette conférence est bien plus qu’un simple rassemblement : <br className="d-lg-block d-none" />
											c’est un véritable rendez-vous d’inspiration et d’opportunités.
										</p>
										<div className="space32" />
										<div className="btn-area2" data-aos="fade-left" data-aos-duration={1100}>
											<button className="event-btn4 .event-space1" onClick={scrollToRegistration}>S'inscrire</button>
											<Link href="/connexion" className="event-btn1">Se Connecter</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Slider>

		</>
	)
}
