import Rings from './Title';
import ThreeColourBar from './Title';

export default function Landing() {
    return (
        <div className="bg">
            <h1>Hello World!</h1>
            <div className="box">
            <div className="title">
                <div className="overlap-group">
                    <Rings className="rings-instance" rings="image.svg" />
                    <ThreeColourBar
                        className="bar"
                        divClassName="three-colour-bar-instance"
                        rectangleClassName="three-colour-bar"
                        rectangleClassNameOverride="element-colour-bar-instance"
                    />
                    <div className="JUN-BIN-CHENG">
                        JUN&nbsp;&nbsp;BIN&nbsp;&nbsp;CHENG
                    </div>

                    <div className="text-wrapper">Software Engineer</div>
                </div>
            </div>
        </div>
        </div>
    );
}