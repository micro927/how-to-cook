import { css } from '@emotion/react'
import { useAppContext, Recipe } from './AppContextProvider'
import SearchForm from './SearchForm'

function WelcomeSection() {

    const { searchRecipesResult, isRecipesSearching, setSelectedRecipe, isInformationLoaded } = useAppContext()

    function handleClickRecipe(recipe: Recipe) {
        setSelectedRecipe(recipe)
    }
    return (
        !isInformationLoaded ? <section className='transition-all duration-500'>
            <div className='container mx-auto'>
                <SearchForm />
                {isRecipesSearching ?
                    <>
                        <h1 className='text-center text-white text-3xl mt-10 animate-bounce'>Looking For Recipe.....</h1>
                    </>
                    : <div className='grid grid-cols-2  md:grid-cols-5 gap-4'>
                        {searchRecipesResult.map((recipe) => {
                            return (
                                <div key={recipe.id} className='relative group hover:scale-110 transition duration-500 cursor-pointer shadow-xl' onClick={() => handleClickRecipe(recipe)}>
                                    <img
                                        title={recipe.title}
                                        src={recipe.image}
                                        alt={recipe.title}
                                        className='object-cover w-full h-[200px] rounded-xl' />
                                    <div className='visible md:invisible group-hover:md:visible absolute top-0 w-full h-full bg-opacity-40 sm:bg-opacity-60 bg-gray-500 rounded-xl'>
                                        <div className="flex w-full h-full justify-center items-center p-6">
                                            <p className='group-hover:scale-110 text-center font-bold italic text-xl text-white'>{recipe.title}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </section> : <></>
    );
}

export default WelcomeSection;