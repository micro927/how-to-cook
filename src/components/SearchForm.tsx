import { useRef } from 'react';
import { css } from '@emotion/react'
import { useAppContext } from './AppContextProvider';

const styles = css({}) // put css object here

function SearchForm() {
    const { searchRecipes } = useAppContext()
    const searchRecipesInput = useRef<HTMLInputElement>(null)

    const handleButtonSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        searchRecipes(searchRecipesInput.current?.value)
    };

    return (
        <form onSubmit={handleButtonSubmit} className='flex flex-col items-center'>
            <div className='w-full md:w-1/2'>
                <input title='searchRecipesInput' type="text" ref={searchRecipesInput} className='w-full' />
                <button type='submit'
                    className='my-5 w-full'
                    disabled={false}>
                    Search Food
                </button>
            </div>
        </form>
    );
}

export default SearchForm;