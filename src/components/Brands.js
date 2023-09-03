import transform from '../images/image-transform (1).jpg';
import standout from '../images/image-stand-out.jpg';
import { Link } from 'react-router-dom';

export const Brands =() =>{
    return(<>
    
    
<section className="flex flex-col md:flex-row just-center mb-20 md:mb-0">

<div className="w-full md:w-1/2 px-6 nsm:px-20 md:px-10 lg:px-20 text-center md:text-left order-2 md:order-1 mt-28  md:mt-10 lg:mt-36"> <h2 class="font-bold text-3xl font-serif ">Transform your brand</h2>
    <p className="opacity-70 py-4 md:pt-8 md:pb-4">
    We are a full-service creative agency specializing in helping brands grow fast. 
      Engage your clients through compelling visuals that do most of the marketing for you. 
    </p>
    <Link to={'/'} className='Learnmore'> Learn more </Link></div>

    <div className="w-full md:w-1/2 order-1 md:order-2"><img src={transform} media="max-width: 375px;" alt=""/></div>
</section>


<section>

<div className="flex flex-wrap lg:flex-no-wrap just-center mb-20 md:mb-0">
<div className=" w-full md:w-1/2"><img className='standout' src={standout} alt="" /></div>
<div  className="w-full md:w-1/2 px-6 sm:px-20 md:px-10 lg:px-20 text-center md:text-left">  <h2 className="font-bold text-3xl font-serif mt-28  md:mt-10 lg:mt-36">Stand out to the right audience</h2>
<p className="opacity-70 py-4 md:pt-8 md:pb-4">
  Using a collaborative formula of designers, researchers, photographers, videographers, 
  and copywriters, we’ll build and extend your brand in digital places. 
</p>
<Link to={'/'} className='Learnmore'>Learn more</Link></div>

</div>

</section>

    
    </>)
}