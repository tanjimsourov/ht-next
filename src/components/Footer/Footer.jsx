import React from 'react'
import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import EmailBox from '../EmailBox/EmailBox'
const Footer = () => {
    return (
        <div class="f-wrapper">
            <div class="container">
                <div class="f-container">
                    <span class="title">Let's Work Together</span>
                    <EmailBox />
                    <hr />
                    <div class="f-menu">
                    <div className="col-lg-1">
                        <a href="https://www.facebook.com/husmerktec" rel="noopener" target="_blank"><FaFacebook className='text-light fs-3' /></a>
                    </div>
                    <div className="col-lg-1">
                        <a href="https://www.instagram.com/husmerktech" rel="noopener" target="_blank"><FaInstagram className='text-light fs-3' /></a>
                    </div>
                    <div className="col-lg-1">
                         <a href="https://www.linkedin.com/company/husmerktech" rel="noopener" target="_blank"><FaLinkedinIn className='text-light fs-3' /></a>
                    </div>
                    <div className="col-lg-1">
                        <a href="mailto:husmerkbd@gmail.com"><IoIosMail className='text-light fs-2' /></a>
                    </div>
                    </div>
                    <hr />
                    <span class="text">&copy; Husmerk TECH All Rights Reserved</span>
                </div>
            </div>
        </div>
    )
}

export default Footer