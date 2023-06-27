import './OurTeam.css';
import Path1 from '../../../images/path1.png';
import OurTeamPhoto from '../../../images/ourTeam.png';

export default function OurTeam() {
    return (
        <div className='team-block'>
            <img className='designElement-horizontal' src={Path1} alt='horizontal-line' />

            <div className='our-team-block'>
                <div className='our-team-content'>
                    <div>
                        <p className='our-team-block-name'>OUR PROJECT</p>
                        <p className='our-team-block-title'>Meet With Our Team</p>
                        <img className='our-team-block-photo' src={OurTeamPhoto} alt='Team photo' />
                    </div>

                    <div className='our-team-block-names'>
                        <p className='our-team-block-names-element'>Cody Fisher   &minus;   CEO</p>
                        <p className='our-team-block-names-element'>Savannah Nguyen   &minus;   Interior architect</p>
                        <p className='our-team-block-names-element'>Jerome Bell   &minus;   Interior</p>
                        <p className='our-team-block-names-element'>Cameron Williamson   &minus;   architect</p>
                        <p className='our-team-block-names-element'>Marvin McKinney   &minus;   COnstruction head</p>
                    </div>
                </div>
            </div>
        </div>
    );
}