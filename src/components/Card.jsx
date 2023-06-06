
const Card=({data,deletepost})=>{
    return (
        <div className="card">
            <h4> {data.category}</h4>
            
            <p> {data.description}</p>

            <button onClick={()=>(deletepost(data.id))}> delete me </button>
        </div>
    )
}
export default Card;