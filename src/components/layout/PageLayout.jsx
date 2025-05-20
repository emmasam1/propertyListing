import React, { useState } from "react";
import {
  FilterOutlined,
  DollarOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  Select,
  InputNumber,
  Checkbox,
  theme,
  Typography,
  Modal,
  Button,
} from "antd";
import { Outlet } from "react-router";
import { CiLocationOn } from "react-icons/ci";
import { TfiAngleRight } from "react-icons/tfi";
import StateList from "../locations/Locations";
import { SlSizeFullscreen } from "react-icons/sl";
import { RiFilter2Line } from "react-icons/ri";

const { Sider, Content } = Layout;
const { Option } = Select;
const { Text } = Typography;

const PageLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Filter states
  const [propertyType, setPropertyType] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [isAvailable, setIsAvailable] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Layout style={{ height: "100vh", overflow: "hidden" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          theme="light"
          onCollapse={(value) => setCollapsed(value)}
          breakpoint="md"
          onBreakpoint={(broken) => setCollapsed(broken)}
          width={250}
          style={{ background: "#fff", padding: "16px 10px" }}
        >
          {!collapsed ? (
            <>
              <h3 style={{ margin: "0 0 16px", textAlign: "center" }}>
                Filters
              </h3>
              <Menu mode="inline" style={{ borderRight: 0 }} selectable={false}>
                <div
                  className="cursor-pointer border-t border-gray-300 py-5 flex justify-between items-center mb-4"
                  onClick={showModal}
                >
                  <div className="cursor-pointer">
                    <div className="flex items-center gap-2">
                      <CiLocationOn size={20} />
                      <h1>Location</h1>
                    </div>
                    <h1 className="mt-4 ml-7">All Nigeria</h1>
                  </div>
                  <TfiAngleRight color="gray" size={20} />
                </div>

                <div className="border-t border-b border-gray-300 py-5">
                  <Menu.Item key="price" icon={<DollarOutlined />} disabled>
                    Price Range
                  </Menu.Item>
                  <div
                    style={{ padding: "0 16px 16px", display: "flex", gap: 8 }}
                  >
                    <InputNumber
                      value={minPrice}
                      min={0}
                      onChange={setMinPrice}
                      placeholder="Min"
                      style={{ width: "100%" }}
                    />
                    <InputNumber
                      value={maxPrice}
                      min={0}
                      onChange={setMaxPrice}
                      placeholder="Max"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                <div className="border-b border-gray-300 py-5 mt-4">
                  <div className="flex items-center gap-2">
                    <Menu.Item key="price" icon={<SlSizeFullscreen />} disabled>
                    Size
                  </Menu.Item>
                  </div>
                  <div className="mt-4">
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 1.5, 2, 2.5, 3, 4, 5].map((size) => (
                        <label key={size} className="flex items-center gap-1">
                          <Checkbox
                            value={size}
                            onChange={(e) => {
                              // Optional: handle selection state
                              console.log("Selected Size:", e.target.value);
                            }}
                          />
                          <span className="text-sm">{size} m²</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex justify-center">
                      <Button type="primary"> <RiFilter2Line /> Filter</Button>
                </div>

                

                {/* <Menu.Item key="availability" icon={<CheckOutlined />} disabled>
                  Availability
                </Menu.Item>
                <div style={{ padding: "0 16px" }}>
                  <Checkbox
                    checked={isAvailable}
                    onChange={(e) => setIsAvailable(e.target.checked)}
                  >
                    Only Available
                  </Checkbox>
                </div> */}
              </Menu>
            </>
          ) : (
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <FilterOutlined style={{ fontSize: 20 }} />
              <Text style={{ display: "block", fontSize: 12 }}>Filter</Text>
            </div>
          )}
        </Sider>

        <Layout>
          <Content
            style={{
              margin: 0,
              padding: 24,
              overflowY: "auto",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <div style={{ minHeight: "100%", paddingBottom: 20 }}>
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>

      <Modal
        width={800}
        title=""
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <StateList />
      </Modal>
    </>
  );
};

export default PageLayout;
