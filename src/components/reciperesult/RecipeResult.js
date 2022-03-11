// import React, { useState, useEffect } from "react";
// import styles from "./RecipeResult.module.css";
// import axios from "axios";
//
// function RecipeResult ({ leftover }) {
//     const [recipes, setRecipes] = useState([]);
//
//     useEffect(() => {
//         async function fetchRecipe() {
//             try {
//                 const result = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${leftover}&apiKey=f7b5d72783cd4b168e57cc54e500f7ed`);
//                 console.log(result.data);
//                 setRecipes(result.data);
//             } catch (e) {
//                 console.error(e);
//             }
//         };
//
//         if (leftover) {
//             fetchRecipe();
//         }
//
//     }, [leftover]);
//
//     return (
//         <div className={styles.recipeResults}>
//                 {recipes.map((infoRecipes) => {
//                     return(
//                         <article key={infoRecipes.id}>
//                             <h4>{infoRecipes.title}</h4>
//                             <img className="recipeimg" src={infoRecipes.image} alt="recipe"/>
//                         </article>
//                     )
//                 })}
//         </div>
//     )
// }
//
// export default RecipeResult