import './ServicesSpecializations.css';
import FloorPlan from '../../../images/FloorPlan.png';
import Construction from '../../../images/Construction.png';
import ArchitectureDesign from '../../../images/ArchitectureDesign.png';
import InteriorDesign from '../../../images/InteriorDesign.png';
import './ServicesSpecializations.css'

export default function ServicesSpecializations() {

    return (
        <div className='home-page-services-block'>

            <div className='home-page-first-block'>
                <div className='container'>
                    <img className='imgTest' src={FloorPlan} alt='star' />
                    <div className='photo-text'>
                        <p className='photo-text-block-header'>Floor plan</p>
                        <p className='photo-text-shortinfo'>Tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
            </div>

            <div className='home-page-middle-block'>
                <p className='home-page-services'>TOP SERVICES</p>
                <p className='home-page-specializations'>Our Specializations</p>
                <div className='home-page-middle'>
                    <div className='container'>
                        <img className='imgTest' src={InteriorDesign} alt='star' />
                        <div className='photo-text'>
                            <p className='photo-text-block-header'>Interior Design</p>
                            <p className='photo-text-shortinfo'>Tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>


                    <div className='container'>
                        <img className='imgTest' src={ArchitectureDesign} alt='star' />
                        <div className='photo-text'>
                            <p className='photo-text-block-header'>Architecture Design</p>
                            <p className='photo-text-shortinfo'>Tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='home-page-last-block'>
                <div className='container'>
                    <img className='imgTest' src={Construction} alt='star' />
                    <div className='photo-text'>
                        <p className='photo-text-block-header'>Construction</p>
                        <p className='photo-text-shortinfo'>Tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}