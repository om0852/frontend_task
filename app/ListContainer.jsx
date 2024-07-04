"use client"
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";
import Card from "./card/Card";
import "@/app/globals.css"
export default function ListContainer(){
    const renderRow = ({ index, style }) => (
        <div style={style}>
            <Card index={index} />
        </div>
    );

    

    return (
        <div style={{margin:"auto",width:"50%",height:"96vh"}}>
            
            <AutoSizer>
                {({ height, width }) => (
                    <List

                        className="List list-css"
                        height={600}
                        itemCount={100}
                        itemSize={300}
                        width={width}
                    >
                        {renderRow}
                    </List>
                )}
            </AutoSizer>
        </div>
    );
}