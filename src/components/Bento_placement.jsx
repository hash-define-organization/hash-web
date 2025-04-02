import star from "../assets/Frame.png"
import google from "../assets/companies/google.png"
import microsoft from "../assets/companies/microsoft.png"
import amazon from "../assets/companies/amazon.png"
import zomato from "../assets/companies/zomato.png"
import juspay from "../assets/companies/juspay.png"
import groww from "../assets/companies/groww.png"
import routemagic from "../assets/companies/routemagic.png"
import flipkart from "../assets/companies/flipkart.png"
import coinswitch from "../assets/companies/coinswitch.png"
import agoda from "../assets/companies/agoda.png"
import tokopedia from "../assets/companies/tokopedia.png"
import zuddle from "../assets/companies/zuddle.png"
import myntra from "../assets/companies/myntra.png"
import ion from "../assets/companies/ion.png"
import zeta from "../assets/companies/zeta.png"
import zs from "../assets/companies/zs.png"
import deliotte from "../assets/companies/deliotte.png"
import trinity from "../assets/companies/trinity.png"
import rtds from "../assets/companies/rtds.png"
import cvent from "../assets/companies/cvent.png"

function Bento_placement() {
    const companies = [
        {logo : google, name : "google"},
        {logo : microsoft, name : "microsoft"},
        {logo : amazon, name : "amazon"},
        {logo : zomato, name : "zomato"},
        {logo : juspay, name : "juspay"},
        {logo : groww, name : "groww"},
        {logo : routemagic, name : "routemagic"},
        {logo : flipkart, name : "flipkart"},
        {logo : coinswitch, name : "coinswitch"},
        {logo : agoda, name : "agoda"},
        {logo : tokopedia, name : "tokopedia"},
        {logo : zuddle, name : "zuddle"},
        {logo : myntra, name : "myntra"},
        {logo : ion, name : "ion"},
        {logo : zeta, name : "zeta"},
        {logo : zs, name : "zs"},
        {logo : deliotte, name : "deliotte"},
        {logo : trinity, name : "trinity"},
        {logo : rtds, name : "rtds"},
        {logo : cvent, name : "cvent"}
    ]

    return (
        <div className="bg-black text-white p-12 flex flex-col items-center min-h-screen">
            <div>
                <div className="flex gap-2 mb-6 text-left justify-start text-left">
                    <img src={star} alt="star" className="w-6 h-6" />
                    <h2 className="text-xl font-semibold">Our Alumni At</h2>
                </div>

                <div className="grid grid-cols-4 grid-rows-5 w-full max-w-6xl">
                    {companies.map((company, index) => (
                        <div key={index} className="bg-black p-8 text-center border-white border-[1px] h-40 flex items-center justify-center">
                            <img src={company.logo} alt={company.name} className="" />
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
}

export default Bento_placement;
