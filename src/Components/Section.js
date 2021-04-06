import React from 'react'
import "./Section.css"

function Section() {
    return (
        <div className="section">
            <div className="user__details">
                <img src="https://cdn.dribbble.com/users/4189231/avatars/small/beac5382e2629adcd8f3bdfa68994fe5.jpg?1570110577"
                    className="avatar"
                />
                <div className="user__cred">
                    <span className="avatar__title">Food Order- Mobile App</span><br/>
                    <span className="avatar__desc">Anastasia Follow Hire Me</span>
                </div>

                <div className="sec__right">
                    <button>Save</button>
                    <button>Like</button>
                </div>
            </div> 

            <div className="food__container">
                <img src="https://cdn.dribbble.com/users/4189231/screenshots/13670318/media/92bd341d856ffe69e08d7ebb392d798c.png?compress=1&resize=300x225" 
                    className="food__image"
                />
                <p>Hi friends!<br/>
                Some other screens from the food delivery app we are working on. 
                Hope you enjoyed it! Thanks for your likes and comments!<br/>
                Wanna create something great?
                        Feel free contact us - tino.agency@gmail.com
                </p>
            </div>

            <div className="testimonial">
                <div className="test__container">
                    <img src="https://cdn.dribbble.com/users/4189231/avatars/small/beac5382e2629adcd8f3bdfa68994fe5.jpg?1570110577"
                        className="testi__avatar"
                    />
                    <h1 className="testi__title">Anastasia</h1>
                    <p className="testi__desc">UI/UX Design and development</p>
                    <button className="hire__button">Hire me</button>
                </div>
            </div>

            <div className="work__sec">
                <div><h3>More by Anastasia</h3></div>
                <div className="work__container">
                    <div>
                        <img className="work__img" src="https://cdn.dribbble.com/users/4189231/screenshots/14803442/media/0eaa1b6816d1a87bf51c1b9836161aad.png?compress=1&resize=300x225" />
                    </div>
                    <div>
                        <img className="work__img" src="https://cdn.dribbble.com/users/4189231/screenshots/14803442/media/0eaa1b6816d1a87bf51c1b9836161aad.png?compress=1&resize=300x225" />
                    </div>
                    <div>
                        <img className="work__img" src="https://cdn.dribbble.com/users/4189231/screenshots/13385653/media/a66ea2b5ce92c0f9592aa02c5afc674b.png?compress=1&resize=300x225" />
                    </div>
                    <div>
                        <img className="work__img" src="https://cdn.dribbble.com/users/4189231/screenshots/12581578/media/8eba507019cd34c6a24133c3ca6b0b23.jpg?compress=1&resize=300x225" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section
