import './App.css'
import Panel from "./components/Panel";
import PreviewScreen from "./components/PreviewScreen";

function App() {

    return (
        <div className="flex p-3 gap-5 ">

            <Panel/>
            <PreviewScreen/>

        </div>
    )
}

export default App
