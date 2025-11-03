import services from '@/db';
import React from 'react';

const ServiceDetailPage = async({params}) => {
  const {id} =  await(params)
  const singleData = services.find((item)=>item._id === id)
    return (
        <div>
            <h1>Service Details</h1>
            <p>{singleData.service_name}</p>
        </div>
    );
};

export default ServiceDetailPage;