import './../css/style.css'
import Button from "./Button"

function Header() {
    return (
        <div className="header"> 
            <div className="header__back">
                <div className="header__main">
                    <h1 className="header__text">Crafting Worlds, Igniting Adventures</h1>
                    <p className="header__p">We design immersive games that captivate players and push creative boundaries.</p>
                    <Button text="Read about us" size="standart"/>
                </div>
            </div>
            <div className="header__circle header__circle_big_pink header__circle_big"></div>
            <div className="header__circle header__circle_small_pink header__circle_small"></div>
            <div className="header__circle header__circle_big_cyan header__circle_big"></div>
            <div className="header__circle header__circle_small_cyan header__circle_small_cyan_1 header__circle_small"></div>
            <div className="header__circle header__circle_small_cyan header__circle_small_cyan_2 header__circle_small"></div>
            <div className="header__circle header__circle_big_blue header__circle_big"></div>
            <div className="header__circle header__circle_small_blue header__circle_small"></div>
        </div>
    )
}

export default Header