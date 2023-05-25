import { logo } from '../assets';

const Desc = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img src={logo} alt='sum_logo' className='w-28 object-contain' />

                <button type='button' onClick={() => window.open('https://github.com/tcousik/Summarizer')} className='black_btn'>GitHub</button>
            </nav>

            <h1 className='head_text'>Summarize articles with <br className='max-md:hidden' />
                <span className='orange_gradient'>OpenAI GPT-4</span></h1>
            <h2 className='desc'>This application reads and summarizes articles for you!</h2>
        </header >
    )
}

export default Desc