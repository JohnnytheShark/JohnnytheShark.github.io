/**
* Function to create csv download files.
* @param {Object} headers An object for keys to be received
* @param {*} values A list of Objects or an array of Objects that is used to contains the data.
* @returns a temporary link to be used to download files.
*/
export const tableToCSV=(headers,values)=>{
    let head = Object.keys(headers);
    let upperHeader = head.map((x)=>{return x.toUpperCase()});
    let data;
    if (values.length > 1){
     data = [];
     values.forEach((x)=>data.push(Object.values(x)));
    }
    else {
     data = Object.values(values);
    }
    let FileDownload = [[...upperHeader].join(","),[...data].join("\n")].join("\n");
    let CSVFile = new Blob([FileDownload],{type:"text/csv"});
    let url = window.URL.createObjectURL(CSVFile);
    let temp_link = <a href={url}>Download Data</a>;
   return temp_link;
   }