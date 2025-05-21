import React, { useState } from "react";
import {
  Card,
  Avatar,
  Button,
  Row,
  Col,
  Modal,
  Form,
  Input,
  Upload,
  message,
  Popconfirm,
} from "antd";
import { EditOutlined, UploadOutlined } from "@ant-design/icons";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import {
  FaInstagram,
  FaTelegramPlane,
  FaFacebookMessenger,
} from "react-icons/fa";
import ImgCrop from "antd-img-crop";

const mockProperties = [
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
];

const Profile = () => {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [fileList, setFileList] = useState([]);

  const handleImageChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onEditFinish = (values) => {
    message.success("Profile updated!");
    setEditModalVisible(false);
    console.log("Updated profile values:", values);
  };

  const handleEditProperty = (id) => {
    message.info(`Edit property with ID: ${id}`);
  };

  const handleDeleteProperty = (id) => {
    message.success(`Deleted property with ID: ${id}`);
  };

  const handleMarkAsSold = (id) => {
    message.success(`Property with ID: ${id} marked as sold`);
  };

  return (
    <div className="p-4 md:p-8 min-h-screen">
      {/* Profile Section */}
      <Card className="max-w-6xl !mx-auto mb-10 shadow-md">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div
            onClick={() => setEditModalVisible(true)}
            className="cursor-pointer"
          >
            <Avatar
              size={100}
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-2xl font-semibold mb-1">John Doe</h2>
              <MdVerified color="blue" size={20} className="-mt-3"/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 text-gray-600 text-sm mb-3">
              <p>Email: johndoe@example.com</p>
              <p>Phone: +234 801 234 5678</p>
              <p>Company: Green Estates Ltd.</p>
              <div className="flex gap-3 text-xl mt-3">
                <IoLogoWhatsapp color="#25D366" className="cursor-pointer" />
                <FaInstagram color="#E1306C" className="cursor-pointer" />
                <FaTelegramPlane color="#0088cc" className="cursor-pointer" />
                <FaFacebookMessenger
                  color="#00B2FF"
                  className="cursor-pointer"
                />
              </div>
            </div>

            <Button
              icon={<EditOutlined />}
              onClick={() => setEditModalVisible(true)}
            >
              Edit Profile
            </Button>
          </div>
        </div>
      </Card>

      {/* Properties */}
      <div className="max-w-6xl mx-auto mt-10">
        <h3 className="text-xl font-semibold mb-4">Your Uploaded Properties</h3>
        <Row gutter={[16, 16]}>
          {mockProperties.map((property) => (
            <Col xs={24} sm={12} md={12} lg={6} key={property.id}>
              <Card
                hoverable
                cover={
                  <img
                    alt={property.title}
                    src={property.image}
                    className="h-40 object-cover w-full"
                  />
                }
                className="shadow-md"
              >
                <h4 className="font-semibold text-lg">{property.title}</h4>
                <p className="text-gray-500 text-sm">{property.location}</p>
                <p className="text-gray-800 font-bold mb-2">{property.price}</p>
                <div className="flex justify-between gap-2">
                  <Button
                    size="small"
                    onClick={() => handleEditProperty(property.id)}
                  >
                    Edit
                  </Button>
                  <Popconfirm
                    title="Are you sure to delete this property?"
                    onConfirm={() => handleDeleteProperty(property.id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button danger size="small">
                      Delete
                    </Button>
                  </Popconfirm>
                  <Button
                    type="default"
                    size="small"
                    onClick={() => handleMarkAsSold(property.id)}
                  >
                    Sold
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Edit Profile Modal */}
      <Modal
        title="Edit Profile"
        open={editModalVisible}
        onCancel={() => setEditModalVisible(false)}
        footer={null}
      >
        <Form layout="vertical" onFinish={onEditFinish}>
          <Form.Item label="First Name" name="firstName" initialValue="John">
            <Input />
          </Form.Item>
          <Form.Item label="Last Name" name="lastName" initialValue="Doe">
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            initialValue="johndoe@example.com"
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phone"
            initialValue="+234 801 234 5678"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Company"
            name="company"
            initialValue="Green Estates Ltd."
          >
            <Input />
          </Form.Item>
          <Form.Item label="Upload New Profile Picture">
            <ImgCrop rotationSlider aspect={1}>
              <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={handleImageChange}
                beforeUpload={() => false}
              >
                {fileList.length < 1 && "+ Upload"}
              </Upload>
            </ImgCrop>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Profile;
