import React from 'react';
import Navbar from '../components/ui/Navbar';
import SearchPageRecipeCard from '../components/ui/SearchPageRecipeCard';
import DoubleRangeSlider from '../components/ui/DoubleRangeSlider';
const Search = () => {
    const [val1, setVal1] = React.useState(8)
    const [doubleVal1, setDoubleVal1] = React.useState(5)
    const [doubleVal2, setDoubleVal2] = React.useState(14)
    const update = (event) => {
        const value = event.target.value;
        setVal1(value)
    }
    const updateDoubleVal1 = (event) => {
        const value = event.target.value;
        setDoubleVal1(value)
    }
    const updateDoubleVal2 = (event) => {
        const value = event.target.value;
        setDoubleVal2(value)
    }
    return (
        <div>
            <Navbar/>
            <div className="search">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="search-filters">
                                <div className="heading">
                                    <p>Search Filters</p>
                                    <button>
                                        <span className="s1"></span>
                                        <span className="s2"></span>
                                        <span className="s3"></span>
                                        <span className="s4"></span>
                                        <span className="s5"></span>
                                        <span className="s6"></span>
                                    </button>
                                </div>
                                <div className="slider-selector">
                                    <div className="slider-head">
                                        <p>Ingredients</p>
                                        <span>{val1}</span>
                                    </div>
                                    <div className="custom-slide">
                                        <div className="front">
                                            <input type="range" min="1" max="20" class="slider-front" value={val1} onChange={e => update(e)} id="myRange1"/>
                                        </div>
                                        <div className="back">
                                            <input type="range" min="1" max="20" class="slider-back" value={val1} onChange={e => update(e)} id="myRange1"/>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="slider-selector">
                                    <div className="slider-head">
                                        <p>Serving Time</p>
                                        <span>15-36 mins</span>
                                    </div>
                                    <DoubleRangeSlider />
                                    {/* <div className="double-slider">
                                        <input type="range" className="first-front" min="1" max="20" value={doubleVal1} onChange={e => updateDoubleVal1(e)} id="myRange"/>
                                        <input type="range" className="first-back" min="1" max="20" value={doubleVal1} onChange={e => updateDoubleVal1(e)} id="myRange"/>
                                        <input type="range" className="second-front" min="1" max="20" value={doubleVal2} onChange={e => updateDoubleVal2(e)} id="myRange"/>
                                        <input type="range" className="second-back" min="1" max="20" value={doubleVal2} onChange={e => updateDoubleVal2(e)} id="myRange"/>
                                    </div> */}
                                </div>
                                <div className="checkbox-search">
                                    <span>Search for</span>
                                    <div className="options">
                                        <input type="checkbox" id="search-option1"/>
                                        <label for="search-option1">298 recipes</label>
                                        <input type="checkbox" id="search-option2"/>
                                        <label for="search-option2">70 profiles</label>
                                        <input type="checkbox" id="search-option3"/>
                                        <label for="search-option3">326 tags</label>
                                    </div>
                                </div>
                                <div className="filter-button">
                                    <button className="green-button">Apply Filter</button>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-12">
                            <div className="right">
                                <div className="trending">
                                    <div className="heading">
                                        <p className="head">Trending Recipe</p>
                                        <a className="link">See all trending</a>
                                    </div>
                                    <div className="trending-recipe">
                                        <SearchPageRecipeCard name="Banana and Mandarin Buns" />
                                        <SearchPageRecipeCard name="Coconut Pound Cake" />
                                        <SearchPageRecipeCard name="Cardamom and Cranberry Pastry" />
                                        <SearchPageRecipeCard name="Dried Basil & Mint Bear" />
                                        <SearchPageRecipeCard name="Blanched Lime Snapper" />
                                    </div>
                                </div>
                                <hr/>
                                <div className="classify">
                                    <div className="heading">
                                        <p className="head">What can I make with..</p>
                                        <a className="link">See all Top Ingredients</a>
                                    </div>
                                    
                                    <div className="categories">
                                        <div className="bottom-line"></div>
                                        <input type="checkbox" id="ingredient1" checked/>
                                        <label for='ingredient1'>Potato</label>

                                        <input type="checkbox" id="ingredient2" />
                                        <label for='ingredient2'>Tomato</label>

                                        <input type="checkbox" id="ingredient3" />
                                        <label for='ingredient3'>Pumpkin</label>

                                        <input type="checkbox" id="ingredient4" />
                                        <label for='ingredient4'>Banana</label>

                                        <input type="checkbox" id="ingredient5" />
                                        <label for='ingredient5'>Beef</label>

                                        <input type="checkbox" id="ingredient6" />
                                        <label for='ingredient6'>Seaweed</label>
                                    </div>
                                    
                                    <div className="trending-recipe">
                                        <SearchPageRecipeCard name="Banana and Mandarin Buns" />
                                        <SearchPageRecipeCard name="Coconut Pound Cake" />
                                        <SearchPageRecipeCard name="Cardamom and Cranberry Pastry" />
                                        <SearchPageRecipeCard name="Dried Basil & Mint Bear" />
                                        <SearchPageRecipeCard name="Blanched Lime Snapper" />
                                    </div>
                                </div>
                                <hr/>
                                <div className="suggestions">
                                    <div className="heading">
                                        <p className="head">Top Profiles</p>
                                        <a className="link">See all Top Profiles</a>
                                    </div>
                                    <div className="cards-fs">
                                        <div className="card-fs">
                                            <div className="bg-image">
                                                <img src={require('../assets/img/postImage.jpg')} alt="background"/>
                                                <div  className="userImage"><img src={require('../assets/img/user.jpg')} alt="user"/></div>
                                            </div>
                                            <div className="body">
                                                <p className="name">Naomí Yepes</p>
                                                <div className="stats">
                                                    <div>
                                                        <p className="count">289</p>
                                                        <p className="field">recipes</p>
                                                    </div>
                                                    <div>
                                                        <p className="count">8k</p>
                                                        <p className="field">followers</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-fs">
                                            <div className="bg-image">
                                                <img src={require('../assets/img/postImage.jpg')} alt="background"/>
                                                <div  className="userImage"><img src={require('../assets/img/user.jpg')} alt="user"/></div>
                                            </div>
                                            <div className="body">
                                                <p className="name">Nieek Bove</p>
                                                <div className="stats">
                                                    <div>
                                                        <p className="count">289</p>
                                                        <p className="field">recipes</p>
                                                    </div>
                                                    <div>
                                                        <p className="count">8k</p>
                                                        <p className="field">followers</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-fs">
                                            <div className="bg-image">
                                                <img src={require('../assets/img/postImage.jpg')} alt="background"/>
                                                <div  className="userImage"><img src={require('../assets/img/user.jpg')} alt="user"/></div>
                                            </div>
                                            <div className="body">
                                                <p className="name">Nieek Bove</p>
                                                <div className="stats">
                                                    <div>
                                                        <p className="count">289</p>
                                                        <p className="field">recipes</p>
                                                    </div>
                                                    <div>
                                                        <p className="count">8k</p>
                                                        <p className="field">followers</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-fs">
                                            <div className="bg-image">
                                                <img src={require('../assets/img/postImage.jpg')} alt="background"/>
                                                <div  className="userImage"><img src={require('../assets/img/user.jpg')} alt="user"/></div>
                                            </div>
                                            <div className="body">
                                                <p className="name">Nieek Bove</p>
                                                <div className="stats">
                                                    <div>
                                                        <p className="count">289</p>
                                                        <p className="field">recipes</p>
                                                    </div>
                                                    <div>
                                                        <p className="count">8k</p>
                                                        <p className="field">followers</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
