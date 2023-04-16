import React,{useState} from "react";
import Table from '../UI/Table/Table';
import styles from '../Ammortization/Ammortization.module.scss';
import TableRows from '../UI/Table/TableRows/TableRows';
import Spinner from '../UI/Spinner/Spinner';
import { tableToCSV } from "../../sharedFunctions/sharedFunctions";

let USDollar = new Intl.NumberFormat('en-US',{
    style:'currency',
    currency: 'USD'
});

let DateV = new Date().toISOString().slice(0,10);

class Record{
    constructor(Period,Payment,Interest,Principal,Balance){
        this.Period = Period;
        this.Payment = Payment;
        this.Interest = Interest;
        this.Principal = Principal;
        this.Balance = Balance;
    }
};

/**
 * Ammortization Small Application
 * @returns Ammortization Application to be used to look at loan over a period of time.
 */
const Ammortization = () =>{
    const [LoanAmount,changeLoanAmount] = useState(300000);
    const [LoanTerm,changeLoanTerm] = useState(30);
    const [LoanInterestRate,changeLoanInterestRate] = useState(4.35);
    const [TotalInterest,changeTotalInterest] = useState(0);
    const [TotalPaidOnLoan, changeTotalPaid] = useState(0);
    const [FinalDate,changeFinalDate] = useState("00/00/0000");
    const [totalMonthly,changeMonthlyPayment] = useState(0);
    const [DownPayment,changeDownPayment] = useState(0);
    const [termStart,changetermStart] = useState(DateV)
    const [DataValues,updateData] = useState([])
    const [loading,updateLoading] = useState(false);
    const [downloadLink,updateDownloadLink] = useState("");

    const createTable =(payment,TrueLoanAmount,realInterestRate,startDate)=>{
        let records = []
        let runningBalance = TrueLoanAmount;
        let endTerm = "";
        for (let i = 0; i <(LoanTerm*12)+1; i++){
            let datevalue = new Date(startDate)
            let addedDateValue = datevalue.setMonth(datevalue.getMonth()+i)
            endTerm = new Date(addedDateValue).toISOString().slice(0,10);
            let InterestPayment = USDollar.format(runningBalance * realInterestRate);
            let Principal = USDollar.format(payment-(runningBalance * realInterestRate));
            records.push(new Record(new Date(addedDateValue).toISOString().slice(0,10),USDollar.format(payment),InterestPayment,Principal,USDollar.format(runningBalance)))
            runningBalance -= (payment-(runningBalance * realInterestRate))
        }
        let copyOfData = [...records]
        updateData(copyOfData);
        changeFinalDate(endTerm)
        updateDownloadLink(tableToCSV(copyOfData[0],copyOfData));
    }

    const calculate = ()=>{
        updateLoading(true);
        let RealLoanInterestRate = LoanInterestRate/100
        let MonthlyInterestRate = RealLoanInterestRate/12
        let totalperiods = LoanTerm*12
        let topHalf = MonthlyInterestRate*(1+MonthlyInterestRate)**totalperiods
        let bottomHalf = ((1+MonthlyInterestRate)**totalperiods) - 1
        let PeriodicPayment = (LoanAmount-DownPayment)*(topHalf/bottomHalf)
        let TotalAmountPaid = (PeriodicPayment*totalperiods).toFixed(2)
        changeMonthlyPayment(USDollar.format(PeriodicPayment.toFixed(2).toString()));
        changeTotalPaid(USDollar.format(TotalAmountPaid));
        changeTotalInterest(USDollar.format(TotalAmountPaid-LoanAmount));
        createTable(PeriodicPayment,LoanAmount-DownPayment,MonthlyInterestRate,termStart);
        updateLoading(false);
    }

    let table = loading ? <Spinner/> : DataValues.length > 0 ? (<Table>
        <TableRows Type="Header" Data={DataValues[0]}/>
        <TableRows Type="Body" Data={DataValues}/>
    </Table>) : "";

    let downl = downloadLink ? downloadLink : "";


    return (<div className={styles.SmallApp}>
            {/* <aside>The following small application was developed to showcase a small browser application that I built to handle loans along with providing the user a useable format</aside><br/> */}
            <h1>Ammortization Web Application</h1>
            <div className={styles.Results}>
            <h5>Monthly Payment: {totalMonthly}</h5>
            <h5>Total Interest Paid: {TotalInterest}</h5>
            <h5>Total Cost of Loan: {TotalPaidOnLoan}</h5>
            <h5>Payoff Date: {FinalDate}</h5>
            </div>
            <p>Amortization is paying off a loan over equal installments over a given period of time. Try it out, and also be warned this doesn't include insurance payments or any other associated payments with the loan.</p>
            <menu>
            <label htmlFor="Amount">Loan Amount:</label>
            <input name="Amount" type="number" value={LoanAmount} onChange={(e)=>changeLoanAmount(e.target.value)} min="0.01" step="0.01" pattern="\d*"/>
            <label htmlFor="Period">Loan Period:</label>
            <select value={LoanTerm} name="Period" onChange={(e)=>changeLoanTerm(e.target.value)}>
                <option value={5}>5 years</option>
                <option value={10}>10 years</option>
                <option value={15}>15 years</option>
                <option value={20}>20 years</option>
                <option value={30}>30 years</option>
            </select>
            <label>Interest Rate</label>
            <input name="InterestRate" type="number" value={LoanInterestRate} onChange={(e)=>changeLoanInterestRate(e.target.value)} min="0.01" max="100" step="0.01"/>
            <label htmlFor="date">Start Date:</label>
            <input type="date" value={termStart} onChange={(e)=>changetermStart(e.target.value)}/>
            <label>Optional: Down Payment</label>
            <input name="DownPayment" type="number" value={DownPayment} onChange={(e)=>changeDownPayment(e.target.value)} min="0.01" step="0.01" pattern="\d*"/>
            <button onClick={()=>calculate()}>Calculate</button>
            </menu>
            {downl}
            {table}
        </div>)
}

export default Ammortization