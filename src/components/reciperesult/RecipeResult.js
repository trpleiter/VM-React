import React from "react";
import styles from "./RecipeResult.module.css";

function RecipeResult ({picture1, name1, picture2, name2, picture3, name3, picture4, name4}) {
    return (
        <div className={styles.recipeResults}>
            <section>
                <h4>{picture1}</h4>
                <p>{name1}</p>
            </section>
            <section>
                <h4>{picture2}</h4>
                <p>{name2}</p>
            </section>
            <section>
                <h4>{picture3}</h4>
                <p>{name3}</p>
            </section>
            <section>
                <h4>{picture4}</h4>
                <p>{name4}</p>
            </section>
        </div>
    )
}

export default RecipeResult