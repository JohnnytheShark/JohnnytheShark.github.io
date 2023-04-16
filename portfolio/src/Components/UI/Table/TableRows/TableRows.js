import React, {useState,useEffect} from 'react';
import styles from '../Table.module.scss';

/**
 * Component that maps data to either headers or table based on the data coming in
 * @param {*} Props containing either Type, Data, Key, Function to Rows, and row styles
 * @returns Table Headers or Table Rows depending on what is given to it. 
 * Making Changes to the schema
 */
const TableRows = ({Data,Type,Key,passDownFunction})=>{
    const [loading,toggleLoading] = useState(true);
    const [data,updateData] = useState("");
    const [newArray, updateNewArray] = useState([]);
    const [type, updateType] = useState("");
    const [key, updateKey] = useState("");
    const [active,updateSelection] = useState({});

    useEffect(()=>{
        updateKey(Key);
        updateData(Data);
        updateType(Type);
        toggleLoading(false);
        if (Type === 'Body'){
            updateSelection(rowEnumerator(Data));
        }
    },[Data,Type,Key]);


    const rowEnumerator= (dataSet) =>{
        let items = {}
        for (let i = 0; i < dataSet.length; i++){
            items[i] = false;
        }
        return items;
    }

    useEffect(()=>{
        const updateRowStyle=(i)=>{
            let value = !active[i];
            updateSelection({...active,[i]:value});
        }

        if (Type === 'Body'){
            if (Data.length > 1 && Key == null){
                let items = [];
                for (let i = 0; i< Data.length; i++){
                    let values = Object.values(Data[i]);
                    let mapped = values.map((element,index)=><td key={index}>{element||0}</td>)
                    items.push(<tr className={active[i] === true ? `${styles.active}` : ""} onClick={()=>{updateRowStyle(i); passDownFunction ? passDownFunction(Data[i]) : void(0)}} key={i}>{mapped}</tr>);
                }
                updateNewArray(items);
            }
            else if (Data.length === 1 && Key == null){
                let values = Object.values(Data[0]);
                let mapped = values.map((element,index)=><td key={index}>{element||0}</td>)
                updateNewArray(<tr onClick={()=>{passDownFunction ? passDownFunction(Data[0]) : void(0)}}>{mapped}</tr>);
            }
            else if (Data.length > 1 && Key != null){
                let items = []
                for (let i = 0; i < Data.length;i++ ){
                    let values = Object.values(Data[i][Key]);
                    let mapped = values.map((element,index)=><td key={index}>{element}</td>)
                    items.push(<tr onClick={()=>{updateRowStyle(i);passDownFunction ? passDownFunction(Data[i]) : void(0)}}>{mapped}</tr>)
                }
                updateNewArray(items);
            }
            else if (Data.length === 1 && Key != null){
                let values = Object.values(Data[0][Key]);
                let mapped = values.map((element,index)=><td key={index}>{element}</td>)
                updateNewArray(<tr className={active === true ? `${styles.active}`:""} onClick={()=>{ passDownFunction ? passDownFunction(Data[0][Key]) : void(0)}}>{mapped}</tr>);
            }
        }
    },[active,Data,Key,Type,passDownFunction]);

    let headers = type === "Header" && typeof data == "object" ? Object.keys(data).map((element,index)=><th key={index}>{element.replace(/[A-Z]/g, ' $&').trim().toUpperCase()}</th>):"";
    let body = <tr><td>No Data Found</td></tr>;
    if (type === "Body"){
        body = key === "" && data.length === 1 ? Object.values(data[0]).map((element,index)=><td key={index}>{element||0}</td>) : data.length > 1 ? [newArray] : <tr><td>No Data Found</td></tr>;
    }
    let tableInformation = type === "Header" ? <thead><tr>{headers}</tr></thead> : type === "Body" ?  <tbody>{body}</tbody> : <tbody><tr><td>No Data Found</td></tr></tbody>;
    let context = loading ?  "" : tableInformation ;

    return context
}
export default TableRows;