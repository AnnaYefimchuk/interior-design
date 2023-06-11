import './ShowcaseImages.css';
import Room1 from '../../../images/Room1.png';
import Room2 from '../../../images/Room2.png';
import Room3 from '../../../images/Room3.png';
import Room4 from '../../../images/Room4.png';
import Room5 from '../../../images/Room5.png';
import Room6 from '../../../images/Room6.png';
import Room7 from '../../../images/Room7.png';

export default function ShowcaseImages() {
    return (
        <div className='picture-carusel-block'>
            <img className='' src={Room1} alt='Room 1' />
            <img className='' src={Room2} alt='Room 2' />
            <img className='' src={Room3} alt='Room 3' />
            <img className='' src={Room4} alt='Room 4' />
            <img className='' src={Room5} alt='Room 5' />
            <img className='' src={Room6} alt='Room 6' />
            <img className='' src={Room7} alt='Room 7' />
        </div>
    );
}