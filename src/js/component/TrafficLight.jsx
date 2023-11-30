import React,{useState} from "react";


function TrafficLight() {

    const[red,setRed] = useState("secondary")  
    const[yellow,setYellow] = useState("secondary")
    const[green,setGreen]= useState("secondary")
        

    function rojo(){
        setRed("danger redLight")
        setYellow("secondary")
        setGreen("secondary")
    }

    function amarillo(){
        setYellow("warning yellowLight")
        setRed("secondary")
        setGreen("secondary")
    }

    function verde(){
        setGreen("success greenLight")
        setYellow("secondary")
        setRed("secondary")
    }

    
    return (
        <>
        <div className="trafficTop"></div>
            <div className="container">
                <div className={"bg-"+red+" rounded-circle "} style={{height:"100px", width:"100px"}} onClick={rojo}></div>
                <div className={"bg-"+yellow+" rounded-circle"} style={{height:"100px", width:"100px"}} onClick={amarillo}></div>
                <div className={"bg-"+green+" rounded-circle"} style={{height:"100px", width:"100px"}} onClick={verde}></div>
            </div> 
        </>
    );
};

export default TrafficLight