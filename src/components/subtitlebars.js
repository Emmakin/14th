import React from "react";
import Button from "./button";

function subtitlebar(){
    return (
        <div style={style.subtitlebars}>
            <span>Latest in SNKRS</span>
            <div>
                <button>In Stock</button>
                <button>Upcoming</button>
            </div>
            <div>
                <label>View All</label>
                <button><</button>
                <button>></button>
            </div>
        </div>
    )
}

const style = {
    subtitlebars: {
        display: "flex",
        flex: "row",

    }
}

export default subtitlebar