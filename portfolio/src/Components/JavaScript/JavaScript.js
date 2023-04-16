import React from 'react';
import CodeBlock from '../UI/CodeBlock/CodeBlock';

const JavaScript = ()=>{
    return (<div>
        <>
        <h3>Turning table data into a CSV file for download.</h3>
        <p>The code was developed to turn html table data into useable data in a csv. </p>
        <CodeBlock>
            &#47;&#42;&#42;<br/>
            &#42; Function to create csv download files. <br/>
            &#42; @param &#123;Object&#125; headers An object for keys to be received<br/>
            &#42; @param &#123;&#42;&#125; values A list of Objects or an array of Objects that is used to contains the data.<br/>
            &#42; @returns a temporary link to be used to download files.<br/>
            &#42;&#47;<br/>
            export const tableToCSV=&#40;headers,values&#41;=&#62;&#123;<br/>
            &nbsp;let head = Object.keys&#40;headers&#41;;<br/>
            &nbsp;let upperHeader = head.map&#40;&#40;x&#41;=&#62;&#123;return x.toUpperCase&#40;&#41;&#125;&#41;;<br/>
            &nbsp;let data;<br/>
            &nbsp;if &#40;values.length &#62; 1&#41;&#123;<br/>
            &nbsp;&nbsp;data = &#91;&#93;;<br/>
            &nbsp;&nbsp;values.forEach&#40;&#40;x&#41;=&#62;data.push&#40;Object.values&#40;x&#41;&#41;&#41;;<br/>
            &nbsp;&#125;<br/>
            &nbsp;else &#123;<br/>
            &nbsp;&nbsp;data = Object.values&#40;values&#41;;<br/>
            &nbsp;&#125;<br/>
            &nbsp;let FileDownload = &#91;&#91;...upperHeader&#93;.join&#40;","&#41;,&#91;...data&#93;.join&#40;"\n"&#41;&#93;.join&#40;"\n"&#41;;<br/>     
            &nbsp;let CSVFile = new Blob&#40;&#91;FileDownload&#93;,&#123;type:"text&#47;csv"&#125;&#41;;<br/>
            &nbsp;let url = window.URL.createObjectURL&#40;CSVFile&#41;;<br/>
            &nbsp;let temp_link = &#60;a href=&#123;url&#125;&#62;Download Data&#60;&#47;a&#62;;<br/>
                return temp_link;<br/>
                &#125;<br/>

        </CodeBlock>
            </>

    </div>)
}

export default JavaScript;