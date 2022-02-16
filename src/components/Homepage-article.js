import React from 'react';

function HomepageArticle( {image, title, content, link, clickname, idart, idimg }) {
    return (
        <article className="grid-item" id={idart}>
            <img src={image} alt={title} id={idimg} />
                <h4 className="title">{title}</h4>
                <p className="content">
                    {content}
                    <a href={link} target="_blank"  rel="noreferrer">{clickname}</a>
                </p>
        </article>
);
}

export default HomepageArticle;
