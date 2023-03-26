import React from 'react'
import './Clientreview.css'
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp'
import StarOutlineSharpIcon from '@mui/icons-material/StarOutlineSharp';
import Me2 from '../../images/profile-img/Snapchat-1577513548.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Autoplay} from "swiper";

const Clientreview = () => {
  return (
    <div className="client-review_container">
        <div className="text-cont">
            <h3>Client Review</h3>
            <h1 className='text-big-m'>what clients think about us</h1>
        </div>
        <Swiper 
       autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
        className="container-client one xyz mySwiper"
        slidesPerView={2}
        freeMode={true}
        spaceBetween={100}
        pagination={{
            clickable: true,
          }}
        modules={[FreeMode, Pagination, Autoplay]}
        >
            <SwiperSlide className="card_container">
            <h2 className='capitalize'>"My experience on this platform is very nice. It brought me the convinience that i could never imagine. i could acquire assets at the tips of my finger, without much stress. its the best i have seen in a long time.  good one guys"</h2>
                <div className="stars">
                    <StarPurple500SharpIcon className='gold'/>
                    <StarPurple500SharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                </div>
                <div className="twolines">
                    <div className="length-line"></div>
                    <div className="profle-container_review">
                        <img src={Me2} alt="" />
                    </div>
                </div>
                <div className="name-space">
                    <h3>mrs, juliest akingbade</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className="card_container">
            <h2 className='capitalize'>"My experience on this platform is very nice. It brought me the convinience that i could never imagine. i could acquire assets at the tips of my finger, without much stress. its the best i have seen in a long time.  good one guys"</h2>
                <div className="stars">
                    <StarPurple500SharpIcon className='gold'/>
                    <StarPurple500SharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                </div>
                <div className="twolines">
                    <div className="length-line"></div>
                    <div className="profle-container_review">
                        <img src={Me2} alt="" />
                    </div>
                </div>
                <div className="name-space">
                    <h3>mrs, juliest akingbade</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className="card_container activer">
            <h2 className='capitalize'>"My experience on this platform is very nice. It brought me the convinience that i could never imagine. i could acquire assets at the tips of my finger, without much stress. its the best i have seen in a long time.  good one guys"</h2>
                <div className="stars">
                    <StarPurple500SharpIcon className='gold'/>
                    <StarPurple500SharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                </div>
                <div className="twolines">
                    <div className="length-line"></div>
                    <div className="profle-container_review">
                        <img src={Me2} alt="" />
                    </div>
                </div>
                <div className="name-space">
                    <h3>mrs, juliest akingbade</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className="card_container">
                <h2 className='capitalize'>"My experience on this platform is very nice. It brought me the convinience that i could never imagine. i could acquire assets at the tips of my finger, without much stress. its the best i have seen in a long time.  good one guys"</h2>
                <div className="stars">
                    <StarPurple500SharpIcon className='gold'/>
                    <StarPurple500SharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                </div>
                <div className="twolines">
                    <div className="length-line"></div>
                    <div className="profle-container_review">
                        <img src={Me2} alt="" />
                    </div>
                </div>
                <div className="name-space">
                    <h3>mrs, juliest akingbade</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className="card_container">
                <h2 className='capitalize'>"My experience on this platform is very nice. It brought me the convinience that i could never imagine. i could acquire assets at the tips of my finger, without much stress. its the best i have seen in a long time.  good one guys"</h2>
                <div className="stars">
                    <StarPurple500SharpIcon className='gold'/>
                    <StarPurple500SharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                </div>
                <div className="twolines">
                    <div className="length-line"></div>
                    <div className="profle-container_review">
                        <img src={Me2} alt="" />
                    </div>
                </div>
                <div className="name-space">
                    <h3>mrs, juliest akingbade</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className="card_container">
                <h2 className='capitalize'>"My experience on this platform is very nice. It brought me the convinience that i could never imagine. i could acquire assets at the tips of my finger, without much stress. its the best i have seen in a long time.  good one guys"</h2>
                <div className="stars">
                    <StarPurple500SharpIcon className='gold'/>
                    <StarPurple500SharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                </div>
                <div className="twolines">
                    <div className="length-line"></div>
                    <div className="profle-container_review">
                        <img src={Me2} alt="" />
                    </div>
                </div>
                <div className="name-space">
                    <h3>mrs, juliest akingbade</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className="card_container">
                <h2 className='capitalize'>"My experience on this platform is very nice. It brought me the convinience that i could never imagine. i could acquire assets at the tips of my finger, without much stress. its the best i have seen in a long time.  good one guys"</h2>
                <div className="stars">
                    <StarPurple500SharpIcon className='gold'/>
                    <StarPurple500SharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                </div>
                <div className="twolines">
                    <div className="length-line"></div>
                    <div className="profle-container_review">
                        <img src={Me2} alt="" />
                    </div>
                </div>
                <div className="name-space">
                    <h3>mrs, juliest akingbade</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide className="card_container">
                <h2 className='capitalize'>"My experience on this platform is very nice. It brought me the convinience that i could never imagine. i could acquire assets at the tips of my finger, without much stress. its the best i have seen in a long time.  good one guys"</h2>
                <div className="stars">
                    <StarPurple500SharpIcon className='gold'/>
                    <StarPurple500SharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                </div>
                <div className="twolines">
                    <div className="length-line"></div>
                    <div className="profle-container_review">
                        <img src={Me2} alt="" />
                    </div>
                </div>
                <div className="name-space">
                    <h3>mrs, juliest akingbade</h3>
                </div>
            </SwiperSlide>

            <SwiperSlide className="card_container">
                <h2 className='capitalize'>"My experience on this platform is very nice. It brought me the convinience that i could never imagine. i could acquire assets at the tips of my finger, without much stress. its the best i have seen in a long time.  good one guys"</h2>
                <div className="stars">
                    <StarPurple500SharpIcon className='gold'/>
                    <StarPurple500SharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                    <StarOutlineSharpIcon className='gold'/>
                </div>
                <div className="twolines">
                    <div className="length-line"></div>
                    <div className="profle-container_review">
                        <img src={Me2} alt="" />
                    </div>
                </div>
                <div className="name-space">
                    <h3>mrs, juliest akingbade</h3>
                </div>
            </SwiperSlide>
          
        </Swiper>

    </div>
  )
}

export default Clientreview