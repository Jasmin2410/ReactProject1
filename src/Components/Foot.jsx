import React from 'react'
import "../Styles/footer.css"
import {BsFacebook} from "react-icons/bs"
import {BsReddit} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import {GrLinkedin} from "react-icons/gr"
import {AiFillYoutube} from "react-icons/ai"
import {GrTwitter} from"react-icons/gr"




function Foot() {
  return (
    <div className='footer1'>
            <div className='fo'>

                <div className='icon'>
                    <h1><BsReddit /></h1>
                    <h1><GrLinkedin /></h1>
                    <h1><AiFillInstagram /></h1>
                    <h1><AiFillYoutube /></h1>
                    <h1><GrTwitter /></h1>
                    <h1> <BsFacebook /></h1>
                
                </div>

                <div className='foo'>
                    <p>All Rights @2023</p>
                </div>

                <div className='email'>
                    <h2>Email</h2>
                    <input type="emails" placeholder='Enter email' />
                    <input type="text" placeholder='Enter text' />
                    <div className='btn'>
                        <button className='btn1'>Send</button>
                       <button className='btn1'>Cancle</button>


                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
  )
}

export default Foot