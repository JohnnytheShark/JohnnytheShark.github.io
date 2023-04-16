import React from 'react';
import CodeBlock from '../UI/CodeBlock/CodeBlock';

const PowerShell = ()=>{
    return (<div>
        <>
        <h3>Remove Users</h3>
        <p>The following script was one that I developed to remove any users that were inactive on a server. It would run daily in the mornings using task scheduler.</p>
        <CodeBlock>
            &lt;&#35;<br/> 
            Written By: Jonathan Orellana orellanajonathan7@gmail.com<br/>
            Last Updated: 10/25/2022<br/>
            Purpose: The purpose behind the script is to check users logged on the production server to see if any users have a status of "Disconnected"
            it will then logoff the users that are in that status.<br/> 
            Schedule: Daily 8:00am on task scheduler.<br/>    
            &#35;&gt;<br/>

            &#35; Function used to logoff disconnected users <br/>
            Function Disconnect-DisconnectedUsers &#123;<br/>
            &#35; The function first queries the users on the server then trims the lines and selects everything but the headers<br/>
            &#35; From there we replace all lines that are null with a , to ensure that are delimiters worked correctly.<br/>
            &#35; Then we turned it into a comma delimited once nulls were taken care of. <br/>
            &#35; Then we convert from a string to an object giving it headers Username, Sessionname, ID, State, IdleTime, and LogonTime<br/>
            &#35; We only select the necessary data, ID, UserName, and State<br/>
            &#35; We select the users that have a state of Disc or something to the like of disconnected<br/>
            &#35; We then write their names to host line replacing "&gt;" that was left earlier and logoff the users that are in the status of disconnected.<br/>
            quser|Select-Object -skip 1 &#96;<br/>
            | ForEach-Object &#123;&#36;_.Trim() -replace '\s&#123;20,&#125;',',,'&#125; &#96;<br/>
            | ForEach-Object &#123;&#36;_ -replace "\s&#123;2,&#125;", ","&#125;&#96;<br/>
            | ConvertFrom-String -Delimiter "," -PropertyNames UserName, Sessionname,ID,State,IdleTime,LogonTime &#96;<br/>
            | Select-Object ID,State,UserName &#96;<br/>
            | Where-Object &#123;&#36;_.State -like '&#42;Disc&#42;'&#125; &#96;<br/>
            | ForEach-Object &#123;<br/>
            &#36;User = &#36;_.UserName.Replace("&gt;","")<br/>
            Write-Host &#36;User<br/>
            logoff &#36;_.ID&#125;<br/>
            &#125;<br/>

            &#35; We call the function here<br/>
            Disconnect-DisconnectedUsers
        </CodeBlock>
            <h3>Permissions</h3>
            <p>Simple script to run in powershell to see the folder's permissions of the current working directory</p>
            <CodeBlock>
            (get-acl (get-location)).access | ft IdentityReference,FileSystemRights,AccessControlType, IsInherited, InheritanceFlags
            </CodeBlock>
            </>

    </div>)
}

export default PowerShell;