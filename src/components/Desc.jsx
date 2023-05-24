import { logo } from '../assets';

const Desc = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center flex-col'>
                <img src={logo} alt='sum_logo' className='w-28 object-contain' />

                <button type='button' onClick={() => window.open('https://github.com/tcousik/Summarizer')} className='black_btn'>GitHub</button>
            </nav>
        </header >
    )
}

export default Desc