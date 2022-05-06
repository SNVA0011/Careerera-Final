import React, { useEffect } from "react";
import { useParams } from "react-router";
import BatchDetail from "./BatchDetail";
import { Helmet } from "react-helmet";
const DetailBatch = () => {
    const citys = useParams();

    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div>
            <Helmet>
                <title>{citys.data + " in " + citys.date}|{citys.workid}</title> 
                <link rel="canonical" href={"https://www.careerera.com/" + citys.data + "/" + "liveoline" + "/" + citys.data + "/" + citys.workid} />
            </Helmet>
            <BatchDetail title={"in " + citys.citys} data={true} />
        </div>
    )
}

export default DetailBatch;