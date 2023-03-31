import { createContext, useContext, useEffect, useState } from 'react';

type Recipe = {
    id: number
    title: string
    image: string
    imageType: string
    nutrition: {
        nutrients: any[],
        [index: string]: any
    }
}
type SearchRecipesResult = Recipe[] | any[]

type ingredients = {
    id: number,
    aisle: string,
    image: string,
    consistency: string,
    name: string,
    nameClean: string,
    original: string,
    originalName: string,
    amount: number,
    unit: string,
    meta: any[],
    measures: any
}

interface RecipeInformation extends Recipe {
    summary: string
    extendedIngredients: ingredients[]
    instructions: string
    [index: string]: any
}



type AppMainContext = {
    isRecipesSearching: boolean
    searchRecipesResult: SearchRecipesResult
    selectedRecipe: Recipe | undefined
    isInformationLoaded: boolean
    recipeInformation: RecipeInformation | undefined
    searchRecipes: Function
    setSelectedRecipe: Function
}


export const useProvideRecipe = () => {

    const [isRecipesSearching, setIsRecipesSearching] = useState<boolean>(false)
    const [searchRecipesResult, setSearchRecipesResult] = useState<Recipe[]>([])
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe>()
    const [isInformationLoaded, setIsInformationLoaded] = useState<boolean>(false)
    const [recipeInformation, setRecipeInformation] = useState<RecipeInformation>()

    async function searchRecipes(searchText: string) {
        setIsRecipesSearching(true)
        const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?`
            + new URLSearchParams({ query: searchText })
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
        };

        await fetch(url, options)
            .then(res => res.json())
            .then(json => {
                setSearchRecipesResult(json.results)
                setIsRecipesSearching(false)
            })
            .catch(err => console.error('error:' + err));
    }

    // function readFileToImage(imageFile: File) {
    //     let reader = new FileReader();
    //     reader.readAsDataURL(imageFile);
    //     reader.onload = r => {
    //         setSelectedImage(r.target?.result)
    //     };
    // }

    // async function readImageToMenuList() {
    //     const imageUrl = typeof selectedImage != 'string' ? '' : selectedImage
    //     const url = `https://everypixel-api.p.rapidapi.com/keywords?`
    //         + new URLSearchParams({ url: imageUrl })
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': '0ba3a7a636msh036181b0d7ff289p14b3f7jsn5ac71c2f9dd1',
    //             'X-RapidAPI-Host': 'everypixel-api.p.rapidapi.com'
    //         }
    //     };

    //     await fetch(url, options)
    //         .then(res => res.json())
    //         .then(json => {
    //             console.log(json)
    //             setMenuList(json)
    //         })
    //         .catch(err => console.error('error:' + err));
    // }


    useEffect(() => {
        if (typeof selectedRecipe !== 'undefined') {
            const selectedRecipeId = selectedRecipe?.id
            const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${selectedRecipeId}/information`
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
                    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                }
            };

            fetch(url, options)
                .then(res => res.json())
                .then(json => {
                    setRecipeInformation(json)
                    setIsInformationLoaded(true)
                })
                .catch(err => console.error('error:' + err));
        }
        else {
            setRecipeInformation(undefined)
            setIsInformationLoaded(false)
        }
    }, [selectedRecipe])

    return {
        isRecipesSearching,
        searchRecipes,
        searchRecipesResult,
        setSelectedRecipe,
        selectedRecipe,
        isInformationLoaded,
        recipeInformation,
    }
}

const AppMainContext = createContext<AppMainContext>(
    {
        isRecipesSearching: false,
        searchRecipes: () => '',
        searchRecipesResult: [],
        setSelectedRecipe: () => '',
        selectedRecipe: undefined,
        isInformationLoaded: false,
        recipeInformation: undefined,
    }
);

export const AppContextProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
    const recipe = useProvideRecipe();
    return (
        <AppMainContext.Provider value={recipe}>
            {children}
        </AppMainContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppMainContext);
};

export type { Recipe }