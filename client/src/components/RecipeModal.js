import React, { Component, useContext } from 'react';
import { GlobalStoreContext } from '../store'

function RecipeModal(){
    const {store} = useContext(GlobalStoreContext);
    console.log("generate recipe modal?"+store.generateRecipe)
    let name=""
    let imageurl=""
    let url=""
    if(store.generateRecipe){
        name=store.chosenRecipe.name
        // time=store.chosenRecipe.time
        imageurl=store.chosenRecipe.imageurl
        url=store.chosenRecipe.url
    }

    function handleCloseModal(){
        store.hideRecipeModal()
    }

    return(
        <div
            className='modal'
            id="recipe-modal"
        >
                <img src={imageurl} alt="Sesame Peanut Noodles" class="recipe-image"/>
                <h4 class="recipe-name"><a href={url} target="_blank" rel="noreferrer noopener">{name}</a></h4>
                <input type="button" class="close-modal" onClick={handleCloseModal} value='Close'/>
        </div>
    )
}
export default RecipeModal