
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import {  useState } from "react"


const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('')
   

    return (
        <div className="flex items-center rounded-lg m-2 ps-4 border-sky-900 border-2 h-8 bg-white">
            <input
                type="search"
                value={searchValue}
                id="searchbox"
                placeholder='Pesquisa'
                className='focus:outline-none border-r pe-3'
                onChange={({ target }) => setSearchValue(target.value)}
            />
           
            <button type="submit"
                className="search_button">
                <MagnifyingGlassIcon className="h-4 w-4 text-cyan-950 m-4	hover:scale-125 ease-in duration-100" />
            </button>
        </div>
    )
}

export { SearchBar }