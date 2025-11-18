<script setup lang="ts">
</script>

<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-white border-bottom shadow-sm">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="/images/logo-energy-pilates.png" alt="Energy Pilates" style="width: 150px;">
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link fw-500" href="#">
              <i class="fas fa-newspaper text-success me-1"></i> Bài viết
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-500" href="#">
              <i class="fas fa-play-circle text-success me-1"></i> Video
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-500" href="#">
              <i class="fas fa-circle-info text-success me-1"></i> Giới thiệu
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-500" href="#">
              <i class="fas fa-calendar-alt text-success me-1"></i> Sự kiện
            </a>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle fw-500" href="#" role="button" data-bs-toggle="dropdown">
              <i class="fas fa-user-circle text-success me-1"></i> Tài khoản
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
              <li><a class="dropdown-item" href="#">Quên mật khẩu</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Đăng ký thành viên</a></li>
            </ul>
          </li>
        </ul>

        <ul class="navbar-nav d-flex align-items-center">
          <li class="nav-item">
            <a class="nav-link active fw-500" href="#">Tiếng Việt</a>
          </li>
          <li class="nav-item">
            <span class="text-muted mx-2">|</span>
          </li>
          <li class="nav-item">
            <a class="nav-link text-muted fw-500" href="#">Tiếng Anh</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="position-relative overflow-hidden" style="height: 500px;">
          <img src="/images/anhbia.webp" class="d-block w-100 h-100" 
               alt="Năng lượng xanh" style="object-fit: cover;">

          
        </div>
      </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped>
.nav-link {
  color: #333 !important;
  transition: all 0.3s;
}
.nav-link:hover {
  color: #56AB2F !important;
}
.nav-link.active {
  color: #56AB2F !important;
  font-weight: 600;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(0,0,0,0.3);
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
</style>