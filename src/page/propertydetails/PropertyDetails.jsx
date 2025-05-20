import React, { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import {
  FaInstagram,
  FaTelegramPlane,
  FaFacebookMessenger,
} from "react-icons/fa";

const mediaList = [
  {
    type: "image",
    src: "https://kit.sociolib.com/realtic/wp-content/uploads/sites/7/2024/07/02.webp",
  },
  {
    type: "image",
    src: "https://kit.sociolib.com/realtic/wp-content/uploads/sites/7/2024/07/23.webp",
  },
  {
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const PropertyDetails = () => {
  const [selectedMedia, setSelectedMedia] = useState(mediaList[0]);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left side: media */}
        <div className="grid grid-cols-5 gap-4">
          {/* Thumbnails */}
          <div className="col-span-1 flex flex-col gap-4">
            {mediaList.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedMedia(item)}
                className="cursor-pointer rounded overflow-hidden hover:opacity-80 transition"
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`Media ${index + 1}`}
                    className="object-cover"
                  />
                ) : (
                  <video className="w-full h-20 object-cover" muted>
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            ))}
          </div>

          {/* Main Display */}
          <div className="col-span-4">
            <div className="rounded overflow-hidden ">
              {selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.src}
                  alt="Selected"
                  className="w-full object-cover"
                />
              ) : (
                <video controls className="w-full h-[300px] object-cover">
                  <source src={selectedMedia.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>

        {/* Right side: property details */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">4-Bedroom Duplex at Lekki</h2>
          <p className="text-gray-600">
            A spacious 4-bedroom duplex with modern design, located in the heart
            of Lekki.
          </p>

          <ul className="list-disc pl-5 text-gray-700">
            <li>Price: ₦120,000,000</li>
            <li>Location: Lekki Phase 1</li>
            <li>Size: 2 Plots (200 m²)</li>
            <li>Status: Available</li>
            <li>Bedrooms: 4</li>
            <li>Bathrooms: 5</li>
          </ul>

          <div className="flex gap-4 text-2xl">
            <IoLogoWhatsapp
              color="#25D366"
              className="cursor-pointer transition-transform duration-200 hover:scale-110"
            />
            <FaInstagram
              color="#E1306C"
              className="cursor-pointer transition-transform duration-200 hover:scale-110"
            />
            <FaTelegramPlane
              color="#0088cc"
              className="cursor-pointer transition-transform duration-200 hover:scale-110"
            />
            <FaFacebookMessenger
              color="#00B2FF"
              className="cursor-pointer transition-transform duration-200 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
