import './AboutUs.css';
import Building1 from '../../../images/Building1.png';
import Building2 from '../../../images/Building2.png';
import Building3 from '../../../images/Building3.png';
import CircularText from '../../../images/CircularText1.png';


export default function AboutUs() {
    return (

        <div className='aboutUs-block'>
            <div className='aboutUs-grid'>
                <div className='aboutUs-block-left'>
                    <div className='aboutUs-header'>
                        <p className='room-plan-title'>About Us</p>
                        <p className='room-plan-description'>As development continues, engineers may visit building destinations to guarantee that temporary workers pursue the plan, keep to the timetable, utilize the predefined materials, and meet work-quality models.</p>
                    </div>
                </div>

                <div className='position-grid'>
                    <div className='aboutUs-block-one-midle '>
                        <p className='aboutUs-percentB'>85<span className=' aboutUs-percent'>%</span></p>
                        <p className='aboutUs-clients gray-color'>Satisfied Clients</p>
                    </div>
                    <div className='aboutUs-block-one-last'>
                        <img className='corner-house' src={Building3} alt='HousePlan' />
                        <img className='readMore' src={CircularText} alt='HousePlan' />
                    </div>
                </div>

                <img className='building-example1' src={Building2} alt='HousePlan' />
                <img className='building-example2' src={Building1} alt='HousePlan' />

            </div>
        </div>
    );
}