'use client'
import CountUp from 'react-countup'
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import BrandSlider from '@/components/slider/BrandSlider'
import Link from "next/link"
import RegistrationForm from '@/components/elements/RegistrationForm'
export default function About() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<div className="inner-page-header" style={{ backgroundImage: 'url(assets/img/bg/header-bg5.png)' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-4 m-auto">
									<div className="heading1 text-center">
										<h1>À propos de l'événement</h1>
										<div className="space20" />
										<Link href="/">Accueil <i className="fa-solid fa-angle-right" /> <span>Info sur l'événement</span></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA ENDS =======*/}
					{/*===== ABOUT AREA STARTS =======*/}
					<div className="about1-section-area sp1">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-6">
									<div className="about-imges">
										<div className="img1 reveal image-anime">
											<img src="/assets/img/all-images/about/about-img1.png" alt="" />
										</div>
										<div className="row">
											<div className="col-lg-6 col-md-6">
												<div className="space30" />
												<div className="img1 reveal image-anime">
													<img src="/assets/img/all-images/about/about-img2.png" alt="" />
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="space30" />
												<div className="img1 reveal image-anime">
													<img src="/assets/img/all-images/about/about-img3.png" alt="" />
												</div>
											</div>
										</div>
										<div className="about-btnarea">
											<svg xmlns="http://www.w3.org/2000/svg" width={200} height={200} viewBox="0 0 200 200" fill="none" className="keyframe5">
												<path d="M93.8771 2.53621C96.8982 1.28483 98.4087 0.659138 100 0.659138C101.591 0.659138 103.102 1.28483 106.123 2.5362L164.588 26.7531C167.609 28.0045 169.119 28.6302 170.245 29.7554C171.37 30.8806 171.995 32.3912 173.247 35.4123L197.464 93.8771C198.715 96.8982 199.341 98.4087 199.341 100C199.341 101.591 198.715 103.102 197.464 106.123L173.247 164.588C171.995 167.609 171.37 169.119 170.245 170.245C169.119 171.37 167.609 171.995 164.588 173.247L106.123 197.464C103.102 198.715 101.591 199.341 100 199.341C98.4087 199.341 96.8982 198.715 93.8771 197.464L35.4123 173.247C32.3912 171.995 30.8806 171.37 29.7554 170.245C28.6302 169.119 28.0045 167.609 26.7531 164.588L2.53621 106.123C1.28483 103.102 0.659138 101.591 0.659138 100C0.659138 98.4087 1.28483 96.8982 2.5362 93.8771L26.7531 35.4123C28.0045 32.3912 28.6302 30.8806 29.7554 29.7554C30.8806 28.6302 32.3912 28.0045 35.4123 26.7531L93.8771 2.53621Z" fill="#FFBA00" />
											</svg>
											<Link href="/plan_tarifaire">
												<span><i className="fa-solid fa-arrow-right" /></span>
												<br />
												<div className="space12" />
												Participer
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="about-header-area heading2">
										<h5 data-aos="fade-left" data-aos-duration={800}>à propos de la conférences</h5>
										<div className="space16" />
										<h2 className="text-anime-style-3">Les bénéfices pour les participants</h2>
										<div className="space16" />
										<p data-aos="fade-left" data-aos-duration={900}>Pourquoi devriez-vous être présent ? Parce que cette conférence vous permettra non seulement de découvrir les tendances et innovations qui transforment nos sociétés, mais aussi de rencontrer des personnes influentes et motivées. Vous repartirez avec des idées concrètes, des contacts stratégiques et une énergie nouvelle pour développer vos projets.</p>
										<div className="space32" />
										<div className="about-counter-area">
											<div className="counter-box">
												<h2><CountUp className="odometer" enableScrollSpy={true} end={5} />+</h2>
												<div className="space18" />
												<p>Nos journalistes</p>
											</div>
											<div className="counter-box box2">
												<h2><CountUp className="odometer" enableScrollSpy={true} end={7} />+</h2>
												<div className="space18" />
												<p>Nos intervenants</p>
											</div>
											<div className="counter-box box3" style={{ border: 'none' }}>
												<h2><CountUp className="odometer" enableScrollSpy={true} end={1} />K+</h2>
												<div className="space18" />
												<p>Attendees</p>
											</div>
										</div>
										<div className="space32" />
										<div className="btn-area1" data-aos="fade-left" data-aos-duration={1200}>
											<Link href="/contact" className="vl-btn1">DEVENIR UN PARTICIPANT</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== ABOUT AREA ENDS =======*/}
					{/*===== OTHERS AREA STARTS =======*/}
					<div className="brands3-section-area sp2">
						<div className="container">
							<div className="row">
								<div className="col-lg-5 m-auto">
									<div className="brand-header heading4 space-margin60 text-center">
										<h3>Ils nous font tous confiance</h3>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12" data-aos="zoom-in" data-aos-duration={800}>
									<BrandSlider />
								</div>
							</div>
						</div>
					</div>
					{/*===== OTHERS AREA ENDS =======*/}
					{/*===== OTHERS AREA STARTS =======*/}
					<div className="choose-section-area sp2">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 m-auto">
									<div className="heading2 text-center space-margin60">
										<h5>Pourquoi nous choisir</h5>
										<div className="space18" />
										<h2>Pourquoi participer à l’événement ?</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-4 col-md-6">
									<div className="choose-widget-boxarea">
										<div className="icons">
											<img src="/assets/img/icons/choose-icons1.svg" alt="" />
										</div>
										<div className="space24" />
										<div className="content-area">
											<Link href="#">Accéder à des contenus exclusifs</Link>
											<div className="space16" />
											<p>Des experts partageront des stratégies concrètes, des études de cas réels et des outils pratiques pour réussir dans un monde en constante évolution.</p>
											<div className="space24" />
											
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="choose-widget-boxarea">
										<div className="icons">
											<img src="/assets/img/icons/choose-icons1.svg" alt="" />
										</div>
										<div className="space24" />
										<div className="content-area">
											<Link href="#">Échanger avec des leaders inspirants</Link>
											<div className="space16" />
											<p>Rencontrez des entrepreneurs, des décideurs et des professionnels qui ont déjà franchi les étapes que vous souhaitez atteindre.</p>
											<div className="space24" />
											
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="choose-widget-boxarea">
										<div className="icons">
											<img src="/assets/img/icons/choose-icons1.svg" alt="" />
										</div>
										<div className="space24" />
										<div className="content-area">
											<Link href="#">Élargir votre réseau professionnel</Link>
											<div className="space16" />
											<p>Nouer des contacts stratégiques, trouver de futurs partenaires, collaborateurs ou mentors : la conférence est l’endroit idéal pour développer votre carnet d’adresses.</p>
											<div className="space24" />
											
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="choose-widget-boxarea">
										<div className="icons">
											<img src="/assets/img/icons/choose-icons1.svg" alt="" />
										</div>
										<div className="space24" />
										<div className="content-area">
											<Link href="#">Découvrir les tendances de demain</Link>
											<div className="space16" />
											<p>De l’innovation technologique aux nouvelles approches de gestion, vous repartirez avec une longueur d’avance sur les opportunités de 2025.</p>
											<div className="space24" />
											
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="choose-widget-boxarea">
										<div className="icons">
											<img src="/assets/img/icons/choose-icons1.svg" alt="" />
										</div>
										<div className="space24" />
										<div className="content-area">
											<Link href="#">Booster votre motivation</Link>
											<div className="space16" />
											<p>Les témoignages inspirants et les parcours de réussite vous donneront l’énergie nécessaire pour passer à l’action dans vos propres projets.</p>
											<div className="space24" />
											
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="choose-widget-boxarea">
										<div className="icons">
											<img src="/assets/img/icons/choose-icons1.svg" alt="" />
										</div>
										<div className="space24" />
										<div className="content-area">
											<Link href="#">Profiter d’une expérience unique</Link>
											<div className="space16" />
											<p>Au-delà des conférences, profitez des moments de networking, des ateliers pratiques et de l’ambiance stimulante d’un rassemblement de passionnés.</p>
											<div className="space24" />
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== OTHERS AREA ENDS =======*/}
					
					<RegistrationForm/>
					
				</div>

			</Layout>
		</>
	)
}