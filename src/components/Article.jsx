import React from"react";

function Article() {
    return (
   <article  style={{ marginBttom:"4rem", borderBottom: "1px solid lightgray", paddingBottom: "2rem"}} >
    <h2 style={{fontSize: "2rem"}}>Blog </h2>
    <p style={{textIndent: "2rem"}}>
    <span style={{fontSize: "3rem",color: "lightgray", float: "left", marginRight:"0,5rem"}}>lorem</span>
</p>
<a href="#continue" style={{color:"tomato", fontWeight: "bold", float:"right"}}>continue...</a>
   </article>
    );
}
export default Article;