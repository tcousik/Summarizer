import Desc from './components/Desc';
import Demo from './components/Demo';
import './App.css';

const App = () => {
    return (
        <main>
            <div className='main'>
                <div className='gradient' />
            </div>

            <div className='app'>
                <Desc />
                <Demo />
            </div>
        </main>
    )
}

export default App