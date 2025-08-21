
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function EventSchedule() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<div className="inner-page-header" style={{ backgroundImage: 'url(assets/img/bg/header-bg10.png)' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-6 m-auto">
									<div className="heading1 text-center">
										<h1>Horaire de l’événement</h1>
										<div className="space20" />
										<Link href="/">Accueil <i className="fa-solid fa-angle-right" /> <span>Horaire de l’événement</span></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA ENDS =======*/}
					
					{/*===== EVENT AREA STARTS =======*/}
					<div className="schedule-section-area sp10 mt-5">
						<div className="container">
							<div className="row">
								<div className="col-lg-11 m-auto">
									<div className="schedule">
										<table>
											<thead>
												<tr>
													<th>Heure</th>
													<th>Vendredi</th>
													<th>Samedi</th>
													<th>Dimanche</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>09:00-10:00 AM</td>
													<td>Conférences d’affaires<br /><span>Par l’organisateur de l’événement</span></td>
													<td>Conception UI/UX<br /><span>Par l’organisateur de l’événement</span></td>
													<td>Conception UI/UX<br /><span>Par l’organisateur de l’événement</span></td>
												</tr>
												<tr>
													<td>09:00-10:00 AM</td>
													<td>Conception UI/UX<br /><span>Par l’organisateur de l’événement</span></td>
													<td>Conférences d’affaires<br /><span>Par l’organisateur de l’événement</span></td>
													<td>Conférences d’affaires<br /><span>Par l’organisateur de l’événement</span></td>
												</tr>
												<tr>
													<td>09:00-10:00 AM</td>
													<td>Conférences d’affaires<br /><span>Par l’organisateur de l’événement</span></td>
													<td>Conception UI/UX<br /><span>Par l’organisateur de l’événement</span></td>
													<td>Conception UI/UX<br /><span>Par l’organisateur de l’événement</span></td>
												</tr>
												<tr>
													<td>09:00-10:00 AM</td>
													<td>Conception UI/UX<br /><span>Par l’organisateur de l’événement</span></td>
													<td>Conférences d’affaires<br /><span>Par l’organisateur de l’événement</span></td>
													<td>Conférences d’affaires<br /><span>Par l’organisateur de l’événement</span></td>
												</tr>
												<tr>
													<td>09:00-10:00 AM</td>
													<td>Conférences d’affaires<br /><span>Par l’organisateur de l’événement</span></td>
													<td>Conception UI/UX<br /><span>Par l’organisateur de l’événement</span></td>
													<td>Conception UI/UX<br /><span>Par l’organisateur de l’événement</span></td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== EVENT AREA ENDS =======*/}
					{/*===== CTA AREA STARTS =======*/}
					<div className="cta1-section-area d-lg-block d-block">
						<div className="container">
							<div className="row">
								<div className="col-lg-10 m-auto">
									<div className="cta1-main-boxarea">
										<div className="timer-btn-area">
										<Countdown />
											<div className="btn-area1">
												<Link href="/pricing-plan" className="vl-btn1">Buy Ticket</Link>
											</div>
										</div>
										<ul>
											<li>
												<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />30 January 2025 - 6pm to 11:30pm</Link>
											</li>
											<li className="m-0">
												<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />Secret Location In The UK</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== CTA AREA ENDS =======*/}
					{/*===== CTA AREA STARTS =======*/}
					<div className="cta1-section-area d-lg-none d-block">
						<div className="container">
							<div className="row">
								<div className="col-lg-10 m-auto">
									<div className="cta1-main-boxarea">
										<div className="timer-btn-area">
										<Countdown />
											<div className="btn-area1">
												<Link href="/pricing-plan" className="vl-btn1">Buy Ticket</Link>
											</div>
										</div>
										<ul>
											<li>
												<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />30 January 2025 - 6pm to 11:30pm</Link>
											</li>
											<li className="m-0">
												<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />Secret Location In The UK</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</Layout>
		</>
	)
}