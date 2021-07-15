import { useState } from 'react';
import Register from './pages/Register';
import RegisterCompleted from './pages/RegisterCompleted';
const { Switch, Route } = require("react-router-dom");

function App() {
    const [volunteer, setVolunteer] = useState({});
    console.log(volunteer)
    return(
        <div>
            <Switch>
                <Route path="/cadastro">
                    <Register setVolunteer={setVolunteer} />
                </Route>
                <Route path="/cadastro-concluido">
                    <RegisterCompleted volunteer={volunteer} />
                </Route>
            </Switch>
        </div>
    );
}

export default App;