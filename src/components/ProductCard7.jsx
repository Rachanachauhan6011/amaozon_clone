import React from 'react'
const sections = [
    {
        heading: "Get your desired TV screen size | Starting ₹6,999",
        categories: [
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Raghu/JulyBAU/turr_2._SY116_CB789347957_.jpg" },
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Raghu/JulyBAU/turr_3._SY116_CB789347957_.jpg" },
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Raghu/JulyBAU/turr_1._SY116_CB789347957_.jpg" },
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Raghu/JulyBAU/turr_4._SY116_CB789347957_.jpg" }
        ],
    },

    {
        heading: "Customers’ Most-Loved products",
        categories: [
            { image: "https://m.media-amazon.com/images/I/615873vXvfL._AC_SY145_.jpg" },
            { image: "https://m.media-amazon.com/images/I/519YnJNsrVL._AC_SY145_.jpg" },
            { image: "https://m.media-amazon.com/images/I/614GVH+B8HL._AC_SY145_.jpg" },
            { image: "https://m.media-amazon.com/images/I/71JtekzufnL._AC_SY145_.jpg" }
        ],
    },

    {
        heading: "Up to 50% off | International brands",
        categories: [
            { image: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/2025/WK_1/PC_CC_379X304_WK_33._SY304_CB803820436_.jpg" },
        ]
    },
    {
        heading: "Best Sellers in Toys & Games",
        categories: [
            { image: "https://m.media-amazon.com/images/I/61ux72SCOpL._AC_SY170_.jpg" },
            { image: "https://m.media-amazon.com/images/I/51AWNa6+TOL._AC_SY170_.jpg" },
            { image: "https://m.media-amazon.com/images/I/61C3MYoh5OL._AC_SY170_.jpg" },
            { image: "https://m.media-amazon.com/images/I/61YVpEBCUhL._AC_SY170_.jpg" }
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


export default function ProductCards2() {
    return (
        < div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-100 '>
            {sections.map((section, i) => (
                <CategorySection key={i} {...section} />
            ))}
        </div>
    )
}

