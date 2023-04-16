import React from 'react';
import CodeBlock from '../UI/CodeBlock/CodeBlock';

const Python = ()=>{
    return (<div>
        <>
        <h3>Oracle SQL Runner</h3>
        <p>The following script was one that I used during RPA automation to run a few queries for reports that our Accounting Department depended on. I would have the bot run the queries, since we were using RPA 11.3 before switching over to Automation Anywhere 360.</p>
        <CodeBlock>
        # Import libraries needed to run the script<br/>
        try:<br/>
        &nbsp;import logging<br/>
        &nbsp;from datetime import datetime, timedelta<br/>
        &nbsp;import oracledb as cx_Oracle<br/>
            &nbsp;import numpy as np <br/>
            &nbsp;import pandas as pd<br/> 
            &nbsp;import openpyxl<br/>
            &nbsp;import os <br/>
            &nbsp;import shutil<br/>
        except:<br/>
            &nbsp;logging.error("Unable to import libraries code exited before anything was ran")<br/>
            &nbsp;print(False)<br/>
            &nbsp;exit(0)<br/><br/>
        #Set Variables these variables are used throughout the code<br/><br/>
        Today = datetime.now()<br/>
        User = ""<br/>
        Password = "" # This would be changed out to the bot giving it system arguments to use instead for security purposes.<br/>
        Domain = ""<br/>
        Query = ""<br/>
        <br/>
        #Classes and Methods<br/><br/>
        class QueryRunner():<br/>
        &nbsp;'''Initialize the variables to be used throughout the class'''<br/>
        &nbsp;def __init__(self,user,password,dsn):<br/>
        &nbsp;&nbsp;self.user = user<br/>
        &nbsp;&nbsp;self.password = password<br/>
        &nbsp;&nbsp;self.dsn = dsn<br/>
        <br/>
        &nbsp;def __OracleTestConnection(self):<br/>
        &nbsp;'''Test if connection is viable'''<br/>
        &nbsp;&nbsp;try:<br/>
        &nbsp;&nbsp;&nbsp;cx_Oracle.connect(user=self.user,password=self.password,dsn=self.dsn)<br/>
        &nbsp;&nbsp;&nbsp;logging.info("Able to successfully connect to the Database")<br/>
        &nbsp;&nbsp;&nbsp;return True<br/>
        &nbsp;&nbsp;except:<br/>
        &nbsp;&nbsp;&nbsp;logging.error("Unable to Connect to Database")<br/>
        &nbsp;&nbsp;&nbsp;return False<br/>
        <br/>
        &nbsp;def RunQuery(self,Query,Columns):<br/>
        &nbsp;'''Run the Query that is being passed, with Column Headers'''<br/>
        &nbsp;&nbsp;ConnectionTest = self.__OracleTestConnection()<br/>
        &nbsp;&nbsp;if ConnectionTest = True:<br/>
        &nbsp;&nbsp;&nbsp;connection = cx_Oracle.connect(user=self.user,password=self.password,dsn=self.dsn)<br/>
        &nbsp;&nbsp;&nbsp;with connection.cursor() as cursor:<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;query = cursor.execute(Query)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;data pd.DataFrame(query,columns=Columns)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;return data<br/>
        &nbsp;&nbsp;else:<br/>
        &nbsp;&nbsp;&nbsp;logging.error("Unable to run Query")<br/>
        &nbsp;&nbsp;&nbsp;return False<br/>
        
        </CodeBlock>
        <h3>SAP Connection</h3>
        <p>This is an SAP handler to either launch or connect to SAP.exe and run a macro. I would use this to either launch SAP or open it by setting the "SAPApplication" variable to the file path on my computer or VM for the bot to launch.</p>
        <CodeBlock>
        import sys, win32com.client as win32, time, logging, pythoncom<br/>
        import subprocess<br/>
        from datetime import datetime <br/>
        <br/>
        class SAPGUI():<br/>
        &nbsp; # def __init__():None<br/> 
        &nbsp; # pass <br/><br/>

            &nbsp;def connect_sap(self):<br/>
                &nbsp;&nbsp;self.SapGuiAuto = win32.GetObject("SAPGUI")<br/>
                &nbsp;&nbsp;application = self.SapGuiAuto.GetScriptingEngine<br/>
                &nbsp;&nbsp;self.connection = application.OpenConnection(ConnectionType,True)<br/>
                &nbsp;&nbsp;time.sleep(3)<br/>
                &nbsp;&nbsp;self.session = self.connection.Children(0)<br/><br/>

            &nbsp;def __open_sap(self):<br/>
                &nbsp;&nbsp;subprocess.Popen(SAPApplication)<br/><br/>

            &nbsp;def connect_to_current_openwindow(self):<br/>
                &nbsp;&nbsp;self.SapGuiAuto = win32.GetObject("SAPGUI")<br/>
                &nbsp;&nbsp;application = self.SapGuiAuto.GetScriptingEngine<br/>
                &nbsp;&nbsp;self.connection = application.Children(0)<br/>
                &nbsp;&nbsp;self.session = self.connection.Children(0)<br/><br/>
            
            &nbsp;def sap_login(self):<br/>
                &nbsp;&nbsp;self.__open_sap()<br/>
                &nbsp;&nbsp;time.sleep(5)<br/>
                &nbsp;&nbsp;self.connect_sap()<br/>
                &nbsp;&nbsp;time.sleep(5)<br/>
                &nbsp;&nbsp;self.session.findById("wnd[0]/usr/txtRSYST-BNAME").text = User<br/>
                &nbsp;&nbsp;self.session.findById("wnd[0]/usr/pwdRSYST-BCODE").text = Password<br/>
                &nbsp;&nbsp;self.session.findById("wnd[0]").sendVKey(0)<br/>
                &nbsp;&nbsp;try:<br/>
                &nbsp;&nbsp;&nbsp;self.session.findById("wnd[1]")<br/>
                &nbsp;&nbsp;&nbsp;self.session.findById("wnd[1]")<br/>
                &nbsp;&nbsp;except pythoncom com_error:<br/>
                &nbsp;&nbsp;&nbsp;pass<br/>
                &nbsp;&nbsp;&nbsp;return True<br/>

        </CodeBlock>
        </>

    </div>)
}

export default Python;