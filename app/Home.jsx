import Card from "./card/Card";
import "@/app/globals.css"
export default function HomePage(){
    const arr=Array(10000).fill(0);

    return(
        <>
        <div className="container">
            {
arr.map((data,index)=>{
return(
    <Card index={index}/>
) 
})
            }
        </div>
        </>
    )
}