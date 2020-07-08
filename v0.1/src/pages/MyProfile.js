import React from 'react';
import Navbar from '../components/ui/Navbar'
import ProfileStats from '../components/ui/ProfileStats'
import RecipeCard from '../components/ui/RecipeCard'

const MyProfile = () => {
    const [showSettings, setShowSettings] = React.useState(false)
    const openSettings = () => setShowSettings(true)
    const closeSettings= () => setShowSettings(false)
    
    
    var scrollStep = 200;
    // function below is for left right scroll behaviour
    const scroll = (direction) => {
        var content = document.getElementById("demo")
        let sl = content.scrollLeft;
        if(direction === 'right'){
            let cw = content.scrollWidth;
	
            if ((sl + scrollStep) >= cw) {
                content.scrollTo(cw, 0);
            } else {
                content.scrollTo((sl + scrollStep), 0);
            }
        }else{
            if ((sl - scrollStep) <= 0) {
                content.scrollTo(0, 0);
            } else {
                content.scrollTo((sl - scrollStep), 0);
            }
        }
        
    }
    return (
        <div className="MyProfile">
            <Navbar/>
            <div className="main">
                <div className="overlay-vertical"></div>
                <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <ProfileStats/>
                        <br/>
                        <div className="user-options">
                            <div>
                                <ul>
                                    <li><span><img src={require('../assets/img/edit.png')}/></span><button>Edit Profile</button></li>
                                    <li><span><img src={require('../assets/img/settings.jpg')}/></span><button onClick={openSettings}>Settings</button></li>
                                    <li><span><img src={require('../assets/img/logout.png')}/></span><button>Logout</button></li>
                                </ul>
                            </div>
                        </div>
                        <br/>
                        
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-12">
                        <div className="recipe-add-new">
                            <p>My Recipes</p>
                            <button>+ Add New</button>
                        </div>
                        {/* <button onClick={() => scroll('left')} className="nav-but left">left</button> */}
                        <button onClick={() => scroll('right')} className="nav-but right">
                            <span className="arrow-up"></span><span className="arrow-down"></span>
                        </button>
                        <div className="demographies" id="demo">
                            <input type="checkbox" id="type1" checked/>
                            <label for="type1" className="card-graphis">
                                {/* Hide and show faded accordingly */}
                                <div className="faded"></div>
                                <div className="image">
                                    <img src={require('../assets/img/postImage.jpg')} alt="dish"/>
                                </div>
                                <p>Western (8)</p>
                            </label>
                            <input type="checkbox" id="type2" />
                            <label for="type2" className="card-graphis">
                                {/* Hide and show faded accordingly */}
                                <div className="faded"></div>
                                <div className="image">
                                    <img src={require('../assets/img/postImage.jpg')} alt="dish"/>
                                </div>
                                <p>Italian (2)</p>
                            </label>
                            <input type="checkbox" id="type3" />
                            <label for="type3" className="card-graphis">
                                {/* Hide and show faded accordingly */}
                                <div className="faded"></div>
                                <div className="image">
                                    <img src={require('../assets/img/postImage.jpg')} alt="dish"/>
                                </div>
                                <p>Dessert (3)</p>
                            </label>
                            <input type="checkbox" id="type4"/>
                            <label for="type4" className="card-graphis">
                                {/* Hide and show faded accordingly */}
                                <div className="faded"></div>
                                <div className="image">
                                    <img src={require('../assets/img/postImage.jpg')} alt="dish"/>
                                </div>
                                <p>Chocolate (2)</p>
                            </label>
                            <input type="checkbox" id="type5"/>
                            <label for="type5" className="card-graphis">
                                {/* Hide and show faded accordingly */}
                                <div className="faded"></div>
                                <div className="image">
                                    <img src={require('../assets/img/postImage.jpg')} alt="dish"/>
                                </div>
                                <p>Soups (4)</p>
                            </label>
                            <input type="checkbox" id="type6"/>
                            <label for="type6" className="card-graphis">
                                {/* Hide and show faded accordingly */}
                                <div className="faded"></div>
                                <div className="image">
                                    <img src={require('../assets/img/postImage.jpg')} alt="dish"/>
                                </div>
                                <p>Pasta (1)</p>
                            </label>
                        </div>
                        <div className="all-recipe">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 recipie-card-align"><RecipeCard/></div>
                                <div className="col-lg-6 col-md-6 col-sm-12 recipie-card-align"><RecipeCard/></div>
                                <div className="col-lg-6 col-md-6 col-sm-12 recipie-card-align"><RecipeCard/></div>
                                <div className="col-lg-6 col-md-6 col-sm-12 recipie-card-align"><RecipeCard/></div>
                                <div className="col-lg-6 col-md-6 col-sm-12 recipie-card-align"><RecipeCard/></div>
                                <div className="col-lg-6 col-md-6 col-sm-12 recipie-card-align"><RecipeCard/></div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {showSettings && 
            <div className="form">
                <div className="form-body">
                    <button onClick={closeSettings} className="close"><span className="left"></span><span className="right"></span></button>
                    <div className="heading">Settings</div>
                    <p className="settings-heading">Email Notifications</p>
                    <div className="switchInput">
                        <span>Notify me for new followers</span>
                        <label class="switch">
                            <input type="checkbox"/>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <hr/>
                    <p className="settings-heading">Privacy Settings</p>
                    <div className="switchInput">
                        <span>Followers can see my saved recipes</span>
                        <label class="switch">
                            <input type="checkbox"/>
                            <span class="slider round"></span>
                        </label>
                    </div>

                    <div className="confirmation">
                        <p>If disabled, you won’t be able to see recipes saved by other profiles. Leave this enabled to share your collected recipes to others. <span>why this matter?</span></p>
                    </div>

                    <div className="switchInput">
                        <span>Followers can see profiles I follow</span>
                        <label class="switch">
                            <input type="checkbox"/>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <hr/>
                    <div className="switchInput">
                        <span>Change Password</span>
                        <button><img src="https://www.vippng.com/png/detail/368-3687401_right-arrow-comments-left-right-arrow-svg.png"/></button>
                    </div>

                    
                </div>
            </div>}
        </div>
    );
}

export default MyProfile;
