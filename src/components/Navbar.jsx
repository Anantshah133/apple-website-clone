import { appleImg, bagImg, searchImg } from '../utils'
import {navLists} from '../constants'

const Navbar = () => {
    return (
        <header className='w-full py-5 px-5 sm:px-10'>
            <nav className='flex w-full screen-max-width'>
                <img src={appleImg} alt="apple" width={14} height={18} />
                <div className='flex flex-1 justify-center max-sm:hidden'>
                    {
                        navLists.map((navItem, i)=>{
                            return <div key={i} className='px-5 cursor-pointer text-gray hover:text-white transition-all'>
                                {navItem}
                            </div>
                        })
                    }
                </div>
                <div className='flex gap-7 items-baseline max-sm:ml-auto'>
                    <img src={searchImg} alt="search" width={18} height={18} />
                    <img src={bagImg} alt="bag" width={18} height={18} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar