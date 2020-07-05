import React from 'react';
import Navbar from '../components/ui/Navbar'
import ProfileStats from '../components/ui/ProfileStats'
import FeedCard from '../components/ui/FeedCard'
import LiveVideoFeed from '../components/ui/LiveVideoFeed'
import MostActiveUsers from '../components/ui/MostActiveUsers'
import FollowSuggestion from '../components/ui/FollowSuggestion'

const Feed = () => {
    const [showCreate, setShowCreate] = React.useState(false)
    const openCreate = () => setShowCreate(true)
    const closeCreate= () => setShowCreate(false)
    return (
        <div className="feed-page">
            <Navbar/>
            
            <div className="feed-bg">
                <div className="feed-body">
                    <div className="row justify-content-end">
                    
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
                                <button onClick={openCreate} >Create Recipe</button>
                            </div>
                            <br/>
                            <div className="posts">
                                <FeedCard/>
                                <FeedCard/>
                                <hr/>
                                <FollowSuggestion/>
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
            {showCreate && 
                    <div className="create-recipe">
                        <div className="form-body">
                            <button onClick={closeCreate} className="close"><span className="left"></span><span className="right"></span></button>
                            <div className="heading">Create New Recipe</div>
                            <div className="input1">
                                <span class="plus"><img src={require('../assets/img/plus.png')} alt="plus"/></span>
                                <div>
                                    <p>Recipe Name</p>
                                    <input type="text" placeholder="Write Down Recipe Name" />
                                </div>
                            </div>
                            <div className="input2">
                                <div className="head">
                                    <p>Gallery</p>
                                    <button><img src={require('../assets/img/edit.png')} alt='edit' /></button>
                                </div>
                                <div>
                                    <input type='text' placeholder="Upload Images or Open Camera"/>
                                </div>
                            </div>
                            <div className="input2">
                                <div className="head">
                                    <p>Ingredients</p>
                                    <button><img src={require('../assets/img/edit.png')} alt='edit' /></button>
                                </div>
                                <div>
                                    <input type='text' placeholder="Add Ingredient"/>
                                </div>
                            </div>
                            <div className="input2">
                                <div className="head">
                                    <p>How to Cook</p>
                                    <button><img src={require('../assets/img/edit.png')} alt='edit' /></button>
                                </div>
                                <div>
                                    <input type='text' placeholder="Add Directions"/>
                                </div>
                            </div>
                            <div className="input2">
                                <div className="head">
                                    <p>Additional Info</p>
                                    <button><img src={require('../assets/img/edit.png')} alt='edit' /></button>
                                </div>
                                <div>
                                    <input type='text' placeholder="Add Info"/>
                                </div>
                            </div>
                            <div className="instructions">
                                <p className="save">Save to</p>
                                <p className="warn">Complete the recipe to post</p>
                            </div>
                            <div className="decision">
                                <select>
                                    <option>Western(5)</option>
                                </select>
                                <button className="white-button">Save Recipe</button>
                                <button className="green-button">Post to Feed</button>
                            </div>
                        </div>
                    </div>
                }
        </div>
    );
}

export default Feed;
