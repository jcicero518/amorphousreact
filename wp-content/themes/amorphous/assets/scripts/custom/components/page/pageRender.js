import React from "react";
import PropTypes from "prop-types";

const PageRender = ({page}) => {
    console.log(page, 'page');
    return (
        <div>
            <h2>{page.title.rendered}</h2>
        </div>
    )
};

export default PageRender;