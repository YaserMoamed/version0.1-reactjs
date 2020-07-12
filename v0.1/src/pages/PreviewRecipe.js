import React from 'react';
import Navbar from '../components/ui/Navbar'
const PreviewRecipe = () => {
    return (
        <div>
            <Navbar/>
            <div className="preview-recipe">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="left-img-upload">
                                <div className="main-image">
                                    <img src={require('../assets/img/postImage.jpg')} />
                                </div>
                                <div className="sub-images">
                                    <div className="sub-image"><img src={require('../assets/img/postImage.jpg')} alt="recipe"/></div>
                                    <div className="sub-image"><img src={require('../assets/img/postImage.jpg')} alt="recipe"/></div>
                                    <div className="sub-image"><img src={require('../assets/img/postImage.jpg')} alt="recipe"/></div>
                                    <div className="sub-image"><img src={require('../assets/img/postImage.jpg')} alt="recipe"/></div>
                                    <div className="sub-image"><img src={require('../assets/img/postImage.jpg')} alt="recipe"/></div>
                                    <div className="last-image">
                                        <span>12+</span>
                                        <div>
                                            <img src={require('../assets/img/postImage.jpg')} alt="recipe"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-12">
                            <div className="box-1">
                                <div className="sub">
                                    <span>Sautéed Orange & Mustard Bruschetta</span>
                                    <div className="save-options">
                                        <button className="white-button"><img src={require('../assets/img/edit.png')}/>Edit Recipe</button>
                                        <button className="green-button">Start Cooking</button>
                                    </div>
                                </div>
                                <hr/>
                                <div className="ingredients">
                                    <p>Ingredients</p>
                                    <div className="all-ingredients">
                                        <div className="each-ingredient">
                                            <div><img src={require('../assets/img/user.jpg')}/></div>
                                            <span>cooking spray</span>
                                        </div>
                                        <div className="each-ingredient">
                                            <div><img src={require('../assets/img/user.jpg')}/></div>
                                            <span>1/2 teaspoon vanilla extract</span>
                                        </div>
                                        <div className="each-ingredient">
                                            <div><img src={require('../assets/img/user.jpg')}/></div>
                                            <span>1/2 cup whole milk</span>
                                        </div>
                                        <div className="each-ingredient">
                                            <div><img src={require('../assets/img/user.jpg')}/></div>
                                            <span>1 pinch salt</span>
                                        </div>
                                        <div className="each-ingredient">
                                            <div><img src={require('../assets/img/user.jpg')}/></div>
                                            <span>2 large eggs1 tablespoon maple syrup</span>
                                        </div>
                                        <div className="each-ingredient">
                                            <div><img src={require('../assets/img/user.jpg')}/></div>
                                            <span>4 pieces 1/2-inch thick pieces brioche</span>
                                        </div>

                                    </div>
                                    {/* <input type="text" placeholder="Add Ingredient" /> */}
                                </div>
                            </div>
                            <div className="box-2">
                                <p>How to cook</p>
                                <div className="sub">
                                    <div className="directions">
                                        <div className="each-direction">
                                            <div className="bullet">1</div>
                                            <span>Heat a Belgian waffle iron.</span>
                                        </div>
                                        <div className="each-direction">
                                            <div className="bullet">2</div>
                                            <span>Mix the flour, sugar, and baking powder together in a mixing bowl. Stir in 1 cup eggnog, butter, and the egg until well blended. Add more eggnog if needed to make a pourable batter.</span>
                                        </div>
                                        <div className="each-direction">
                                            <div className="bullet">3</div>
                                            <span>Lightly grease or spray the waffle iron with non-stick cooking spray. Pour some batter onto the preheated waffle iron, close the top, and cook until golden brown and crisp on both sides. Waffles are usually cooked with steam subsides. Transfer waffles to a serving plate, and keep warm.</span>
                                        </div>
                                        <div className="each-direction">
                                            <div className="bullet">4</div>
                                            <span>Meanwhile, place the raspberry preserves in a pan, and heat over medium heat until pourable.</span>
                                        </div>
                                        <div className="each-direction">
                                            <div className="bullet">5</div>
                                            <span>To serve, drizzle raspberry preserves over each waffle, and top with raspberries. If desired, add a dollop of whipped cream to each waffle.</span>
                                        </div>
                                        {/* <input type="text" placeholder="Add Directions"/> */}
                                    </div>
                                    <div className="video">
                                        <video src={require('../assets/video/vid.mp4')} controls />
                                        {/* <input type="text" placeholder="Upload Video"/> */}
                                    </div>
                                </div>
                            </div>
                            <div className="box-3">
                                <p>Additional Information</p>
                                <div className="details">
                                    <div className="sub-details">
                                        <span>Serving Time</span>
                                        <p>12 Mins</p>
                                    </div>
                                    <div className="sub-details">
                                        <span>Tags</span>
                                        <p>Sweet, Coconut, Quick, Easy, Homemade</p>
                                    </div>
                                    <div className="sub-details">
                                        <span>Nutrition Facts</span>
                                        <p>222 calories<br/>
                                            6.2 g fat<br/>
                                            7.2 g carbohydrates<br/>
                                            28.6 g protein<br/>
                                            68 mg cholesterol<br/>
                                            268 mg sodium</p>
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

export default PreviewRecipe;
