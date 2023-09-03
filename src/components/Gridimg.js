import image1 from '../images/image-gallery-milkbottles.jpg';
import image2 from '../images/image-gallery-orange.jpg';
import image3 from '../images/image-gallery-cone.jpg';
import image4 from '../images/image-gallery-sugarcubes.jpg';

export const Gridimg  =()=>{
    return(<>
    <section className="pt-20">
<div className="grid-img">
<div><img src={image1} alt='first-img'/></div>
<div ><img src={image2} alt='sec-img'/></div>
<div ><img src={image3} alt='third-img'/></div>
<div ><img src={image4} alt='fourth-img'/></div>
</div>

</section>

    
    
    </>)
}