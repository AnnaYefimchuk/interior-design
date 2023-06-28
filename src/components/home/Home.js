import dataInfo from '../data/projects.json';
import ArchitectureDesign1 from '../home_page_elements/ArchitectureDesign_1/ArchitectureDesign1.js';
import ServicesSpecilizations from '../home_page_elements/TopServicesSpecializations/ServicesSpecializations.js';
import AboutUs from '../home_page_elements/aboutUs/AboutUs.js';
import RoomPl from '../home_page_elements/roomPlane/RoomPlane.js';
import OurTeamF from '../home_page_elements/ourTeam/OurTeam.js';
import ShowcaseImages from '../home_page_elements/showcaseImages/ShowcaseImages.js';

import Pool from '../../images/Pool.png';
import './Home.css';



export default function Home() {

    const newdata = dataInfo.map((data => {
        return (
            <div key={data.id} className='list-container-header-map'>
                <p className='item-element-title1'>{data.Residence}</p>
                <p className='item-element-title'>{data.BEDBATH}</p>
                <p className='item-element-title'>{data.SQFT}</p>
                <p className='item-element-title'>{data.SalePrice}</p>
                <p className='item-element-title'>{data.RentPrice}</p>
                <p className='item-element-title'>{data.FloorPlan}</p>
            </div>
        )
    }))

    return (

        <div className='home-page'>

            <ArchitectureDesign1 />
            <ServicesSpecilizations />
            <AboutUs />
            <RoomPl />

            <div className='check-availability-block'>
                <div className='check-availability-size'>
                    <div className='check-availability-block-second'>
                        <div>
                            <p className='check-availability-list'>OUR PROJECT</p>
                            <p className='check-availability-descr'>Check Availability</p>
                        </div>

                        <div className="">
                            <p className='check-availability-unique'>The unique architect with ideas from outside the world. Where design and science meet. With people’s comfort in mind</p>
                        </div>
                    </div>

                    <div className='scroll-container'>
                        <div className="list-container">
                            <div className='list-conteiner-table'>
                                <div className="list-container-header">
                                    <p className='list-container-head1'>Residence</p>
                                    <p className='list-container-head'>Bed/Bath</p>
                                    <p className='list-container-head'>SQ. FT.</p>
                                    <p className='list-container-head'>Sale Price</p>
                                    <p className='list-container-head'>Rent Price</p>
                                    <p className='list-container-head'>Floor Plan</p>
                                </div>
                                {newdata}
                            </div>

                            <img className='pool-img' src={Pool} alt='HousePlan' />
                        </div>
                    </div>
                </div>
            </div>
            <OurTeamF />
            <ShowcaseImages />

        </div >
    )

}