import React from 'react';
import Navbar from '../components/ui/Navbar'

const CookingMode = () => {
    return (
        <div className="pre">
            <Navbar />
            <div className="cooking-mode">
                <div className="cooking-body">
                    <div className="head-info">
                        <button className="close"><span className="left"></span><span className="right"></span><span className="text">Back to Recipe</span></button>
                        <div>
                            <p>Cooking Mode</p>
                            <span><img src={require('../assets/img/timer.png')}/>00:12</span>
                        </div>
                    </div>
                    <p className="main-heading">Oven-Baked White Wine Goulash</p>
                    <div className="recipe-video">
                        <video src={require('../assets/video/vid.mp4')} type="video/mp4" controls></video>
                        
                    </div>
                    <div className="steps">
                        <div className="head-links">
                            <span>Steps</span>
                            <a>View Ingredients</a>
                        </div>
                        <div className="each-step">
                            <div className="bullet">1</div>
                            <span className="text">Heat a Belgian waffle iron.</span>
                        </div>
                        <div className="each-step">
                            <div className="bullet">2</div>
                            <span className="text">Mix the flour, sugar, and baking powder together in a mixing bowl. Stir in 1 cup eggnog, butter, and the egg until well blended. Add more eggnog if needed to make a pourable batter.</span>
                        </div>
                        <div className="each-step">
                            <div className="bullet">3</div>
                            <span className="text">Lightly grease or spray the waffle iron with non-stick cooking spray. Pour some batter onto the preheated waffle iron, close the top, and cook until golden brown and crisp on both sides. Waffles are usually cooked with steam subsides. Transfer waffles to a serving plate, and keep warm.</span>
                        </div>
                        <div className="each-step">
                            <div className="bullet2">4</div>
                            <span className="text2">Meanwhile, place the raspberry preserves in a pan, and heat over medium heat until pourable.</span>
                        </div>
                        <div className="each-step">
                            <div className="bullet2">5</div>
                            <span className="text">To serve, drizzle raspberry preserves over each waffle, and top with raspberries. If desired, add a dollop of whipped cream to each waffle.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CookingMode;
