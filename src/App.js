import Register from './pages/Register';
import RegisterCompleted from './pages/RegisterCompleted';

const { Switch, Route } = require("react-router-dom");

function App() {
    return(
        <div>
            <Switch>
                <Route path="/cadastro">
                    <Register />
                </Route>
                <Route path="/cadastro-concluido">
                    <RegisterCompleted />
                </Route>
            </Switch>
        </div>
    );
}

export default App;