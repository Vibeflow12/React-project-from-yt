import { useEffect, useState } from "react"

export default function ScrollIndicator({ url }) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [scrollPercentage, setScrollPercentage] = useState();


    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const responce = await fetch(getUrl);
            const data = await responce.json()
            console.log(data);
            console.log(data);

            if (data && data.products && data.products.length > 0) {
                setData(data.products);
                setLoading(false);
            }


        } catch (e) {
            console.log(e);
            setErrorMessage(e.message)
        }

    }

    useEffect(() => {
        fetchData(url);
    }, [url]);



    console.log(data, loading);
    return (
        <div className="bg-black text-white flex justify-center items-center py-4 font-semibold">
            <div>

                {data && data.length > 0 ?
                    data.map(dataItem => <p>{dataItem.title}</p>)
                    : null

                }
            </div>
        </div>
    )
}