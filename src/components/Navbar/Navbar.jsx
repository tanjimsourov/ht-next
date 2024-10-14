"use client"
import React, { useState } from 'react'
import "./Navbar.css"
import { BiMenuAltRight } from "react-icons/bi"
import { RxCross2 } from "react-icons/rx"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { Link } from "react-scroll"

const Navbar = () => {
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false)
    const [navStyle, setNavStyle] = useState("")
    const { scrollYProgress } = useScroll()

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.2) {
            setNavStyle("sticky")
        } else {
            setNavStyle("")
        }
    })
    return (
        <div class={`n-wrapper ${navStyle}`}>
            {/* desktop version */}
            <div class="container">
                <div class="n-container">
                    {/* left side */}
                    <div class="n-logo">
                        <span>Husmerk TECH</span>
                    </div>
                    {/* right side */}
                    <div class="n-right">
                        <div class="n-menu">
                            <Link to='wwd-wrapper' spy={true} smooth={true}>
                                <span>What we do</span>
                            </Link>
                            <Link to='hiw-wrapper' spy smooth offset={100}>
                                <span>How it works</span>
                            </Link>
                            <Link to='wwi-wrapper' spy smooth>
                                <span>Who we are </span>
                            </Link>
                            <Link to='t-wrapper' spy smooth offset={100}>
                                <span>Testimonials</span>
                            </Link>
                        </div>
                        <div class="fund-button">
                            <span>Let's Work</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile/tab version */}
            <div class="nm-container">
                <span>Husmerk TECH</span>
                {/* menu icon */}
                {
                    !mobileMenuOpened ? (
                        <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />
                    ) :
                        (
                            <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
                        )
                }



                {/* mobile menu */}

                <div class="nm-menu"
                    style={{ transform: mobileMenuOpened && "translateX(0%)" }}
                >
                    <Link
                        onClick={() => setMobileMenuOpened(false)}
                        to='wwd-wrapper'
                        spy={true}
                        smooth={true}
                    >
                        <span>What we do</span>
                    </Link>

                    <Link
                        onClick={() => setMobileMenuOpened(false)}
                        to='hiw-wrapper'
                        spy
                        smooth
                        offset={100}
                    >
                        <span>How it works</span>
                    </Link>
                    <Link
                        onClick={() => setMobileMenuOpened(false)}
                        to='wwi-wrapper'
                        spy
                        smooth
                    >
                        <span>Who we are </span>
                    </Link>
                    <Link
                        onClick={() => setMobileMenuOpened(false)}
                        to='t-wrapper'
                        spy
                        smooth
                        offset={100}
                    >
                        <span>Testimonials</span>
                    </Link>
                    <div class="m-fund-button">Let's Work</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar