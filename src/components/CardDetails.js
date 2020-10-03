import { Rowing } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import {Redirect, useParams,BrowserRouter as Router,Route} from "react-router-dom"
import dataipo from "../data.json"
import PageNotFound from './PageNotFound';
import {Pie, Doughnut} from 'react-chartjs-2';
function CardDetails() {
    var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
  
    let { id } = useParams();
    const getdata=()=>{
        if(id in dataipo){
            return dataipo[id];
        }else{
            return "error"
        }
        
    }
       
    const[promoter,setPromoters]=useState({
        labels: [
            "Promoters",
            "Public"
        ],
        datasets: [{
            data:[dataipo[id].promoters_holdings.post_issue,
            100-dataipo[id].promoters_holdings.post_issue],
            backgroundColor: [
            '#FF6384',
            '#36A2EB'       
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB'
            ]
        }]})
        // ["NII","QIB"]
        const[category,setCategory]=useState({
            labels: Object.keys(dataipo[id].shares_offered_by_category),
            datasets: [{
                data:Object.values(dataipo[id].shares_offered_by_category)
                ,
                backgroundColor: colorArray.slice(Object.keys(dataipo[id].shares_offered_by_category).length),
                hoverBackgroundColor: colorArray.slice(Object.keys(dataipo[id].shares_offered_by_category).length)
            }]})


    const ipo=getdata();
    if(ipo==="error"){
        return(<PageNotFound />)
    }
    
    return (
      
            <div className="container-md p-4 d-flex justify-content-center flex-column"> 
                <div className="d-flex justify-content-between">
                <h5 className="text-center">{ipo.name}</h5>
                <img style={{objectFit:"contain",height:"40px"}} src={ipo.image}/>
                </div>

                <p>{ipo.description}</p>
            <h5 className="p-2 mt-2">IPO Details</h5>
                <table className="table table-bordered table-striped">
                    <tbody>
                        <tr>
                            <th>IPO Date</th>
                            <td>{ipo.date}</td>
                        </tr>
                         <tr>
                             <th>Issue Type</th>
                            <td>{ipo.details.issue_type}</td>
                         </tr>
                         <tr>
                             <th>Issue Size</th>
                            <td>{ipo.details.issue_size}</td>
                         </tr>
                         <tr>
                             <th>Market Lot</th>
                            <td>{ipo.details.market_lot}</td>
                         </tr>
                         <tr>
                             <th>Min Order Quantity</th>
                            <td>{ipo.details.min_order_qty}</td>
                         </tr>
                         <tr>
                             <th>Min Amount</th>
                            <td>{ipo.details.minimum_amount}</td>
                         </tr>
                         <tr>
                             <th>Listing At</th>
                            <td>{ipo.details.listing}</td>
                         </tr>
                    </tbody>
                </table>
                <h5 className="p-2 mt-2">IPO Timetable</h5>
                <table className="table table-bordered table-striped">
                    <tbody>
                        <tr>
                            <th>Open date</th>
                            <td>{ipo.timetable.open_date}</td>
                        </tr>
                         <tr>
                             <th>Close Date</th>
                            <td>{ipo.timetable.close_date}</td>
                         </tr>
                         <tr>
                             <th>Allotment Date</th>
                            <td>{ipo.timetable.finalization_date}</td>
                         </tr>
                         <tr>
                             <th>Refund Date</th>
                            <td>{ipo.timetable.refund_date}</td>
                         </tr>
                         <tr>
                             <th>Credit of Share to Demat Date</th>
                            <td>{ipo.timetable.credit_date}</td>
                         </tr>
                         <tr>
                             <th>Listing Date</th>
                            <td>{ipo.timetable.listing_date}</td>
                         </tr>
                    </tbody>
                </table>
                <div>
                <h5 className="p-2 mt-2">Promoters Holdings in after IPO%</h5>
                
                <Pie
                    data={promoter}
                />
                <h5 className="p-2 mt-2"> shares offered by Category in %</h5>
                <Doughnut
                data={category}
                />
                </div>
            </div>
    )
    
    
    
}

export default CardDetails
