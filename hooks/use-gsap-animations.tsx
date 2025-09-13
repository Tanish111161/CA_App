"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function useGSAPAnimations() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    // Hero section animations
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      },
    )

    gsap.fromTo(
      ".hero-subtitle",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      },
    )

    gsap.fromTo(
      ".hero-buttons",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      },
    )

    gsap.fromTo(
      ".hero-image",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        delay: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      },
    )

    // Problem section animations
    gsap.fromTo(
      ".problem-title",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".problem-section",
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      },
    )

    gsap.fromTo(
      ".problem-card",
      { opacity: 0, y: 60, rotateX: 15 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".problem-section",
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
        },
      },
    )

    // Solution section animations
    gsap.fromTo(
      ".solution-title",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".solution-section",
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      },
    )

    gsap.fromTo(
      ".solution-card",
      { opacity: 0, scale: 0.8, rotateY: 10 },
      {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".solution-section",
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
        },
      },
    )

    // Benefits section animations
    gsap.fromTo(
      ".benefits-title",
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".benefits-section",
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      },
    )

    gsap.fromTo(
      ".benefits-item",
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".benefits-section",
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
        },
      },
    )

    gsap.fromTo(
      ".benefits-image",
      { opacity: 0, x: 50, scale: 0.9 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".benefits-section",
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
        },
      },
    )

    // How it works section animations
    gsap.fromTo(
      ".works-title",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".works-section",
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      },
    )

    gsap.fromTo(
      ".works-step",
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".works-section",
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
        },
      },
    )

    // Testimonials section animations
    gsap.fromTo(
      ".testimonials-title",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      },
    )

    gsap.fromTo(
      ".testimonial-card",
      { opacity: 0, rotateY: 15, x: -30 },
      {
        opacity: 1,
        rotateY: 0,
        x: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
        },
      },
    )

    // Pricing section animations
    gsap.fromTo(
      ".pricing-title",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".pricing-section",
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      },
    )

    gsap.fromTo(
      ".pricing-card",
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".pricing-section",
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
        },
      },
    )

    // Closing section animations
    gsap.fromTo(
      ".closing-content",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".closing-section",
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1,
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
}
