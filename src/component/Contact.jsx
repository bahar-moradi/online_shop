import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
const data=[
    {
        id:1, icon:<AiOutlineMail/> ,title:'Email',adress:'bahar.moradi33@gmail.com',href:'mailto:bahar.moradi33@gmail.com', Text:'Send a message'
    },
    {
        id:2, icon:<AiFillLinkedin/> ,title:'',adress:'Linkedin',href:'https://www.linkedin.com/in/bahar-moradi/', Text:'Send a message'
    },
    {
    id:3, icon:<BsWhatsapp/>,title:'WhatsApp',adress:'+31649168768',href:'https://api.whatsapp.com/send?phone=+31649168768', Text:'Send a message'
    }
]

const Contact = () => {
        const form = useRef();
      
    const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_b3hxewp','template_bn54hhg', form.current,'qZijdRRm41m0JbIZ_')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
          });
    };


        
  return (
    <section id='contact ' style={{marginTop:'120px'}}>
       <div style={{textAlign:'center',marginBottom: "50px"}}><h5>Get In Touch</h5>
            <h2>Contact Me</h2>
         </div> 
      
      <div className='container contact__container'>
        <div className='contact__options '>
          {
            data.map(({id,icon,title,adress,href,Text})=>{
              return(
                <article key={id} className='contact__option'>
                  <h4 className='mb-2'>{icon}</h4>
                  <h5>{title}</h5>
                  <h6>{adress}</h6>
                  <a href={href} target='_blank' className='text-decoration-none '>{Text}</a>

                </article>

              )
            })
          }
          
        </div>  
        <form ref={form} onSubmit={sendEmail}>
          <input type='text'name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='your Email'required/>
          <textarea name='message' rows='7' placeholder='Your message' required/>
          <button type='submit'className='btn btn-primary'>Send Messages</button>
        </form>
        
      </div>
    </section>
  )
}


export default Contact