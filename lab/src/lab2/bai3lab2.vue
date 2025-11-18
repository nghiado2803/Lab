<template>
  <div class="container my-5">
    <h2 class="text-center mb-4">Quản lý Tài Khoản</h2>

    <div class="card py-3 px-0 shadow-sm"> 

      <!-- Tabs sát trái -->
      <ul class="nav nav-tabs justify-content-start" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button 
            class="nav-link active" 
            id="register-tab" 
            data-bs-toggle="tab" 
            data-bs-target="#register-pane" 
            type="button" 
            role="tab" 
            aria-controls="register-pane" 
            aria-selected="true"
          >
            Đăng ký
          </button>
        </li>
        
        <li class="nav-item" role="presentation">
          <button 
            class="nav-link" 
            id="login-tab" 
            data-bs-toggle="tab" 
            data-bs-target="#login-pane" 
            type="button" 
            role="tab" 
            aria-controls="login-pane" 
            aria-selected="false"
          >
            Đăng nhập
          </button>
        </li>
      </ul>

      <div class="tab-content pt-3" id="myTabContent">

        <!-- Form Đăng Ký -->
        <div 
          class="tab-pane fade show active" 
          id="register-pane" 
          role="tabpanel" 
          aria-labelledby="register-tab" 
          tabindex="0"
        >
          <h3 class="card-title mb-4 ps-3">Form Đăng Ký Thông Tin</h3>
          <form class="px-3">
            
            <div class="mb-3">
              <label for="hoTen" class="form-label">Họ và tên</label>
              <input type="text" class="form-control" id="hoTen" placeholder="Nhập họ và tên">
            </div>
            
            <div class="mb-3">
              <label for="emailDangKy" class="form-label">Email</label>
              <input type="email" class="form-control" id="emailDangKy" placeholder="Nhập email">
            </div>

            <div class="mb-3">
              <label for="soDienThoai" class="form-label">Số Điện Thoại</label>
              <input type="tel" class="form-control" id="soDienThoai" placeholder="Nhập số điện thoại">
            </div>

            <div class="mb-3">
              <label for="matKhau" class="form-label">Mật Khẩu</label>
              <input type="password" class="form-control" id="matKhau" placeholder="Nhập mật khẩu">
            </div>

            <div class="mb-3">
              <label for="xacNhanMatKhau" class="form-label">Xác Nhận Mật Khẩu</label>
              <input type="password" class="form-control" id="xacNhanMatKhau" placeholder="Xác nhận mật khẩu">
            </div>

            <div class="mb-3">
              <label class="form-label d-block">Giới Tính:</label>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gioiTinh" id="nam" value="nam">
                <label class="form-check-label" for="nam">Nam</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gioiTinh" id="nu" value="nu">
                <label class="form-check-label" for="nu">Nữ</label>
              </div>
            </div>

            <div class="mb-3">
              <label for="ngonNgu" class="form-label">Ngôn Ngữ</label>
              <select class="form-select" id="ngonNgu">
                <option selected>Tiếng Việt</option>
                <option value="en">English</option>
                <option value="fr">Français</option>
              </select>
            </div>
            
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="dongYDieuKhoan">
              <label class="form-check-label" for="dongYDieuKhoan">Tôi đồng ý với các điều khoản và điều kiện</label>
            </div>

            <button type="submit" class="btn btn-primary">Đăng Ký</button>
          </form>
        </div>

        <!-- Form Đăng Nhập -->
        <div 
          class="tab-pane fade" 
          id="login-pane" 
          role="tabpanel" 
          aria-labelledby="login-tab" 
          tabindex="0"
        >
          <h3 class="card-title mb-4 ps-3">Form Đăng Nhập</h3>
          <form class="px-3">
            <div class="mb-3">
              <label for="emailDangNhap" class="form-label">Email</label>
              <input type="email" class="form-control" id="emailDangNhap" placeholder="Nhập email">
            </div>

            <div class="mb-3">
              <label for="matKhauDangNhap" class="form-label">Mật Khẩu</label>
              <input type="password" class="form-control" id="matKhauDangNhap" placeholder="Nhập mật khẩu">
            </div>

            <button type="submit" class="btn btn-primary">Đăng Nhập</button>
          </form>
        </div>
        
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bai3',
};
</script>

<style scoped>
.card {
  border: 1px solid #dee2e6;
  max-width: 550px; 
  margin: auto;
}

/* Các label sát trái */
form label {
  text-align: left;    
  margin-left: 0;      
  display: block; 
}
</style>
