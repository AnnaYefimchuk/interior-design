import HousePlan from '../../../images/HousePlan.png';
import ButtonModal from '../buttonModal/ButtonModal.js';
import './RoomPlane.css'

export default function RoomPlane() {
    return (
        <div className='room-plan-block'>
            <div className='room-plan-bgblock'>
                <div className='room-plan-HousePlanimg'>
                    <img className='room-plan-HousePlan-img' src={HousePlan} alt='HousePlan' />
                </div>
                <div className='room-plan-digital'>
                    <p className='room-plan-title'>We Create Digital Experience</p>
                    <div className='room-plan-percent-block'>
                        <div>
                            <p className='percent'>75<span className='percent-element'>%</span></p>
                            <p className='percent-description'>Architecture</p>
                        </div>
                        <div>
                            <p className='percent'>85<span className='percent-element'>%</span></p>
                            <p className='percent-description'>Construction</p>
                        </div>
                        <div>
                            <p className='percent'>65<span className='percent-element'>%</span></p>
                            <p className='percent-description'>Interior Design</p>
                        </div>
                    </div>

                    <ButtonModal nameBtn="Let’s work together" />
                </div>

            </div>
        </div>
    );
}