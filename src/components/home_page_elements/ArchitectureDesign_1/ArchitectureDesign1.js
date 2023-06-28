import DesignRoom from '../../../images/DesignRoom.png';
import Stars from '../../../images/Stars.png';
import ButtonModal from '../buttonModal/ButtonModal.js';
import './ArchitectureDesign1.css';

export default function ArchitectureDesign1() {

    return (

        <div className='home-page-firstblock'>
            <div className='home-page-architecture-design' >
                <img className='star-box' width="34px" src={Stars} alt='star' />
                <div className='home-page-about'>
                    <p className='home-page-aboutcompany-comp'>ARCHITECTURE DESIGN</p>
                    <p className='home-page-aboutcompany-compName'>PROFESSIONAL INTERIOR DESIGN</p>
                    <p className='home-page-aboutcompany-title'>Design for now with the awareness of yesterday and unknown tomorrow. Because small details make the perfect design. Helping you choose between good and best.</p>
                    <ButtonModal nameBtn="Let’s work together" />
                </div>

                <p className='home-page-aboutcompany-desElement'>INTERIOR</p>
            </div >
            <img src={DesignRoom} className='home-page-architecture-img' alt='Design Room' />
        </div >
    );
}
