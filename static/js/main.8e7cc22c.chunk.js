(this["webpackJsonpiponews-v1"]=this["webpackJsonpiponews-v1"]||[]).push([[0],{164:function(e,t,a){e.exports=a(546)},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},546:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(20),c=a.n(r);a(168),a(169),a(170);var i=function(){return l.a.createElement("div",{className:"navbar sticky-top sticky navbar-dark bg-primary  d-flex justify-content-center"},l.a.createElement("a",{href:"/",className:"navbar-brand"},l.a.createElement("h3",null," IPO News")))},s=(a(171),a(3)),m=a(7);var o=Object(s.g)((function(e){var t=e.name,a=e.price,n=e.date,r=e.img,c=e.k,i=e.history;return l.a.createElement("div",{className:"shadow-sm card m-3 py-2",onClick:function(){i.push("/".concat(c))}},l.a.createElement("p",{className:"m-0 font-weight-bold py-2 pl-3"},t),l.a.createElement("div",{class:"px-3 m-0 d-flex flex-row align-items-center justify-content-between"},l.a.createElement("div",{className:"p-0 overflow-hidden d-flex pb-2 flex-column"},l.a.createElement("p",{className:"p-0 m-0 font-weight-bold namecard__price"},a),l.a.createElement("p",{className:"p-0 m-0 text-secondary namecard__date"},n)),l.a.createElement("img",{className:"namecard_image",src:r})))})),u=a(98);var d=function(){return l.a.createElement("div",{className:"p-5 text-center"},l.a.createElement("h1",null,"404  Not Found"),l.a.createElement("a",{href:"/"},l.a.createElement("h3",null,"Go to Main page")))},h=a(95);var f=function(){var e=["#FF6633","#FFB399","#FF33FF","#FFFF99","#00B3E6","#E6B333","#3366E6","#999966","#99FF99","#B34D4D","#80B300","#809900","#E6B3B3","#6680B3","#66991A","#FF99E6","#CCFF1A","#FF1A66","#E6331A","#33FFCC","#66994D","#B366CC","#4D8000","#B33300","#CC80CC","#66664D","#991AFF","#E666FF","#4DB3FF","#1AB399","#E666B3","#33991A","#CC9999","#B3B31A","#00E680","#4D8066","#809980","#E6FF80","#1AFF33","#999933","#FF3380","#CCCC00","#66E64D","#4D80CC","#9900B3","#E64D66","#4DB380","#FF4D4D","#99E6E6","#6666FF"],t=Object(s.f)().id,a=Object(n.useState)({labels:["Promoters","Public"],datasets:[{data:[m[t].promoters_holdings.post_issue,100-m[t].promoters_holdings.post_issue],backgroundColor:["#FF6384","#36A2EB"],hoverBackgroundColor:["#FF6384","#36A2EB"]}]}),r=Object(u.a)(a,2),c=r[0],i=(r[1],Object(n.useState)({labels:Object.keys(m[t].shares_offered_by_category),datasets:[{data:Object.values(m[t].shares_offered_by_category),backgroundColor:e.slice(Object.keys(m[t].shares_offered_by_category).length),hoverBackgroundColor:e.slice(Object.keys(m[t].shares_offered_by_category).length)}]})),o=Object(u.a)(i,2),f=o[0],b=(o[1],t in m?m[t]:"error");return"error"===b?l.a.createElement(d,null):l.a.createElement("div",{className:"container-md p-4 d-flex justify-content-center flex-column"},l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("h5",{className:"text-center"},b.name),l.a.createElement("img",{style:{objectFit:"contain",height:"40px"},src:b.image})),l.a.createElement("p",{className:"mt-2"},b.description,"fhfiheihfei"),l.a.createElement("h5",{className:"p-2 mt-2"},"IPO Details"),l.a.createElement("table",{className:"table table-bordered table-striped"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"IPO Date"),l.a.createElement("td",null,b.date)),l.a.createElement("tr",null,l.a.createElement("th",null,"Issue Type"),l.a.createElement("td",null,b.details.issue_type)),l.a.createElement("tr",null,l.a.createElement("th",null,"Issue Size"),l.a.createElement("td",null,b.details.issue_size)),l.a.createElement("tr",null,l.a.createElement("th",null,"Market Lot"),l.a.createElement("td",null,b.details.market_lot)),l.a.createElement("tr",null,l.a.createElement("th",null,"Min Order Quantity"),l.a.createElement("td",null,b.details.min_order_qty)),l.a.createElement("tr",null,l.a.createElement("th",null,"Min Amount"),l.a.createElement("td",null,b.details.minimum_amount)),l.a.createElement("tr",null,l.a.createElement("th",null,"Listing At"),l.a.createElement("td",null,b.details.listing)))),l.a.createElement("h5",{className:"p-2 mt-2"},"IPO Timetable"),l.a.createElement("table",{className:"table table-bordered table-striped"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Open date"),l.a.createElement("td",null,b.timetable.open_date)),l.a.createElement("tr",null,l.a.createElement("th",null,"Close Date"),l.a.createElement("td",null,b.timetable.close_date)),l.a.createElement("tr",null,l.a.createElement("th",null,"Allotment Date"),l.a.createElement("td",null,b.timetable.finalization_date)),l.a.createElement("tr",null,l.a.createElement("th",null,"Refund Date"),l.a.createElement("td",null,b.timetable.refund_date)),l.a.createElement("tr",null,l.a.createElement("th",null,"Credit of Share to Demat Date"),l.a.createElement("td",null,b.timetable.credit_date)),l.a.createElement("tr",null,l.a.createElement("th",null,"Listing Date"),l.a.createElement("td",null,b.timetable.listing_date)))),l.a.createElement("div",null,l.a.createElement("h5",{className:"p-2 mt-2"},"Promoters Holdings in after IPO%"),l.a.createElement(h.Pie,{data:c}),l.a.createElement("h5",{className:"p-2 mt-2"}," shares offered by Category in %"),l.a.createElement(h.Doughnut,{data:f})))};var b=function(){return l.a.createElement("div",null,Object.keys(m).map((function(e,t){return l.a.createElement(o,{name:m[e].name,price:m[e].price,date:m[e].date,img:m[e].image,k:e})})))},p=a(62);a(270),a(271);var E=function(){return l.a.createElement(p.a,{basename:"/iponews"},l.a.createElement("div",{className:"App"},l.a.createElement(i,null),l.a.createElement("div",{className:"bodycontent"},l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:b}),l.a.createElement(s.a,{exact:!0,path:"/:id",component:f})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e){e.exports=JSON.parse('{"UTI AMC IPO":{"name":"UTI AMC IPO","image":"data:image/png;base64,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","date":"Sep 29,2020 - Oct 1,2020","price":"552-554","description":"Incorporated in 2002, UTI AMC is in the business of managing the domestic mutual funds of UTI Mutual Fund, provides portfolio management services to institutional clients and high net worth individuals like Employee Provident Fund Organisation, National Skill Development Fund, Postal Life Insurance, and manages retirement funds viz. NPS, offshore funds like Shinsei UTI India Fund, and alternative investment funds catering to a diverse group of individuals, institutional investors, banks, trusts, and NRIs.","details":{"issue_type":"Book Built Issue IPO","face_value":"Rs.10","issue_size":"38,987,081 Eq Shares","market_lot":"27 shares","min_order_qty":"27 shares","listing":"BSE, NSE","minimum_amount":"\u20b914,958"},"timetable":{"open_date":"Sep 29,2020","close_date":"Oct 1,2020","finalization_date":"Oct 7, 2020","refund_date":"Oct 8, 2020","credit_date":"Oct 9,2020","listing_date":"Oct 12,2020"},"promoters_holdings":{"pre_issue":100,"post_issue":69.2},"shares_offered_by_category":{"QIB":50,"NII":15,"Retail":35}},"Mazgoan dock ipo":{"name":"Mazgoan Dock IPO","image":"data:image/png;base64,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","date":"Sep 29,2020 - Oct 1,2020","price":"552-554","description":"Mazagon Dock Shipbuilders Limited (MDL) (IAST: Majhag\u0101nv Dawk Limi\u1e6de\u1e0d), formerly called Mazagon Dock Limited, is a shipyard situated Mazagaon, Mumbai. It manufactures warships and submarines for the Indian Navy and offshore platforms and associated support vessels for offshore oil drilling. It also builds tankers, cargo bulk carriers, passenger ships and ferries","details":{"issue_type":"Book Built Issue IPO","face_value":"Rs.10","issue_size":"30,599,017 Eq Shares","market_lot":"103 Shares","min_order_qty":"103 Shares","listing":"BSE, NSE","minimum_amount":"\u20b914,935"},"timetable":{"open_date":"Sep 29,2020","close_date":"Oct 1,2020","finalization_date":"Oct 7, 2020","refund_date":"Oct 8, 2020","credit_date":"Oct 9,2020","listing_date":"Oct 12,2020"},"promoters_holdings":{"pre_issue":100,"post_issue":85},"shares_offered_by_category":{"QIB":49,"NII":14,"Retail":34,"Employee":0.01}}}')}},[[164,1,2]]]);
//# sourceMappingURL=main.8e7cc22c.chunk.js.map