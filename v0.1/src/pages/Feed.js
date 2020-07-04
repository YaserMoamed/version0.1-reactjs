import React from 'react';
import ProfileStats from '../components/ui/ProfileStats'
import FeedCard from '../components/ui/FeedCard'
import LiveVideoFeed from '../components/ui/LiveVideoFeed'
import MostActiveUsers from '../components/ui/MostActiveUsers'

const Feed = () => {
    return (
        <div style={{background:'#E5E5E5'}}>
            <div className="feed-body">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <ProfileStats/>
                        <br/>
                        <div className="top5">
                            <div className="heading">Top 5 Recipe today</div>
                            <div>
                                <ul>
                                    <li>Tea-Smoked Creamy Chicken</li>
                                    <li>Pickled Savory Tortilla</li>
                                    <li>Stuffed Basil & Mint Salmon</li>
                                    <li>Strawberry Jelly</li>
                                    <li>Cinnamon and Lime Toffee</li>
                                </ul>
                            </div>
                        </div>
                        <br/>
                        
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-12">
                        <div className="onlineInfo">
                            <span>286 of your followers are online</span>
                            <button>Create Recipe</button>
                        </div>
                        <br/>
                        <div className="posts">
                            <FeedCard/>
                            <FeedCard/>
                            <hr/>
                            <FeedCard/>
                        </div>
                        <br/>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <LiveVideoFeed/>
                        <br/>
                        <MostActiveUsers/>
                        <br/>
                        <div className="moreinfo">
                            <div className="links">
                                <a>About Us</a>
                                <a>Help Center</a>
                                <a>Privacy Policy</a>
                            </div>
                            <span>© scratch by Invision 2019</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feed;
