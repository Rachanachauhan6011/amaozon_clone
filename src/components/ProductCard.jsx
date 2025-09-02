import React from 'react'
const sections = [
    {
        heading: "Revamp your home in style",
        categories: [
            { title: "Cushion covers, bedsheets & more", image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg" },
            { title: "Figurines, vases & more", image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg" },
            { title: "Home storage", image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg" },
            { title: "Lighting solutions", image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg" }
        ],
    },

    {
        heading: "Appliances for your home | Up to 55% off",
        categories: [
            { title: "Air conditioners", image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" },
            { title: "Refrigerators", image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" },
            { title: "Microwaves", image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" },
            { title: "Washing Machines", image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" }
        ],
    },

    {
        heading: "Starting ₹149 | Headphones",
        categories: [
            { title: "Starting ₹249 | boAt", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg" },
            { title: "Starting ₹349 | boult", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg" },
            { title: "Starting ₹649 | Noise", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg" },
            { title: "Starting ₹149 | Zebronics", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/MSO/PD3/PC_QuadCard_Zeb_0.5x_1._SY116_CB570220221_.jpg" }
        ],
    },

    {
        heading: "Under ₹499 | Deals on home improvement essentials",
        categories: [
            { title: "Under ₹199 | Cleaning supplies", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wipes_low_res_V1._SY116_CB549138744_.jpg" },
            { title: "Under ₹399 | Bathroom Accessories", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Shower_heads_low_res_V1._SY116_CB549138744_.jpg" },
            { title: "Under ₹499 | Home tools", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Tools_low_res_V1._SY116_CB549138744_.jpg" },
            { title: "Under ₹299 | Wallpapers", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg" }
        ],
    },
];
function CategoryCard({ title, image }) {
    return (
        <div className='items-center text-center cursor-pointer'>
            <div className='w-full h-28 bg-gray-100 rounded overflow-hidden flex items-center justify-center'>
                <img src={image} alt={title} className='object-cover h-full w-full' />
            </div>
            <p className='text-xs mt-1'>{title}</p>
        </div>
    )
}

function CategorySection({ heading, categories }) {
    return (
        <div className='bg-white p-4 shadow rounded-xl flex flex-col justify-between'>
            <div>
                <h2 className='text-lg font-bold mb-3'>{heading}</h2>
                <div className='grid grid-cols-2 gap-3'>
                    {categories.map((cat, i) => (
                        <CategoryCard key={i} {...cat} />
                    ))}
                </div>
            </div>
              {/* // see more button */}
            <button className='mt-4 text-sm font-semibold text-blue-600 hover:underline self-start'>See more</button>
        </div>
    );

}


export default function ProductCard(){
    return (
       < div className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-100 '>
        {sections.map((section, i) =>(
            <CategorySection key = {i} {...section}/>
        ))}
        </div>
    )
}

