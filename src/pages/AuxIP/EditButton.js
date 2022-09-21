// import React from 'react';

// const EditButton = () => {
//     return (
//         <>
//             <div className="edit">
//                 <div class="container">
//                     <button className="btn btn-primary text-white text-center ">Edit</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default EditButton;



import React, {useState} from "react";

export default function EditButton() {
    const [style, setStyle] = useState({display: 'none'});

    return (
        <div className="">
            <div style={{border: '2px solid gray', padding: 8}}
                 onMouseEnter={e => {
                     setStyle({display: 'block'});
                 }}
                 onMouseLeave={e => {
                     setStyle({display: 'none'})
                 }}
            >
                 <button  className="btn btn-primary text-white text-center" style={style}>Edit</button>
            </div>
        </div>
    );
}
