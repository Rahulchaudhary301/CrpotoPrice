import React, { useState, useEffect } from "react";
import './cripto.css'
const Cripto = () => {
    const [name, setName] = useState("")
    const [data, setData] = useState([])
    const [x, setx] = useState('')

    useEffect(() => {
        fetch('https://api.coincap.io/v2/rates/' + x)
            .then((res) => res.json())
            .then((data) => {
                setData(data.data);
                console.log(data)


            });

    }, [x]);




    return (

        <>
            <h1 className="curr">Get Currency Value</h1>
            <div className="cri">



                <div className="sel1">

                    <select className="s" value={name} onChange={(e) => setx(e.target.value)} >

                        <option>please select Currency</option>
                        <option>bitcoin</option>
                        <option>liberian-dollar</option>
                        <option>swazi-lilangeni</option>
                        <option>platinum-ounce</option>
                        <option>uruguayan-peso</option>
                        <option>danish-krone</option>
                        <option>indian-rupee</option>
                        <option>silver-ounce</option>
                        <option>polish-zloty</option>
                        <option>belize-dollar</option>
                        <option>russian-ruble</option>
                        <option>ethereum</option>
                        <option>comorian-franc</option>
                        <option>canadian-dollar</option>
                        

                    </select>
                </div>


                <div className="sel2" >

                 <div className="rahu">
                    Nmae-&nbsp;<sa>{data.id}</sa><br />Rate-&nbsp; <sa>{data.rateUsd}</sa><br />Currency Symbol-&nbsp;<sa>{data.currencySymbol}</sa><br /> Type-&nbsp;<sa>{data.type}</sa>
                 </div>
                </div>

            </div>
        </>

    );
}

export default Cripto