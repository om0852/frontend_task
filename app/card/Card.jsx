"use client"
export default function Card({index}){
    return(
        <>
        <div  className="card" style={{width: "18rem",border:"1px solid black",height:"40vh",margin:"auto"}}>
  <img width={100} height={100} src={`https://picsum.photos/seed/${index}/200/300`} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </>
    )
}