"use client"
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Contact() {

	// Fonction pour défiler vers RegistrationForm
	const scrollToRegistration: () => void = () => {
		const el = document.getElementById('RegistrationForm');
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
		}
	}

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<div className="inner-page-header" style={{ backgroundImage: 'url(assets/img/bg/header-bg12.png)' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-6 m-auto">
									<div className="heading1 text-center">
										<h1>Connecter vous</h1>
										<div className="space20" />
										<Link href="/">Accueil <i className="fa-solid fa-angle-right" /> <span>Connexion</span></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA ENDS =======*/}
					{/*===== CONTACT AREA STARTS =======*/}
					<div className="contact-inner-section sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-6">
									<div className="img1 image-anime">
										<img src="/assets/img/all-images/contact/contact-img4.png" alt="" />
									</div>
								</div>
								<div className="col-lg-6" data-aos="zoom-in" data-aos-duration={1000}>
									<div className="contact4-boxarea">
										<h3 className="text-anime-style-3">Connectez Vous Maintenant</h3>
										<div className="space9" />
										<div className="row">
											<div className="col-lg-12 col-md-6">
												<div className="input-area">
													<input type="text" placeholder="Nom" />
												</div>
											</div>
											
											<div className="col-lg-12 col-md-6">
												<div className="input-area">
													<input type="text" placeholder="Prénom" />
												</div>
											</div>
											<div className="col-lg-12 col-md-6">
												<div className="input-area">
													<input type="text" placeholder="Code d'accès" />
												</div>
											</div>
											
											<div className="col-lg-12">
												<div className="space24" />
												<div className="input-area text-end">
													<button type="submit" className="vl-btn1">Connexion</button>
												</div>
											</div>

											<div className='col-lg-12 mt-3 text-center heading2'>
                      						  <p>
                      						  	Vous n'avez encore de code d'accès ? <br />
                      						  	<Link href="/">Allez S'inscrire</Link>
                      						  </p>
                      						</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== CONTACT AREA ENDS =======*/}
					{/*===== CONTACT AREA STARTS =======*/}
					{/*
					<div className="contact2-bg-section">
						<div className="img1">
							<img src="/assets/img/all-images/contact/contact-img1.png" alt="" className="contact-img1" />
						</div>
						<div className="container">
							<div className="row">
								<div className="col-lg-6">
									<div className="space48" />
									<div className="row">
										<div className="col-lg-6 col-md-6">
											<div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={900}>
												<div className="icons">
													<img src="/assets/img/icons/mail1.svg" alt="" />
												</div>
												<div className="text">
													<h5>Notre Email</h5>
													<div className="space14" />
													<Link href="/maito:eventify@gmail.com">infos@quorumenligne.com</Link>
												</div>
											</div>
											<div className="space18" />
											<div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={1000}>
												<div className="icons">
													<img src="/assets/img/icons/location1.svg" alt="" />
												</div>
												<div className="text">
													<h5>Notre Localisation</h5>
													<div className="space14" />
													<Link href="/#">Pharmacie Spring</Link>
												</div>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="space20 d-md-none d-block" />
											<div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={1000}>
												<div className="icons">
													<img src="/assets/img/icons/phn1.svg" alt="" />
												</div>
												<div className="text">
													<h5>Call/Message</h5>
													<div className="space14" />
													<Link href="/tel:+2250141950352">+225 01 41 95 03 52</Link>
												</div>
											</div>
											<div className="space18" />
											<div className="contact-boxarea" data-aos="zoom-in" data-aos-duration={1200}>
												<div className="icons">
													<img src="/assets/img/icons/instagram.svg" alt="" />
												</div>
												<div className="text">
													<h5>Instagram</h5>
													<div className="space14" />
													<Link href="/#">eneventify.eve</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="mapouter">
							<div className="gmap_canvas">
								<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4506257.120552435!2d88.67021924228865!3d21.954385721237916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1704088968016!5m2!1sen!2sbd" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
							</div>
						</div>
					</div>*/}
					
					
					{/*===== CONTACT AREA ENDS =======*/}
					
					
				</div>

			</Layout>
		</>
	)
}