import { useAppContext } from "./AppContextProvider";


function InformationSection() {
    const { recipeInformation, isInformationLoaded, setSelectedRecipe } = useAppContext()
    const instructionText = recipeInformation?.instructions ?? ""
    const instructionList = (instructionText.trim()).split(".").map(instruction => instruction.trim())
    function backToSearch() {
        setSelectedRecipe(undefined)
    }
    return (
        isInformationLoaded && typeof recipeInformation !== 'undefined' ? <section>
            <div className=' mx-auto min-h-[75vh] bg-neutral-800 bg-opacity-80 rounded-3xl p-6 md:px-36 md:py-14 text-slate-100'>
                <h1 className="text-2xl md:text-4xl text-white text-center mb-5 md:mb-11">
                    {recipeInformation?.title}
                </h1>
                <div className="flex flex-wrap md:flex-nowrap gap-16  mb-5 md:mb-11">
                    <div className="md:w-1/3">
                        <img
                            title={recipeInformation.title}
                            src={recipeInformation.image}
                            alt={recipeInformation.title}
                            className='object-cover w-full h-full rounded-xl' />
                    </div>
                    <div className="md:w-3/4">
                        <p className="text-sm md:text-lg indent-12 text-justify" dangerouslySetInnerHTML={{ __html: recipeInformation.summary }} />
                    </div>
                </div>
                <h1 className="text-2xl md:text-4xl text-white text-center mb-5 md:mb-11">
                    Ingredients
                </h1>
                <div className="md:columns-3 mb-5 md:mb-11">
                    {recipeInformation.extendedIngredients.map((ingredient) => {
                        return (
                            <div key={ingredient.id} className="my-2">
                                <img
                                    title={ingredient.name}
                                    src={'https://spoonacular.com/cdn/ingredients_100x100/' + ingredient.image}
                                    className="w-7 h-7 me-3 inline bg-white rounded-full"
                                />
                                <span className="me-2 capitalize text-xs sm:text-base">{ingredient.nameClean}</span>
                                <span className="me-2 text-xs sm:text-xl text-orange-600">{ingredient.amount}</span>
                                <span className="me-2 text-xs sm:text-sm text-orange-100">{ingredient.unit}</span>
                            </div>
                        )
                    })}
                </div>
                <h1 className="text-2xl md:text-4xl text-white text-center mb-5 md:mb-11">
                    Instructions
                </h1>
                <div className="mb-5 md:mb-11 text-sm md:text-base">
                    <ul className="my-2">
                        {
                            instructionList.map((instruction, key) => {
                                return (
                                    instruction !== "" ? <li key={key} className="me-2 capitalize list-disc">{instruction}</li> : <></>
                                )
                            })}
                    </ul>
                </div>
                <div className="w-full justify-center text-center">
                    <button type="button" className="text-sm p-4 w-full md:w-1/2" onClick={backToSearch}>Back to Search Result</button>
                </div>
            </div>
        </section > : <></>
    );
}

export default InformationSection;