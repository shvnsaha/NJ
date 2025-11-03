import services from "@/db";
import Link from "next/link";
import React from "react";

const ServicePage = () => {
  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Our Services</h1>
      <div className="grid gap-4">
        {services.map((service) => (
          <Link href={`/services/${service._id}`} key={service._id}>
            <div className="bg-amber-500 p-4 rounded-lg hover:bg-amber-600 transition">
              <h2 className="text-xl font-semibold">{service.service_name}</h2>
              <p className="mt-2">{service.service_description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
