import React from 'react';
import CodeBlock from '../UI/CodeBlock/CodeBlock';

const SQL = ()=>{
    return (<div>
        <>
        <h3>Use of Common Table Expression</h3>
        <p>The following piece of code was used to update a stored procedure that was running daily. Having a CTE (Common Table Expression) statement inside of the stored procedure allowed for me to recursively call back to the same statement and retreive all the senior email addresses.</p><br/>
        <CodeBlock>
        DECLARE @seniorEmails as varchar(max)<br/>
        ;WITH Personnel AS<br/>
        (SELECT DISTINCT(Email_Address),Approval_Level_Required FROM Table)<br/>
        SELECT @val = COALESCE(@val + '; ' + Email_Address, Email_Address) FROM Personnel WHERE Approval_Level_Required = 2<br/>
        SET @seniorEmails = @val<br/>
        </CodeBlock>
        <h3>Mathematical Operations</h3>
        <p>Scripts that I've picked up while working as an analyst</p>
        <CodeBlock>
        -- Always subject to have different syntax in different environments<br/>
        -- I choose these as the ones that I am more than likely to use. Will be adding more as I encounter more things.<br/>
        <br/>
        <br/>
        --Round Function<br/>
        &nbsp;SELECT Round(column1 / column2, 2)* 100 AS percent FROM tbl1<br/> 
        <br/>
        --Sign Function<br/>
        &nbsp;SELECT Sign(column1) FROM tbl1<br/>
        -- Returns 1 if positive, -1 if negative, 0 if the value is 0<br/>

        --Power Function<br/>
        &nbsp;SELECT POWER(column1, 2) FROM tbl1<br/>
        -- takes the first numeric expression and raises it to the power specified in the 2nd numeric expression<br/>
        <br/>
        &nbsp;SELECT SQRT(column1) FROM tbl1<br/>
        -- Square Root of the numeric value<br/>
        <br/>
        --Summation Based on a Rolling Total think of credit card that carries balance and changes each month. This is something<br/>
        -- I worked on at work but I simplified it here for future projects.<br/>
        <br/>
&nbsp;SELECT <br/>
        &nbsp;column_id<br/>
        &nbsp;SUM(Previous_Month_Totals)<br/>
            -- add your other months here depending on how many case statements you got.<br/>
        FROM (<br/>
        &nbsp;Select <br/>
        &nbsp;column_id,<br/>
            Case<br/>
            &nbsp;WHEN to_date(month_number,'YYYYMM') &lt;= to_date(to_char(ADD_MONTHS(sysdate,-1)'YYYYMM'),'YYYYMM') THEN amount_column<br/>
            &nbsp;ELSE 0<br/>
            END as Previous_Month_Totals<br/>
            -- You would repeat the above but change the month number to -2 or whatever month you would like <br/>
            From <br/>
            tbl1<br/>
            --- Where clause if you need one<br/>
        )<br/>
        GROUP BY<br/>
        column_id<br/>

        </CodeBlock>


        <h3>Rebuilt a Database Structure for a former Website</h3>
        <p>The following piece of code was used to create a new Database for a former Website.(Columns and table names have been masked for security purposes). Not the full script just examples pulled from each section as demonstration.</p>
        <CodeBlock>
        /&#42;&#61;&#61;Scripting Parameters&#61;&#61;<br/>
        Source Server Version : SQL Server 2014 (12.0.6164)<br/>
        Source Database Engine Edition : Microsoft SQL Server Enterprise Edition<br/>
        Source Database Engine Type : Standalone SQL Server<br/>
        Target Server Version : SQL Server 2017<br/>
        Target Database Engine Edition : Microsoft SQL Server Standard Edition<br/>
        Target Database Engine Type : Standalone SQL Server<br/>
        &#42;/<br/><br/>
        USE [master]<br/>

        <br/>
        /&#42;&#42;&#42;&#42;&#42;&#42; Object:  Database [NEWDATABASENAME]    Script Date: 5/13/2022 2:37:48 PM &#42;&#42;&#42;&#42;&#42;&#42;/<br/>
        CREATE DATABASE [NEWDATABASENAME]<br/>
        CONTAINMENT &#61; NONE<br/>
        ON  PRIMARY <br/>
        ( NAME &#61; N'NEWDATABASENAME', FILENAME &#61; N'DRIVE:\Accounting_Data\NEWDATABASENAME.mdf' , SIZE &#61; 1048576KB , MAXSIZE &#61; UNLIMITED, FILEGROWTH &#61; 512000KB )<br/>
        LOG ON <br/>
        ( NAME &#61; N'NEWDATABASENAME_log', FILENAME &#61; N'DRIVE:\Accounting_Log\NEWDATABASENAME.ldf' , SIZE &#61; 512000KB , MAXSIZE &#61; 2048GB , FILEGROWTH &#61; 102400KB )<br/>

        ALTER DATABASE [NEWDATABASENAME] SET COMPATIBILITY_LEVEL &#61; 120<br/>

        IF (1 &#61; FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))<br/>
        begin<br/>
        EXEC [NEWDATABASENAME].[dbo].[sp_fulltext_database] @action &#61; 'enable'<br/>
        end<br/>

        ALTER DATABASE [NEWDATABASENAME] SET ANSI_NULL_DEFAULT OFF <br/>

        ALTER DATABASE [NEWDATABASENAME] SET ANSI_NULLS OFF <br/>

        ALTER DATABASE [NEWDATABASENAME] SET ANSI_PADDING OFF <br/>

        ALTER DATABASE [NEWDATABASENAME] SET ANSI_WARNINGS OFF <br/>

        ALTER DATABASE [NEWDATABASENAME] SET ARITHABORT OFF <br/>

        ALTER DATABASE [NEWDATABASENAME] SET AUTO_CLOSE OFF <br/>

        ALTER DATABASE [NEWDATABASENAME] SET AUTO_SHRINK OFF <br/>

        ALTER DATABASE [NEWDATABASENAME] SET AUTO_UPDATE_STATISTICS ON <br/>

        ALTER DATABASE [NEWDATABASENAME] SET CURSOR_CLOSE_ON_COMMIT OFF <br/>

        ALTER DATABASE [NEWDATABASENAME] SET CURSOR_DEFAULT  GLOBAL <br/>

        ALTER DATABASE [NEWDATABASENAME] SET CONCAT_NULL_YIELDS_NULL OFF <br/>

        ALTER DATABASE [NEWDATABASENAME] SET NUMERIC_ROUNDABORT OFF <br/>

        ALTER DATABASE [NEWDATABASENAME] SET QUOTED_IDENTIFIER OFF <br/>

        ALTER DATABASE [NEWDATABASENAME] SET RECURSIVE_TRIGGERS OFF <br/>

        ALTER DATABASE [NEWDATABASENAME] SET  DISABLE_BROKER <br/>

        ALTER DATABASE [NEWDATABASENAME] SET AUTO_UPDATE_STATISTICS_ASYNC OFF <br/>

        ALTER DATABASE [NEWDATABASENAME] SET DATE_CORRELATION_OPTIMIZATION OFF <br/>

        ALTER DATABASE [NEWDATABASENAME] SET TRUSTWORTHY OFF <br/>

        ALTER DATABASE [NEWDATABASENAME] SET ALLOW_SNAPSHOT_ISOLATION OFF <br/>

        ALTER DATABASE [NEWDATABASENAME] SET PARAMETERIZATION SIMPLE <br/>

        ALTER DATABASE [NEWDATABASENAME] SET READ_COMMITTED_SNAPSHOT OFF <br/>

        ALTER DATABASE [NEWDATABASENAME] SET HONOR_BROKER_PRIORITY OFF <br/>

        ALTER DATABASE [NEWDATABASENAME] SET RECOVERY SIMPLE <br/>

        ALTER DATABASE [NEWDATABASENAME] SET  MULTI_USER <br/>

        ALTER DATABASE [NEWDATABASENAME] SET PAGE_VERIFY CHECKSUM  <br/>

        ALTER DATABASE [NEWDATABASENAME] SET DB_CHAINING OFF <br/>

        ALTER DATABASE [NEWDATABASENAME] SET FILESTREAM( NON_TRANSACTED_ACCESS &#61; OFF ) <br/>

        ALTER DATABASE [NEWDATABASENAME] SET TARGET_RECOVERY_TIME &#61; 0 SECONDS <br/>

        ALTER DATABASE [NEWDATABASENAME] SET DELAYED_DURABILITY &#61; DISABLED <br/>

        EXEC sys.sp_db_vardecimal_storage_format N'NEWDATABASENAME', N'ON'<br/>

        USE [NEWDATABASENAME]<br/>
        <br/><br/>
        /&#42;&#42;&#42;&#42;&#42;&#42; Object:  User [ADMINS-EX]    Script Date: 5/13/2022 2:37:48 PM &#42;&#42;&#42;&#42;&#42;&#42;/<br/>
        CREATE USER [ADMINS-EX] FOR LOGIN [DOMAIN\ADMINS]<br/>
        <br/>
        /&#42;&#42;&#42;&#42;&#42;&#42; Object:  Table [dbo].[Approvers]    Script Date: 5/13/2022 2:37:48 PM &#42;&#42;&#42;&#42;&#42;&#42;/<br/>
        <br/>

        <br/>

        CREATE TABLE [dbo].[Approvers](<br/>
        [ID] [int] IDENTITY(1,1) NOT NULL,<br/>
        [RACF_ID] [nvarchar](max) NULL,<br/>
        [Name] [nvarchar](max) NULL,<br/>
        [Email_Address] [nvarchar](max) NULL,<br/>
        [Is_Active] [nvarchar](max) NULL,<br/>
        [Approval_Level] [int] NOT NULL,<br/>
        [Allowed_Cancel] [nvarchar](max) NULL,<br/>
        CONSTRAINT [PK_Approvers] PRIMARY KEY CLUSTERED <br/>
        (<br/>
        [ID] ASC<br/>
        )WITH (PAD_INDEX &#61; OFF, STATISTICS_NORECOMPUTE &#61; OFF, IGNORE_DUP_KEY &#61; OFF, ALLOW_ROW_LOCKS &#61; ON, ALLOW_PAGE_LOCKS &#61; ON) ON [PRIMARY]<br/>
        ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]<br/>
        <br/>
        /&#42;&#42;&#42;&#42;&#42;&#42; Object:  Table [dbo].[TABLE1]    Script Date: 5/13/2022 2:37:48 PM &#42;&#42;&#42;&#42;&#42;&#42;/<br/>
        <br/>

        <br/>

        CREATE TABLE [dbo].[TABLE1](<br/>
        [ID] [int] IDENTITY(1,1) NOT NULL,<br/>
        [NAME] [nvarchar](max) NOT NULL,<br/>
        [ID] [nvarchar](max) NOT NULL,<br/>
        [Sub_Category] [nvarchar](max) NULL,<br/>
        [Submission_Date] [datetime2](7) NOT NULL,<br/>
        [CustomerName] [nvarchar](max) NULL,<br/>
        [CustomerNumber] [nvarchar](max) NULL,<br/>
        [Notes] [nvarchar](max) NULL,<br/>
        [Invoice_Number] [int] NOT NULL,<br/>
        [Authority] [nvarchar](max) NULL,<br/>
        [Amount] [money] NOT NULL,<br/>
        [State] [nvarchar](max) NULL,<br/>
        [File_Location] [nvarchar](max) NULL,<br/>
        [Status] [int] NOT NULL,<br/>
        [Completed_By] [nvarchar](max) NULL,<br/>
        [Completed_Date] [datetime2](7) NULL,<br/>
        [RejectionNotice] [nvarchar](max) NULL,<br/>
        [DOCNumber] [nvarchar](max) NULL,<br/>
        CONSTRAINT [PK_TABLE1] PRIMARY KEY CLUSTERED <br/>
        (<br/>
        [ID] ASC<br/>
        )WITH (PAD_INDEX &#61; OFF, STATISTICS_NORECOMPUTE &#61; OFF, IGNORE_DUP_KEY &#61; OFF, ALLOW_ROW_LOCKS &#61; ON, ALLOW_PAGE_LOCKS &#61; ON) ON [PRIMARY]<br/>
        ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]<br/>
        <br/>
        /&#42;&#42;&#42;&#42;&#42;&#42; Object:  Table [dbo].[TABLE2]    Script Date: 5/13/2022 2:37:48 PM &#42;&#42;&#42;&#42;&#42;&#42;/<br/>
        <br/>

        <br/>

        CREATE TABLE [dbo].[TABLE2](<br/>
        [TableIDSID] [int] NOT NULL,<br/>
        [TABLE1ID] [int] NOT NULL,<br/>
        CONSTRAINT [PK_TABLE2] PRIMARY KEY CLUSTERED <br/>
        (<br/>
        [TableIDSID] ASC,<br/>
        [TABLE1ID] ASC<br/>
        )WITH (PAD_INDEX &#61; OFF, STATISTICS_NORECOMPUTE &#61; OFF, IGNORE_DUP_KEY &#61; OFF, ALLOW_ROW_LOCKS &#61; ON, ALLOW_PAGE_LOCKS &#61; ON) ON [PRIMARY]<br/>
        ) ON [PRIMARY]<br/>
        <br/>
        /&#42;&#42;&#42;&#42;&#42;&#42; Object:  Table [dbo].[TABLE3]    Script Date: 5/13/2022 2:37:48 PM &#42;&#42;&#42;&#42;&#42;&#42;/<br/>
        <br/>

        <br/>

        CREATE TABLE [dbo].[TABLE3](<br/>
        [ID] [int] IDENTITY(1,1) NOT NULL,<br/>
        [Requestor_Name] [nvarchar](max) NOT NULL,<br/>
        [Submission_Date] [datetime2](7) NOT NULL,<br/>
        [CustomerName] [nvarchar](max) NULL,<br/>
        [CustomerNumber] [nvarchar](max) NULL,<br/>
        [CustomerAddress] [nvarchar](max) NULL,<br/>
        [CustomerCity] [nvarchar](max) NULL,<br/>
        [CustomerZip] [nvarchar](max) NULL,<br/>
        [State] [nvarchar](max) NULL,<br/>
        [CustomerContact] [nvarchar](max) NULL,<br/>
        [CustomerPhone] [nvarchar](max) NULL,<br/>
        [CustomerEmail] [nvarchar](max) NULL,<br/>
        [Notes] [nvarchar](max) NULL,<br/>
        [Number_Of_Invoices] [int] NOT NULL,<br/>
        [Amount] [money] NOT NULL,<br/>
        [File_Location] [nvarchar](max) NULL,<br/>
        [Status] [int] NOT NULL,<br/>
        [Completed_By] [nvarchar](max) NULL,<br/>
        [Completed_Date] [datetime2](7) NULL,<br/>
        [Collection_Company] [nvarchar](max) NULL,<br/>
        [RejectionNotice] [nvarchar](max) NULL,<br/>
        [DOCNumber] [nvarchar](max) NULL,<br/>
        CONSTRAINT [PK_TABLE3] PRIMARY KEY CLUSTERED <br/>
        (<br/>
        [ID] ASC<br/>
        )WITH (PAD_INDEX &#61; OFF, STATISTICS_NORECOMPUTE &#61; OFF, IGNORE_DUP_KEY &#61; OFF, ALLOW_ROW_LOCKS &#61; ON, ALLOW_PAGE_LOCKS &#61; ON) ON [PRIMARY]<br/>
        ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]<br/>
        <br/>
        /&#42;&#42;&#42;&#42;&#42;&#42; Object:  Table [dbo].[Table4]    Script Date: 5/13/2022 2:37:48 PM &#42;&#42;&#42;&#42;&#42;&#42;/<br/>
        <br/>

        <br/>

        CREATE TABLE [dbo].[Table4](<br/>
        [ID] [int] IDENTITY(1,1) NOT NULL,<br/>
        [Company] [nvarchar](max) NULL,<br/>
        [CompanyDescription] [nvarchar](max) NULL,<br/>
        [IActive] [nvarchar](max) NULL,<br/>
        CONSTRAINT [PK_Table4] PRIMARY KEY CLUSTERED <br/>
        (<br/>
        [ID] ASC<br/>
        )WITH (PAD_INDEX &#61; OFF, STATISTICS_NORECOMPUTE &#61; OFF, IGNORE_DUP_KEY &#61; OFF, ALLOW_ROW_LOCKS &#61; ON, ALLOW_PAGE_LOCKS &#61; ON) ON [PRIMARY]<br/>
        ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]<br/>
        <br/>
        /&#42;&#42;&#42;&#42;&#42;&#42; Object:  Table [dbo].[Table5]    Script Date: 5/13/2022 2:37:48 PM &#42;&#42;&#42;&#42;&#42;&#42;/<br/>
        <br/>

        <br/>

        CREATE TABLE [dbo].[Table5](<br/>
        [ID] [int] IDENTITY(1,1) NOT NULL,<br/>
        [CustomerType] [nvarchar](max) NULL,<br/>
        [CustomerDescription] [nvarchar](max) NULL,<br/>
        [IActive] [nvarchar](max) NULL,<br/>
        CONSTRAINT [PK_Table5] PRIMARY KEY CLUSTERED <br/>
        (<br/>
        [ID] ASC<br/>
        )WITH (PAD_INDEX &#61; OFF, STATISTICS_NORECOMPUTE &#61; OFF, IGNORE_DUP_KEY &#61; OFF, ALLOW_ROW_LOCKS &#61; ON, ALLOW_PAGE_LOCKS &#61; ON) ON [PRIMARY]<br/>
        ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]<br/>
        <br/>
        /&#42;&#42;&#42;&#42;&#42;&#42; Object:  Table [dbo].[EDITS]    Script Date: 5/13/2022 2:37:48 PM &#42;&#42;&#42;&#42;&#42;&#42;/<br/>
        <br/>
        <br/>
        CREATE TABLE [dbo].[EDITS](<br/>
        [ID] [int] IDENTITY(1,1) NOT NULL,<br/>
        [USERNAME] [nvarchar](max) NULL,<br/>
        [Change_Date] [datetime2](7) NOT NULL,<br/>
        [Change_Reason] [nvarchar](max) NULL,<br/>
        CONSTRAINT [PK_EDITS] PRIMARY KEY CLUSTERED <br/>
        (<br/>
        [ID] ASC<br/>
        )WITH (PAD_INDEX &#61; OFF, STATISTICS_NORECOMPUTE &#61; OFF, IGNORE_DUP_KEY &#61; OFF, ALLOW_ROW_LOCKS &#61; ON, ALLOW_PAGE_LOCKS &#61; ON) ON [PRIMARY]<br/>
        ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]<br/>

        /&#42;&#42;&#42;&#42;&#42;&#42; Object:  Table [dbo].[Table6]    Script Date: 5/13/2022 2:37:48 PM &#42;&#42;&#42;&#42;&#42;&#42;/<br/>
        <br/>

        <br/>

        CREATE TABLE [dbo].[Table6](<br/>
        [TABLE6] [int] NOT NULL,<br/>
        [RID] [int] NOT NULL,<br/>
        CONSTRAINT [PK_Table6] PRIMARY KEY CLUSTERED <br/>
        (<br/>
        [TableIDSID] ASC,<br/>
        [Table8sID] ASC<br/>
        )WITH (PAD_INDEX &#61; OFF, STATISTICS_NORECOMPUTE &#61; OFF, IGNORE_DUP_KEY &#61; OFF, ALLOW_ROW_LOCKS &#61; ON, ALLOW_PAGE_LOCKS &#61; ON) ON [PRIMARY]<br/>
        ) ON [PRIMARY]<br/>

        /&#42;&#42;&#42;&#42;&#42;&#42; Object:  Table [dbo].[TableIDS]    Script Date: 5/13/2022 2:37:48 PM &#42;&#42;&#42;&#42;&#42;&#42;/<br/>
        <br/>

        <br/>

        CREATE TABLE [dbo].[TableIDS](<br/>
        [ID] [int] IDENTITY(1,1) NOT NULL,<br/>
        [GeneralLedger] [nvarchar](max) NULL,<br/>
        [Cost_Center] [nvarchar](max) NULL,<br/>
        [WBS_Element] [nvarchar](max) NULL,<br/>
        [Amount] [money] NOT NULL,<br/>
        CONSTRAINT [PK_TableIDS] PRIMARY KEY CLUSTERED <br/>
        (<br/>
        [ID] ASC<br/>
        )WITH (PAD_INDEX &#61; OFF, STATISTICS_NORECOMPUTE &#61; OFF, IGNORE_DUP_KEY &#61; OFF, ALLOW_ROW_LOCKS &#61; ON, ALLOW_PAGE_LOCKS &#61; ON) ON [PRIMARY]<br/>
        ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]<br/>

        /&#42;&#42;&#42;&#42;&#42;&#42; Object:  Table [dbo].[Table7]    Script Date: 5/13/2022 2:37:48 PM &#42;&#42;&#42;&#42;&#42;&#42;/<br/>
        <br/>

        <br/>

        CREATE TABLE [dbo].[Table7](<br/>
        [TableIDSID] [int] NOT NULL,<br/>
        [WriteOffsID] [int] NOT NULL,<br/>
        CONSTRAINT [PK_Table7] PRIMARY KEY CLUSTERED <br/>
        (<br/>
        [TableIDSID] ASC,<br/>
        [WriteOffsID] ASC<br/>
        )WITH (PAD_INDEX &#61; OFF, STATISTICS_NORECOMPUTE &#61; OFF, IGNORE_DUP_KEY &#61; OFF, ALLOW_ROW_LOCKS &#61; ON, ALLOW_PAGE_LOCKS &#61; ON) ON [PRIMARY]<br/>
        ) ON [PRIMARY]<br/>

        /&#42;&#42;&#42;&#42;&#42;&#42; Object:  Table [dbo].[TABLE8]    Script Date: 5/13/2022 2:37:48 PM &#42;&#42;&#42;&#42;&#42;&#42;/<br/>
        <br/>

        <br/>

        CREATE TABLE [dbo].[Table8](<br/>
        [ID] [int] IDENTITY(1,1) NOT NULL,<br/>
        [RequestorName] [nvarchar](max) NOT NULL,<br/>
        [CustomerName] [nvarchar](max) NULL,<br/>
        [SubmissionDate] [datetime2](7) NOT NULL,<br/>
        [CustomerNumber] [nvarchar](max) NULL,<br/>
        [Notes] [nvarchar](max) NULL,<br/>
        [Subtotal] [money] NOT NULL,<br/>
        [ProcessingFee] [money] NOT NULL,<br/>
        [Amount] [money] NOT NULL,<br/>
        [State] [nvarchar](max) NULL,<br/>
        [Documentation] [nvarchar](max) NULL,<br/>
        [Status] [int] NOT NULL,<br/>
        [CompletedBy] [nvarchar](max) NULL,<br/>
        [CompletedDate] [datetime2](7) NULL,<br/>
        [InvoiceDate] [datetime2](7) NOT NULL,<br/>
        [Invoice] [nvarchar](max) NOT NULL,<br/>
        [Sub_Category] [nvarchar](max) NULL,<br/>
        CONSTRAINT [PK_Table8] PRIMARY KEY CLUSTERED <br/>
        (<br/>
        [ID] ASC<br/>
        )WITH (PAD_INDEX &#61; OFF, STATISTICS_NORECOMPUTE &#61; OFF, IGNORE_DUP_KEY &#61; OFF, ALLOW_ROW_LOCKS &#61; ON, ALLOW_PAGE_LOCKS &#61; ON) ON [PRIMARY]<br/>
        ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]<br/>

        /&#42;&#42;&#42;&#42;&#42;&#42; Object:  Table [dbo].[Table8_Checks]    Script Date: 5/13/2022 2:37:48 PM &#42;&#42;&#42;&#42;&#42;&#42;/<br/>
        <br/>

        <br/>

        CREATE TABLE [dbo].[Table8_Checks](<br/>
        [ID] [int] IDENTITY(1,1) NOT NULL,<br/>
        [Check_Number] [nvarchar](max) NULL,<br/>
        [Check_Amount] [money] NOT NULL,<br/>
        [Check_Notes] [nvarchar](max) NULL,<br/>
        [Check_Date] [datetime2](7) NOT NULL,<br/>
        [Table8ID] [int] NULL,<br/>
        CONSTRAINT [PK_Table8_Checks] PRIMARY KEY CLUSTERED <br/>
        (<br/>
        [ID] ASC<br/>
        )WITH (PAD_INDEX &#61; OFF, STATISTICS_NORECOMPUTE &#61; OFF, IGNORE_DUP_KEY &#61; OFF, ALLOW_ROW_LOCKS &#61; ON, ALLOW_PAGE_LOCKS &#61; ON) ON [PRIMARY]<br/>
        ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]<br/>

        <br/>
        <br/>
        CREATE VIEW [dbo].[TABLE_VIEW] AS <br/>
        <br/>
        With Combined_Table as (<br/>
        SELECT Table1.ID,Table1.Requestor_Name,'TABLE1' as Category,Submission_Date,Customer_Name,Amount,[Status] FROM Cancel_Adjust_CRMemo<br/>
        UNION<br/>
        SELECT Table2.ID,Table2.Requestor_Name,'TABLE2' as Category, Submission_Date,Customer_Name,Amount, [Status] FROM Collections<br/>
        UNION<br/>
        SELECT ID,Requestor_Name,'Table8s' as Category,Submission_Date,Customer_Name,Table8_Amount, [Status] FROM Table8<br/>
        UNION<br/>
        SELECT ID,Requestor_Name, 'Table9' as Category, Submission_Date,Customer_Name,Amount, [Status] FROM Special_Handling<br/>
        UNION<br/>
        SELECT ID,Requestor_Name, 'Table10' as Category,Submission_Date,Customer_Name,Total_Amount, [Status] FROM Write_Off<br/>
        ),<br/>
        ApproverLevels as (<br/>
        SELECT <br/>
        Combined_Table.ID<br/>
        ,Category<br/>
        ,Requestor_Name as Submitter<br/>
        ,Submission_Date<br/>
        ,Customer_Name<br/>
        ,Amount<br/>
        ,Statuses.ID as Status_Code<br/>
        ,Statuses.[Status]<br/>
        ,CASE <br/>
        WHEN Statuses.ID &#61; 1 THEN 2 <br/>
        WHEN Statuses.ID &#61; 3 THEN 3 <br/>
        WHEN Statuses.ID &#61; 5 THEN 4 <br/>
        WHEN Statuses.ID &#61; 7 THEN 5 <br/>
        WHEN Statuses.ID &#61; 9 THEN 6<br/>
        ELSE 6 END Approval_Level_Required <br/>
        FROM Combined_Table JOIN Statuses on Combined_Table.Status &#61; Statuses.ID <br/>
        WHERE Combined_Table.[Status] !&#61; 15 and Combined_Table.[Status] !&#61; 13 and Combined_Table.[Status] !&#61; 14<br/>
        )<br/>
        <br/>
        SELECT ApproverLevels.ID,Category, Submitter, Submission_Date, Customer_Name, Amount, Status_Code, Status, Approval_Level_Required,Email_Address FROM ApproverLevels JOIN Approvers ON ApproverLevels.Approval_Level_Required &#61; Approvers.Approval_Level WHERE Is_Active &#61; 'Y';<br/>
        <br/>
        <br/>

        USE [master]<br/>

        ALTER DATABASE [NEWDATABASENAME] SET  READ_WRITE <br/>

</CodeBlock>
        </>

    </div>)
}

export default SQL;