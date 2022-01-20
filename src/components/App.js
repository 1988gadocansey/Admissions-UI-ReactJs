import '../App.css';
import Home from "./Home";
import {BrowserRouter, Route} from 'react-router-dom'
import Form from "./Form";
import PictureUpload from "./PictureUpload";
import ResultUpload from "./ResultUpload";
import PrintPreview from "./PrintPreview";
import Index from "./layouts/Index";

function App() {
    return (

        <div className="App">
            <BrowserRouter>
                <div>
                    <Index>
                        <Route path="/" exact={true} component={Home}/>
                        <Route path="/pictureUpload" component={PictureUpload}/>
                        <Route path="/form/fill" component={Form}/>
                        <Route path="/resultUpload" component={ResultUpload}/>
                        <Route path="/preview" component={PrintPreview}/>
                    </Index>
                </div>
            </BrowserRouter>

        </div>


    );
}

export default App;
