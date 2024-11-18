import React from "react";
import { Button, Checkbox, Form, Grid, Input, theme, Typography, Image } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import useLogin from "../../hooks/auth/login";

const { Text,  Link } = Typography;
const { useToken } = theme;
const { useBreakpoint } = Grid;


export default function LoginPage() {
  const { token } = useToken();
  // Mẫu đúng
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [isLoading, setIsLoading] = useState(false);

  const screens = useBreakpoint();
  const {
    setUsername,
    setPassword,
    handleLogin,
  } = useLogin();

  const onFinish = async (values) => {
    // setIsLoading(true);
    const res =  await handleLogin({
      username: values.email,
      password: values.password
    });

    if (res?.data.token) {
      localStorage.setItem("token", res.data.token);
      window.location.href = "/";
    }
    // setIsLoading(false);
  };

  const styles = {
    container: {
      margin: "0 0",
      padding: screens.md ? `${token.paddingXL}px` : `${token.sizeXXL}px ${token.padding}px`,
      width: "380px"
    },
    footer: {
      marginTop: token.marginLG,
      textAlign: "center",
      width: "100%"
    },
    forgotPassword: {
      float: "right"
    },
    header: {
      marginBottom: token.marginXL
    },
    section: {
      alignItems: "center",
      backgroundColor: token.colorBgContainer,
      display: "flex",
      height: screens.sm ? "100vh" : "auto",
      padding: screens.md ? `${token.sizeXXL}px 0px` : "0px",
      textAlign: 'center'
    },
    text: {
      color: token.colorTextSecondary
    },
    title: {
      
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3
    }
  };

  return (
    <div className ="container" style={{ padding: "72px 0px 112px", width: "100%" ,height: "100%", textAlign: "center" }}>
      <div className="body" style={{
        margin: "0px auto",
        padding: "20px 0px",
        position: "relative",
        width:"980px",
        display: "flex",
        alignItems: 'center'
      }}>
        <div className="content" style={{ boxSizing: "border-box", marginRight: "0px", paddingRight: "32px", width: "580px", }}>
          <div className="logo">
            <Image width={"320px"} src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" preview={false} alt="" />
            </div>
          <h2 style={{ fontSize: "28px",margin:'0px', fontWeight: "normal", lineHeight: "32px", width: "500px"}}>Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</h2>
          </div>
        <div className="form">
        <div style={styles.container}>
        <div style={styles.header}>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.464294" width="24" height="24" rx="4.8" fill="#1890FF" />
            <path
              d="M14.8643 3.6001H20.8643V9.6001H14.8643V3.6001Z"
              fill="white"
            />
            <path
              d="M10.0643 9.6001H14.8643V14.4001H10.0643V9.6001Z"
              fill="white"
            />
            <path
              d="M4.06427 13.2001H11.2643V20.4001H4.06427V13.2001Z"
              fill="white"
            />
          </svg>

        </div>
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Email không đúng định dạng!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Email"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Mật khẩu không được để trống!",
                onChange: (e) => setPassword(e.target.value),
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Nhớ tài khoản</Checkbox>
            </Form.Item>
            <a style={styles.forgotPassword} href="/forgot-password">
              Quên mật khẩu?
            </a>
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }}>
            <Button block="true" type="primary" htmlType="submit" style={{ backgroundColor: "#0866ff"}} onSubmit={onFinish}>
              Đăng nhập
              {/* {isLoading ? <Spin indicator={antIcon} /> : "Đăng nhập"} */}
            </Button>
            <div style={styles.footer}>
              <Text style={styles.text}>Chưa có tài khoản?</Text>{" "}
              <Link href="/register">Đăng kí ngay</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
          </div>
        </div>
    </div>

  );
}
