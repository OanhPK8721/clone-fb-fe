import { useState } from 'react';
import { AuthenticateService } from '../../services/authen';
const useLogin = () => {
  // KHÔNG CẦN DÙNG USESTATE TẠI ĐÂY
  // ĐÂY LÀ MỘT HÀM XỬ LÝ CALL API, NÓ NHÂN THAM SỐ TRUYỀN VÀO VÀ TRẢ VỀ KẾT QUẢ LUÔN, KHÔNG CẦN QUẢN LÝ STATE.
  // --> MỘT ĐIỀU CHỨNG MINH NÓ SAI LÀ ANH GỌI {setUsername, setPassword, handleLogin} TRONG useLogin(), 
  // NHƯNG KHI GỌI handleLogin() ANH LẠI GỌI values.??? ĐỂ LẤY email VÀ password (hai cái này lấy từ atribute của thằng Form của antd)
  // --> đúng là mình sẽ đặt useState (username, password) ở ngoài thằng LoginPage() vì anh chỉ dùng đến nó để phục vụ cập nhật giao diện khi action event onChange của input

  // isLoading đặt ở LoginPage() -> dùng trong hàm onFinish -> để set thằng button login thành đang loading

  // error không cần, có thể trả về message lỗi từ hàm handleLogin() luôn

  // --> Sau tất cả không cần viết hẳn thành một hook (trường hợp này không phải là hook), chỉ cần viết thành một hàm xử lý login là đủ 
  // -> gọi trực tiếp đến handleLogin() trong thằng LoginPage() là xong
  //  chuyển sang folder src/api/authen.js

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const authService = new AuthenticateService();

  const handleLogin = async ({
    username,
    password,
  }) => {
    try {
      const res = await authService.login(username, password);
      setIsLoading(true);
      return res;
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    isLoading,
    error,
    handleLogin,
  };
};

export default useLogin;