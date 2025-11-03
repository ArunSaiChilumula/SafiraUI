import React from 'react'
import '../../css/ContactUsStyle.css'
const Form = () => {
    return (

        <div className='formContainer'>
            <div className='left'>
                <p className='heading'>Contact Us</p>
                <p className='para'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima architecto laudantium sapiente corporis. Pariatur aliquid doloremque quibusdam voluptatem aspernatur dolore nobis debitis eius porro, quasi sit? Odio labore illum ipsam?
                </p>
                <hr />
                <p>📠 Address : No 40 Baria Sreet 133/2 NewYork City</p>
                <hr />
                <p>📞 Infor@roadthemes.com</p>
                <hr />
                <p>📩 0(1234) 567 890</p>
            </div>
            <div className='right'>
                <p className='heading'>Tell us your project</p>
                <p>Your Name (required)</p>
                <input type="text" placeholder=' Name *' />
                <p>Your Email (required)</p>
                <input type="text" placeholder=' Email *' />
                <p>Subject</p>
                <input type="text" placeholder=' Subject *' />
                <p>Your Message</p>
                <textarea placeholder='  Message *' id='lastinput' />
                <button>send</button>
            </div>

        </div>



    )
}

export default Form