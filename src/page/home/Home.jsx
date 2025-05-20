import { Card, Button } from "antd";
import { Link } from "react-router";
import { CiLocationOn } from "react-icons/ci";
import { SlSizeFullscreen } from "react-icons/sl";
import { IoPin } from "react-icons/io5";
const { Meta } = Card;

const Home = () => {
  const properties = [
    {
      id: 1,
      title: "Metro House",
      image:
        "https://kit.sociolib.com/realtic/wp-content/uploads/sites/7/2024/07/02.webp",
      location: "Kuje",
      size: "450m²",
      price: "₦ 1,500,500",
    },
    {
      id: 2,
      title: "Green Villa",
      image:
        "https://kit.sociolib.com/realtic/wp-content/uploads/sites/7/2024/07/23.webp",
      location: "Asokoro",
      size: "380m²",
      price: "₦ 2,300,000",
    },
    {
      id: 3,
      title: "Sunset Court",
      image:
        "https://kit.sociolib.com/realtic/wp-content/uploads/sites/7/2024/07/03.webp",
      location: "Maitama",
      size: "500m²",
      price: "₦ 3,800,000",
    },
    {
      id: 4,
      title: "Ocean Breeze",
      image:
        "https://kit.sociolib.com/realtic/wp-content/uploads/sites/7/2024/07/04.webp",
      location: "Lekki",
      size: "420m²",
      price: "₦ 2,150,000",
    },
    {
      id: 5,
      title: "Hilltop Mansion",
      image:
        "https://kit.sociolib.com/realtic/wp-content/uploads/sites/7/2024/07/05.webp",
      location: "Gwarinpa",
      size: "600m²",
      price: "₦ 4,000,000",
    },
    {
      id: 6,
      title: "Palm Residence",
      image:
        "https://kit.sociolib.com/realtic/wp-content/uploads/sites/7/2024/07/06.webp",
      location: "Jabi",
      size: "370m²",
      price: "₦ 2,700,000",
    },
    {
      id: 7,
      title: "Silver Estate",
      image:
        "https://kit.sociolib.com/realtic/wp-content/uploads/sites/7/2024/07/07.webp",
      location: "Kubwa",
      size: "460m²",
      price: "₦ 1,900,000",
    },
    {
      id: 8,
      title: "Lakeview Homes",
      image:
        "https://kit.sociolib.com/realtic/wp-content/uploads/sites/7/2024/07/08.webp",
      location: "Wuye",
      size: "510m²",
      price: "₦ 3,100,000",
    },
    {
      id: 9,
      title: "The Pearl",
      image:
        "https://kit.sociolib.com/realtic/wp-content/uploads/sites/7/2024/07/06.webp",
      location: "Utako",
      size: "390m²",
      price: "₦ 2,450,000",
    },
    {
      id: 10,
      title: "Royal Gardens",
      image:
        "https://kit.sociolib.com/realtic/wp-content/uploads/sites/7/2024/07/10.webp",
      location: "Garki",
      size: "430m²",
      price: "₦ 2,980,000",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {properties.map((property) => (
          <Card
            key={property.id}
            hoverable
            className="overflow-hidden"
            cover={
              <div className="relative">
                <img
                  alt="property"
                  src={property.image}
                  className="h-80 w-full object-cover"
                />
                <div className="absolute top-3 left-3 flex items-center gap-1 bg-[#FFC400] bg-opacity-60 px-3 py-1 rounded-sm">
                  <IoPin size={20}/>
                  <span className="font-medium text-md">{property.location}</span>
                </div>
              </div>
            }
          >
            <h1 className="font-bold text-1xl">{property.title}</h1>

            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center gap-2">
                <CiLocationOn size={22} />
                <span className="text-base font-semibold">
                  {property.location}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <SlSizeFullscreen size={18} className="text-gray-600" />
                <span className="text-base font-semibold">{property.size}</span>
              </div>
            </div>

            <div className="border-t border-t-gray-200 flex justify-between items-center mt-4 pt-4">
              <span className="font-bold text-md text-green-700">
                {property.price}
              </span>
              <Link
                to={`/property/${property.id}`}
                className="text-blue-600 font-medium hover:underline"
              >
                View More
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
