import { useEffect, useState } from "react"
import './scroll.css'

export default function ScrollIndicator({ url }) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [scrollPercentage, setScrollPercentage] = useState(0);


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

    function handScrollPercentage() {
        const howMuchScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScroll / height) * 100)

    }


    useEffect(() => {
        window.addEventListener('scroll', handScrollPercentage)

        return () => {
            window.removeEventListener('scroll', () => {

            })
        }
    })


    console.log(data, loading);

    if (errorMessage) {
        return <div>error in loading data</div>
    }

    if (loading) {
        return <div>loading data ! Please wait</div>
    }

    return (

        <div className="bg-black text-white flex justify-center items-center py-4 font-medium">
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress-tracking-container">
                    <div
                        className="current-progress-bar"
                        style={{ width: `${scrollPercentage}%` }}
                    ></div>
                </div>
            </div>

            <div className="text-center py-8">
                {data && data.length > 0 ?
                    data.map(dataItem => <p key={dataItem.id}>{dataItem.title}</p>)
                    : null
                }
            </div>
        </div>


    )
}