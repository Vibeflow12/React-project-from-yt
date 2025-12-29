import useFetch from "./index.jsx"

export default function UseFetchHookTest() {

    const { data, error, pending } = useFetch("https://dummyjson.com/products", {})
    return <div>
        <h1 className="font-extrabold "> Use Fetch Hook</h1>
        {pending ? <h3 className="font-extrabold ">Pending plz wait</h3> : null}
        {error ? <h3>{error} plz wait</h3> : null}
        {data && data.products && data.products.length
            ? data.products.map((productItem) => (
                <p key={productItem.id}>{productItem.title}</p>
            ))
            : null
        }
    </div>
}