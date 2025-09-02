import React from 'react'
const sections = [
    {
        heading: "Get your desired TV screen size | Starting ₹6,999",
        categories: [
            { title: "Budget TVs | Save extra with No Cost EMI", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Raghu/JulyBAU/turr_2._SY116_CB789347957_.jpg" },
            { title: "4K TVs | Up to 24 months No cost EMI", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Raghu/JulyBAU/turr_3._SY116_CB789347957_.jpg" },
            { title: "Big screen | Free installation", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Raghu/JulyBAU/turr_1._SY116_CB789347957_.jpg" },
            { title: "Ultra Premium TVs | Up to 50% off", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Raghu/JulyBAU/turr_4._SY116_CB789347957_.jpg" }
        ],
    },

    {
        heading: "Automotive essentials | Up to 60% offf",
        categories: [
            { title: "Cleaning accessories", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg" },
            { title: "Tyre & rim care", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg" },
            { title: "Helmets", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg" },
            { title: "Vaccum cleaner", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg" }
        ],
    },

    {
        heading: "Starting ₹199 | Amazon Brands & more",
        categories: [
            { title: "Starting ₹199 | Bedsheets", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_2._SY116_CB567468236_.jpg" },
            { title: "Starting ₹199 | Curtains", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_3._SY116_CB567468236_.jpg" },
            { title: "Minimum 40% off | Ironing board & more", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_4._SY116_CB567468236_.jpg" },
            { title: "Up to 60% off | Home Decor", image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_1._SY116_CB567468236_.jpg" }
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


export default function ProductCards2(){
    return (
       < div className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-100 '>
        {sections.map((section, i) =>(
            <CategorySection key = {i} {...section}/>
        ))}
        </div>
    )
}

