import React from "react";
import { Button, Form, Grid, Input, theme, Typography } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import useRegister from "../../hooks/auth/signUp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

export default function SignUpPage() {
  const { token } = useToken();
  const screens = useBreakpoint();
  const getUseRegister = useRegister();

  const onRegister =  async (values) => {
    const res = await getUseRegister.handleRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
    if (res?.status === 200) {
      toast("Đăng ký thành công", {
        type: "success",
      });
      window.location.href = "/login";
      
  }
  else {
    toast(res?.response?.data?.message, {
      type: "error",
      position: "bottom-center",
    });
  }
 
};

  const styles = {
    container: {
      margin: "0 auto",
      padding: screens.md ? `${token.paddingXL}px` : `${token.paddingXL}px ${token.padding}px`,
      width: "380px",
    },
    forgotPassword: {
      float: "right"
    },
    header: {
      marginBottom: token.marginXL,
      textAlign: "center"
    },
    section: {
      alignItems: "center",
      backgroundColor: token.colorBgContainer,
      display: "flex",
      height: screens.sm ? "100vh" : "auto",
      padding: "0px 0px",
    },
    signup: {
      marginTop: token.marginLG,
      textAlign: "center",
      width: "100%"
    },
    text: {
      color: token.colorTextSecondary
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.125" width="32" height="32" rx="6.4" fill="#1890FF" />
            <path
              d="M19.3251 4.80005H27.3251V12.8H19.3251V4.80005Z"
              fill="white"
            />
            <path d="M12.925 12.8H19.3251V19.2H12.925V12.8Z" fill="white" />
            <path d="M4.92505 17.6H14.525V27.2001H4.92505V17.6Z" fill="white" />
          </svg>

          <Title style={styles.title}>Đăng ký</Title>
          <Text style={styles.text}>
            Tham gia cùng chúng tôi để kết nối với bạn bè và những người khác
          </Text>
        </div>
        <Form
          name="normal_signup"
          onFinish={onRegister}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your Name!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Họ và tên" onChange={getUseRegister.setUsername} />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" onChange={getUseRegister.setEmail} />
          </Form.Item>
          <Form.Item
            name="password"
            extra="Mật khẩu cần lớn hơn 8 kí tự"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Mật khẩu"
              onChange={getUseRegister.setPassword}
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }}>
            <Button block type="primary" htmlType="submit" onSubmit={onRegister}>
              Đăng ký
            </Button>
            <div style={styles.signup}>
              <Text style={styles.text}>Bạn đã có tài khoản?</Text>{" "}
              <Link href="/login">Đăng nhập</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
     
    </section>
  );
}