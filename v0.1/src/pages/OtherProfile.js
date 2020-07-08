import React from 'react';
import Navbar from '../components/ui/Navbar'
import OtherProfileStats from '../components/ui/OtherProfileStats'
import RecipeCard from '../components/ui/RecipeCard'

const OtherProfile = () => {
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
        <div className="OtherProfile">
            <Navbar/>
            <div className="main">
                <div className="overlay-vertical"></div>
                <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <OtherProfileStats/>
                        <br/>
                        
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-12">
                        <div className="recipe-add-new">
                            <p>Laquita’s Recipes</p>
                            <button><div></div><div></div><div></div></button>
                        </div>
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
        </div>
    );
}

export default OtherProfile;
