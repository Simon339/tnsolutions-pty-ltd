import React, { JSX } from 'react'

interface ServiceCardProps {
    icon: JSX.Element;
    title: string;
    description: string;
}

const Service_Card = ({ icon, title, description }: ServiceCardProps) => {
    return (
        <div className="service_card backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 relative drop-shadow-xl">
            <div className="flex gap-4">
                <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center">
                        {icon}
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>
            </div>

        </div>
    )
}

export default Service_Card
