'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "@/node_modules/react-modal-video/css/modal-video.css"
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,

	// Navigation
	navigation: {
		nextEl: '.owl-next',
		prevEl: '.owl-prev',
	},

	// Pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
}

export default function Section5() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<div className="testimonials1-section-area sp1 m-5">
				<div className="testimonial-img2">
					<img src="/assets/img/all-images/testimonials/testimonial-img2.png" alt="" />
				</div>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="testimonial-header heading2">
								
								<div className="space16" />
								<h2 className="text-anime-style-3">Vidéo de présentation de l'événement</h2>
							</div>
							
							
						</div>
						<div className="col-lg-6">
							<div className="video-play-btn">
								<a onClick={() => setOpen(true)} className="popup-youtube"><svg xmlns="http://www.w3.org/2000/svg" width={20} height={24} viewBox="0 0 20 24" fill="none">
									<path d="M19.5185 11.1463L1.52146 0.147702C1.36988 0.0550624 1.19634 0.0044781 1.01872 0.0011519C0.8411 -0.00217431 0.665798 0.041878 0.510849 0.128777C0.3559 0.215677 0.226898 0.342285 0.137113 0.495581C0.0473273 0.648876 8.00178e-08 0.823322 0 1.00098V22.9981C8.00178e-08 23.1758 0.0473273 23.3502 0.137113 23.5035C0.226898 23.6568 0.3559 23.7834 0.510849 23.8703C0.665798 23.9572 0.8411 24.0013 1.01872 23.998C1.19634 23.9946 1.36988 23.944 1.52146 23.8514L19.5185 12.8528C19.6647 12.7635 19.7855 12.6381 19.8693 12.4887C19.9531 12.3393 19.9971 12.1709 19.9971 11.9996C19.9971 11.8282 19.9531 11.6598 19.8693 11.5104C19.7855 11.361 19.6647 11.2356 19.5185 11.1463Z" fill="#1A1719" />
								</svg></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ModalVideo channel='youtube' isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />
		</>
	)
}
