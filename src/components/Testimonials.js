import firstName from '../images/image-emily.jpg';
import secondName from '../images/image-thomas.jpg';
import thirdName from '../images/image-jennie.jpg';

export const Testimonials =()=>{
    return(<>
    
    <section><h1 className="text-center text-2xl md:text-3xl font-bold font-serif my-16 md:my-20 opacity-40 ">CLIENT TESTIMONIALS</h1>
    <div className="flex flex-wrap md:flex-no-wrap justify-center md:justify-around text-center" style={{ textAlign: 'center' }}>

<div className=" w-full md:w-1/3 text-center pb-20 md:pb-0"><img src={firstName} alt="Emily-R" style={{ margin: 'auto', borderRadius: '50%', height: '50px', textAlign: 'center' }} /><p className="opacity-70 pt-6 md:pt-10 px-6 md:px-4"> We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p><p className="font-bold font-serif pt-8">Emily-R. <br /><h6 className="opacity-70">Marketing Director</h6></p></div>
<div className="w-full md:w-1/3 text-center pb-20 md:pb-0"><img src={secondName} alt="Thomas S." style={{ borderRadius: '50%', margin: 'auto', height: '50px', textAlign: 'center' }} /> <p className="opacity-70 pt-6 md:pt-10 px-6 md:px-4">
    Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
  </p><p className="font-bold font-serif pt-8">Thomas S. <br /><h6 className="opacity-70">Chief Operating Officer</h6></p></div>
<div className="w-full md:w-1/3 text-center "><img src={thirdName} alt=" Jennie F." className="" style={{ borderRadius: '50%', margin: 'auto', height: '50px', textAlign: 'center' }} /> <p className="opacity-70 pt-6 md:pt-10 px-6 md:px-4">
    Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
  </p><p className="font-bold font-serif pt-8">Jennie F. <br /><h6 className="opacity-70">Business Owner</h6></p></div>
    </div>
</section>

    
    
    </>

    )
}