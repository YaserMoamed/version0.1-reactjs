import React from 'react';
import Navbar from '../components/ui/Navbar'
const EditRecipe = () => {
    return (
        <div>
            <Navbar/>
            <div className=" edit-recipe">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="left-img-upload">
                                <button>Upload Images</button>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-12">
                            <div className="box-1">
                                <div className="sub">
                                    <div className="sub1">
                                        <p className="box-1-head">Recipe Name</p>
                                        <input type="text" placeholder="Write Recipe Name Here"/>
                                    </div>
                                    <div className="sub2">
                                        <p className="box-1-head">Save to</p>
                                        <div className="save-options">
                                            <select>
                                                <option>Western (5)</option>
                                            </select>
                                            <button className="white-button">Save Recipe</button>
                                            <button className="green-button">Post to Feed</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="ingredients">
                                    <p>Ingredients</p>
                                    <input type="text" placeholder="Add Ingredient" />
                                </div>
                            </div>
                            <div className="box-2">
                                <p>How to cook</p>
                                <div className="sub">
                                    <div className="directions">
                                        <input type="text" placeholder="Add Directions"/>
                                    </div>
                                    <div className="video">
                                        <input type="text" placeholder="Upload Video"/>
                                    </div>
                                </div>
                            </div>
                            <div className="box-3">
                                <p>Additional Information</p>
                                <div className="details">
                                    <div><span>Serving Time</span><input type="text"/></div>
                                    <div><span>Tags</span><input type="text"/></div>
                                    <div><span>Nutrition Facts</span><input type="text"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditRecipe;
