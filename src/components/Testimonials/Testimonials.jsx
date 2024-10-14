import React from 'react'
import "./Testimonials.css"
import SlickSlider from './SlickSlider'
const Testimonials = () => {
    return (
        <div class="t-wrapper">
            <div class="container">
                <div class="t-container">
                    <div class="t-head">
                        <span class="tag">Testimonials</span>
                        <span class="title">Access capital that complements traditional funding options</span>
                        <div class="des">What people say about us</div>
                    </div>
                </div>
                {/* Slider */}
                <SlickSlider />
            </div>
        </div>
    )
}

export default Testimonials