'use client'

import { useCallback } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import CountUp from 'react-countup'

// Lazy loading du slider pour améliorer les performances
const Slider = dynamic(() => import('react-slick'), {
  ssr: false, // Désactive le SSR pour ce composant
  loading: () => <div className="slider-loading">Chargement...</div>
})

// Lazy loading du composant Countdown
const Countdown = dynamic(() => import('@/components/elements/Countdown'), {
  ssr: false
})

// Configuration du slider extraite pour une meilleure lisibilité
const sliderSettings = {
  autoplay: true,
  autoplaySpeed: 5000,
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
} as const

// Composant pour une slide individuelle
const HeroSlide = () => {
  return (
    <div className="her2-section-area">
      {/* Images décoratives avec Next.js Image pour l'optimisation */}
      <div className="elements9">
        <Image
          src="/assets/img/elements/elements9.png"
          alt="Élément décoratif"
          width={100}
          height={100}
          priority={false}
        />
      </div>
      <div className="elements10">
        <Image
          src="/assets/img/elements/elements10.png"
          alt="Élément décoratif"
          width={100}
          height={100}
          priority={false}
        />
      </div>
      <div className="elements11">
        <Image
          src="/assets/img/elements/elements11.png"
          alt="Élément décoratif"
          width={100}
          height={100}
          priority={false}
        />
      </div>
      
      {/* Image principale */}
      <div className="img1">
        <Image
          src="/assets/img/all-images/hero/hero-img4.png"
          alt="Image principale de la conférence SARA"
          width={600}
          height={400}
          priority={true} // Image importante, chargement prioritaire
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero2-header">
              <div className="hero1-header heading1">
                <h5 data-aos="fade-left" data-aos-duration={3000}>
                  
                  Le SARA, l&apos;évènement à ne pas rater
                </h5>
                
                <div className="space16" />
                
                <h1 className="text-anime-style-3">
                  Thème :
                  <br className="d-lg-block d-none" />
                  Innover et Réussir en 2025
                </h1>
                
                <div className="space16" />
                
                <p data-aos="fade-left" data-aos-duration={3000}>
                  Cette conférence est bien plus qu&apos;un simple rassemblement : 
                  <br className="d-lg-block d-none" />
                  c&apos;est un véritable rendez-vous d&apos;inspiration et d&apos;opportunités.
                </p>
                
                <div className="space32" />
                
                <div className="btn-area2">
                  <button 
                    className="event-btn1"
                    type="button"
                    aria-label="S'inscrire à la conférence SARA"
                  >
                    S&apos;inscrire
                  </button>
                  <Link 
                    href="/auth/sign-in"
                    className="event-btn4 event-space1"
                    aria-label="Se connecter à votre compte"
                  >
                    Se Connecter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Section1() {
  // Fonction optimisée avec useCallback
  const scrollToRegistration = useCallback((): void => {
    const element = document.getElementById('RegistrationForm')
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }, [])

  return (
    <section 
      className="hero-section" 
      aria-label="Section principale de la conférence SARA"
    >
      <Slider {...sliderSettings} className="hero2-slider-area">
        <HeroSlide />
        <HeroSlide />
        <HeroSlide />
      </Slider>
    </section>
  )
}