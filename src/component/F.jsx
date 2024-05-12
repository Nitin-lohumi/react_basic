function F({c,onClick,array}){
    return(
     <>
     <button onClick={onClick}>click to render the next page</button>
     <h1>{array}</h1>
     </>
    )
}
export default F;