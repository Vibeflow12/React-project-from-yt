// import { FaStar } from "react-icons/fa";
// import './styles.css';
// import { useState } from "react";

// export default function Stars({ noOfStars = 5 }) {

//     const [rating, setRating] = useState(0);
//     const [hover, setHover] = useState(0);

//     function handleClick(getCurrentIndex) {
//         console.log("click", getCurrentIndex);
//         setRating(getCurrentIndex)

//     }
//     function handleMouseEnter(getCurrentIndex) {
//         console.log("enter", getCurrentIndex);
//         setHover(getCurrentIndex)
//     }
//     function handleMouseLeave() {
//         console.log("leave");
//         setHover(rating)
//     }


//     return (
//         <div style={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: "10px",
//             padding: "20px 20px"
//         }}>
//             {
//                 [...Array(noOfStars)].map((_, index) => {

//                     index += 1;

//                     return <FaStar
//                         key={index}
//                         className={index <= (hover || rating) ? 'active' : 'inactive'}
//                         onClick={() => handleClick(index)}
//                         onMouseEnter={() => handleMouseEnter(index)}
//                         onMouseLeave={() => handleMouseLeave}
//                         size={40}
//                     />
//                 })
//             }
//         </div>
//     )
// }

import { FaStar } from "react-icons/fa";
import { useState } from "react";

export default function Stars({ noOfStars = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
            }}
        >
            {[...Array(noOfStars)].map((_, index) => {
                const starValue = index + 1;
                const isActive = starValue <= (hover || rating);

                return (
                    <FaStar
                        key={starValue}
                        size={40}
                        style={{
                            cursor: "pointer",
                            color: isActive ? "gold" : "lightgray",
                            transition: "color 0.2s ease",
                        }}
                        onClick={() => setRating(starValue)}
                        onMouseEnter={() => setHover(starValue)}
                        onMouseLeave={() => setHover(0)}
                    />
                );
            })}
        </div>
    );
}
