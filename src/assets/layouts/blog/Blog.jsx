import React from 'react'
import './Blog.css'
import Blog1 from "../../images/property/property-1.jpg";

const Blog = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <>
    <div className="blog_container">
        <div className="blogs xyz">
        <div className="blogs_content_header">
            <h6>Our</h6>
            <h1>Blog</h1>
        </div>
        <div className="blogs_content">
            <div className="blog active">
                <div className="blog_pics">
                    <img src={Blog1} alt="house"/>
                </div>
                <div className="tink">
                    <div className="round"></div>
                    <div className="lines">
                    <div className="calendar">
                            {date}
                        </div>
                    </div>
                </div>
                <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere debitis sit dolorem labore quidem adipisci doloribus, facilis fugiat velit possimus tenetur doloremque, itaque quaerat iusto natus, unde vero? Quae, dolorum.
                    </div>
                    <div className="blog_btn">
                    <button className="blog_link">Explore More</button>
                    </div>
            
            </div>
            <div className="blog active">
            <div className="blog_pics1">
                    <img src={Blog1} alt="house"/>
                </div>
                <div className="tink">
                    <div className="round one"></div>
                    <div className="lines">
                    <div className="calendar">
                            {date}
                        </div>
                    </div>
                   
                </div>
                <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere debitis sit dolorem labore quidem adipisci doloribus, facilis fugiat velit possimus tenetur doloremque, itaque quaerat iusto natus, unde vero? Quae, dolorum.
                    </div>
                    <div className="blog_btn">
                    <button className="blog_link">Explore More</button>
                    </div>
            </div>
            <div className="blog active">
            <div className="blog_pics2">
                    <img src={Blog1} alt="house"/>
                </div>
                <div className="tink">
                    <div className="round"></div>
                    <div className="lines">
                        <div className="calendar">
                            {date}
                        </div>
                    </div>
                </div>
                <div className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere debitis sit dolorem labore quidem adipisci doloribus, facilis fugiat velit possimus tenetur doloremque, itaque quaerat iusto natus, unde vero? Quae, dolorum.
                    </div>
                    <div className="blog_btn">
                    <button className="blog_link">Explore More</button>
                    </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Blog