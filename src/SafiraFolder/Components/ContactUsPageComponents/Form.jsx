import React from 'react'
import '../../css/ContactUsStyle.css'
const Form = () => {
    return (
        <div className='topLayer'>
            <div className='formContainer'>
                <div className='left'>
                    <p className='heading'>Contact Us</p>
                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human. qui sequitur mutationem consuetudium lectorum. Mirum est notare quam</p>
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
                    <input type="text" placeholder=' Message *' id='lastinput' />
                    <button>send</button>
                </div>

            </div>

            <hr id='line' />
        </div>
    )
}

export default Form