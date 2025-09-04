'use client'
import CountUp from 'react-countup'
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import BrandSlider from '@/components/slider/BrandSlider'
import Link from "next/link"
import RegistrationForm from '@/components/elements/RegistrationForm'
import Section5 from '@/components/sections/home1/section5'
import PastEventsSection from './component/PastEventsSection'



export default function Page() {

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
					<Section5 />

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
										
									</div>
								</div>
								<div className="col-lg-6">
									<div className="about-header-area heading2">
										<h5 data-aos="fade-left" data-aos-duration={800}>à propos de l'organisateur</h5>
										<div className="space16" />
										<h2 className="text-anime-style-3">Présentation de Jean-Marc Kouadio</h2>
										<div className="space16" />
										<p data-aos="fade-left" data-aos-duration={900}>Jean-Marc Kouadio est un jeune entrepreneur ivoirien passionné par l’innovation et le développement communautaire. Fort de plusieurs années d’expérience dans l’organisation d’événements culturels et professionnels, il s’est spécialisé dans la création de plateformes qui rassemblent des talents et stimulent la créativité locale. En tant qu’organisateur principal de cet événement, il veille à ce que chaque détail reflète sa vision : offrir un espace d’échange, de formation et d’opportunités pour les participants, tout en mettant en avant l’excellence et le savoir-faire africain.</p>
										<div className="space32" />
										
										
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== ABOUT AREA ENDS =======*/}
					<PastEventsSection />
					
					
					
					
				</div>

			</Layout>
		</>
	)
}