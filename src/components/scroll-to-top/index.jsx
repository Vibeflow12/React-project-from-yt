import { useEffect, useState } from "react"


const ScrollToTopAndBottom = ({ url }) => {


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // async function fetchData(getUrl) {
    //     try {
    //         setLoading(true)
    //         setError('')
    //         const response = await fetch(getUrl);
    //         const data = await response.json();
    //         console.log(data);

    //         if (data && data.products && data.products.length > 0) {
    //             setData(data.products)

    //         }

    //     } catch (e) {
    //         setError(e.message);
    //     } finally {
    //         setLoading(false);
    //     }
    //     console.log(data);
    // }

    useEffect(() => {
        async function fetchData(getUrl) {
            try {
                setLoading(true)
                setError('')
                const response = await fetch(getUrl);
                const result = await response.json();

                if (result && result.products && result.products.length > 0) {
                    setData(result.products)

                }

            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }

        }
        fetchData(url)
    }, [url]);

    if (error) {
        return <div>Error loading the data</div>
    }

    if (loading) {
        return <div>Loading the data plz wait</div>
    }


    function scrollTodown() {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        })
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (

        <div className="bg-black text-white flex flex-col justify-center items-center gap-4 ">
            <h1 className="text-6xl p-2 font-extrabold">Scroll To Top And Bottom</h1>

            <button className="border-2 border-white p-2 font-bold rounded-2xl" onClick={scrollTodown}>Scroll Down</button>

            <div className="items-container text-center ">
                {data && data.length > 0 ?
                    data.map(dataItem => <p>{dataItem.title}</p>)
                    : null
                }
            </div>

            <button className="border-2  border-white p-2 font-bold rounded-2xl" onClick={scrollToTop}>Scroll Up</button>
        </div>

    )
}

export default ScrollToTopAndBottom

