import Link from 'next/link'
import '../../../public/assets/css/EventVariables.css';


export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch }: any) {
	
	

	return (
		<>
			<header>
				<div className={`header-area homepage1 header header-sticky d-none d-lg-block ${scroll ? 'sticky' : ''}`} id="header">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="header-elements">
									<div className="site-logo">
										<Link href="/"><img src="/assets/img/event_img/SARA-2025-LOGO-2.jpg" alt="" /></Link>
									</div>
									<div className="main-menu">
										<ul>
											<li>
												<Link href="/#">Accueil <i className="fa-solid fa-angle-down" /></Link>
												<div className="tp-submenu">
													<div className="row">
														<div className="col-lg-12">
															<div className="all-images-menu">
																<div className="homemenu-thumb">
																	<div className="img1">
																		<img src="/assets/img/all-images/demo/demo-img1.png" alt="" />
																	</div>
																	<div className="homemenu-btn">
																		<Link className="vl-btn1" href="/">Voir la Demo</Link>
																	</div>
																	<div className="homemenu-text">
																		<Link href="/">Eventify-Homepage 01</Link>
																	</div>
																</div>
																<div className="homemenu-thumb">
																	<div className="img1">
																		<img src="/assets/img/all-images/demo/demo-img2.png" alt="" />
																	</div>
																	<div className="homemenu-btn">
																		<Link className="vl-btn1" href="/index2">View Demo </Link>
																	</div>
																	<div className="homemenu-text">
																		<Link href="/index2">Eventify-Homepage 02</Link>
																	</div>
																</div>
																<div className="homemenu-thumb">
																	<div className="img1">
																		<img src="/assets/img/all-images/demo/demo-img3.png" alt="" />
																	</div>
																	<div className="homemenu-btn">
																		<Link className="vl-btn1" href="/index3">View Demo </Link>
																	</div>
																	<div className="homemenu-text">
																		<Link href="/index3">Eventify-Homepage 03</Link>
																	</div>
																</div>
																<div className="homemenu-thumb">
																	<div className="img1">
																		<img src="/assets/img/all-images/demo/demo-img4.png" alt="" />
																	</div>
																	<div className="homemenu-btn">
																		<Link className="vl-btn1" href="/index4">View Demo </Link>
																	</div>
																	<div className="homemenu-text">
																		<Link href="/index4">Eventify-Homepage 04</Link>
																	</div>
																</div>
																<div className="homemenu-thumb" style={{ margin: 0 }}>
																	<div className="img1">
																		<img src="/assets/img/all-images/demo/demo-img5.png" alt="" />
																	</div>
																	<div className="homemenu-btn">
																		<Link className="vl-btn1" href="/index5">View Demo </Link>
																	</div>
																	<div className="homemenu-text">
																		<Link href="/index5">Eventify-Homepage 05</Link>
																	</div>
																</div>
															</div>
															<div className="all-images-menu">
																<div className="homemenu-thumb">
																	<div className="img1">
																		<img src="/assets/img/all-images/demo/demo-img6.png" alt="" />
																	</div>
																	<div className="homemenu-btn">
																		<Link className="vl-btn1" href="/index6">View Demo </Link>
																	</div>
																	<div className="homemenu-text">
																		<Link href="/index6">Eventify-Homepage 06</Link>
																	</div>
																</div>
																<div className="homemenu-thumb">
																	<div className="img1">
																		<img src="/assets/img/all-images/demo/demo-img7.png" alt="" />
																	</div>
																	<div className="homemenu-btn">
																		<Link className="vl-btn1" href="/index7">View Demo </Link>
																	</div>
																	<div className="homemenu-text">
																		<Link href="/index7">Eventify-Homepage 07</Link>
																	</div>
																</div>
																<div className="homemenu-thumb">
																	<div className="img1">
																		<img src="/assets/img/all-images/demo/demo-img8.png" alt="" />
																	</div>
																	<div className="homemenu-btn">
																		<Link className="vl-btn1" href="/index8">View Demo </Link>
																	</div>
																	<div className="homemenu-text">
																		<Link href="/index8">Eventify-Homepage 08</Link>
																	</div>
																</div>
																<div className="homemenu-thumb">
																	<div className="img1">
																		<img src="/assets/img/all-images/demo/demo-img9.png" alt="" />
																	</div>
																	<div className="homemenu-btn">
																		<Link className="vl-btn1" href="/index9">View Demo </Link>
																	</div>
																	<div className="homemenu-text">
																		<Link href="/index9">Eventify-Homepage 09</Link>
																	</div>
																</div>
																<div className="homemenu-thumb" style={{ margin: 0 }}>
																	<div className="img1">
																		<img src="/assets/img/all-images/demo/demo-img10.png" alt="" />
																	</div>
																	<div className="homemenu-btn">
																		<Link className="vl-btn1" href="/index10">View Demo </Link>
																	</div>
																	<div className="homemenu-text">
																		<Link href="/index10">Eventify-Homepage 10</Link>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
											
											
											
											<li><Link href="/a_propos_de_levenement">A propos de l'événement </Link></li>
											<li><Link href="/faq">FAQ,s</Link></li>
											{/*<li>
												
											</li>*/}
											
											{/*<li>
												<Link href="#">Pages <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													
													<li><Link href="/plan_tarifaire">Plan Tarifaire</Link></li>
													<li><Link href="/faq">FAQ,s</Link></li>
													<li><Link href="/connexion" className='event-btn4'>Se Connecter</Link></li>
												</ul>
											</li>*/}
											
											
										</ul>
									</div>
									<li>
										<Link href="/connexion" className="event-btn4">
											<span>Connexion</span>
										</Link>
									</li>
									<li>
										<Link href="/inscription" className="event-btn1">
											<span>Inscription</span>
										</Link>
									</li>
									<div className="btn-area">
										
										<ul>
											<li>
												<Link href="/#"><i className="fa-brands fa-facebook-f" /></Link>
											</li>
											
											<li>
												<Link href="/#" className="m-0"><i className="fa-brands fa-pinterest-p" /></Link>
											</li>

											<li>
												<Link href="/#" className="m-2"><i className="fa-brands fa-instagram" /></Link>
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
