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
          <li class="nav-item active-menu-item">
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
              <i class="fas fa-phone text-success me-1"></i> Liên hệ
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
        <div class="position-relative overflow-hidden" style="height: 300px;">
          <img src="/images/anhbia.webp" class="d-block w-100 h-100" 
                alt="Năng lượng xanh" style="object-fit: cover;">
        </div>
      </div>
    </div>
    </div>

  <div class="container my-4">
    <div class="row">

      <div class="col-md-3"> 
        
        <h3 class="text-info">Chuyên mục</h3>
        <ul class="list-group list-group-flush shadow-sm mb-4"> 
          <li class="list-group-item active-category d-flex justify-content-between align-items-center py-2">
            <a class="nav-link" href="#">Chế độ tập</a>
            <span class="badge bg-info rounded-pill">12</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center py-2">
            <a class="nav-link" href="#">Chế độ dinh dưỡng</a>
            <span class="badge bg-info rounded-pill">15</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center py-2">
            <a class="nav-link" href="#">Cẩm nang cuộc sống</a>
            <span class="badge bg-info rounded-pill">99</span>
          </li>
        </ul>

        <h3 class="text-info mt-4">Bài viết nổi bật</h3>
        
        <div class="d-flex mb-3 blog-hot-item">
            <img src="/images/blog-small-4.jpg" class="img-fluid me-3 rounded-2" alt="Ăn rau" style="width: 80px; height: 80px; object-fit: cover;">
            <div>
                <a href="#" class="text-dark fw-bold text-decoration-none">Lợi ích khi ăn rau mỗi ngày</a>
                <p class="text-muted small m-0">Tiêu thụ rau xanh hàng ngày sẽ giúp tăng cường thị lực, kích thích sản sinh collagen, ngăn ngừa ung thư...</p>
            </div>
        </div>

        <div class="d-flex mb-3 blog-hot-item">
            <img src="/images/blog-small-2.jpg" class="img-fluid me-3 rounded-2" alt="Quả cam" style="width: 80px; height: 80px; object-fit: cover;">
            <div>
                <a href="#" class="text-dark fw-bold text-decoration-none">9 tác dụng tuyệt vời của quả cam</a>
                <p class="text-muted small m-0">Cam tự hào về khả năng chống lão hóa mạnh mẽ nhờ hàm lượng chất chống oxy hóa cao...</p>
            </div>
        </div>
        
        <div class="d-flex mb-3 blog-hot-item">
            <img src="/images/blog-small-3.jpg" class="img-fluid me-3 rounded-2" alt="Dầu dừa" style="width: 80px; height: 80px; object-fit: cover;">
            <div>
                <a href="#" class="text-dark fw-bold text-decoration-none">10 công dụng bất ngờ từ dầu dừa</a>
                <p class="text-muted small m-0">Dầu dừa như một loại kem dưỡng ẩm tự nhiên cho cơ thể, giúp tăng sản xuất collagen trong các tế bào...</p>
            </div>
        </div>

      </div>

      <div class="col-md-9"> 
        <h2 class="text-info mb-4">Tất cả bài viết</h2>
        
        <div class="row g-4 mb-4">
            <div class="col-md-7">
                <div class="card h-100 border-0 shadow-sm">
                    <img src="/images/tap.jpg" class="card-img-top blog-img-main" alt="Pilates" style="height: 250px; object-fit: cover;">
                    <div class="card-body">
                        <h4 class="card-title fw-bold">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống <span class="badge bg-secondary ms-2">16</span></h4>
                        <p class="card-text text-muted">Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt, dẻo dai, các bài tập Pilates còn có khả năng trị đau lưng, là giải pháp phục hồi hiệu quả phục hồi chấn thương cột sống.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-5">
                <div class="card h-100 border-0 shadow-sm">
                    <img src="/images/day.jpg" class="card-img-top blog-img-small" alt="Pilates cho cơ thể" style="height: 250px; object-fit: cover;">
                    <div class="card-body">
                        <h4 class="card-title fw-bold">Đây là những gì 1 giờ Tập Pilates có thể làm cho cơ thể của bạn <span class="badge bg-secondary ms-2">8</span></h4>
                        <p class="card-text text-muted">Được thiết kế để xây dựng cơ bắp săn chắc, khỏe mạnh hơn, bài tập này đã trở thành một cái tên quen thuộc nhờ có rất nhiều người nổi tiếng theo đuổi.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row g-4 mb-5">
            <div class="col-md-5">
                <div class="card h-100 border-0 shadow-sm">
                    <img src="/images/tim.webp" class="card-img-top blog-img-small" alt="Pilates tim mạch" style="height: 250px; object-fit: cover;">
                    <div class="card-body">
                        <h4 class="card-title fw-bold">Tập Pilates có thể cải thiện sức khỏe tim mạch của bạn <span class="badge bg-secondary ms-2">5</span></h4>
                        <p class="card-text text-muted">Tập Pilates không chỉ giúp bạn có một cơ thể khỏe mạnh và linh hoạt mà còn có nhiều lợi ích cho sức khỏe tim mạch. Bài viết này sẽ giúp bạn tìm hiểu sâu về tác dụng tích cực của việc tập Pilates đối với sức khỏe tim mạch.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-7">
                <div class="card h-100 border-0 shadow-sm">
                    <img src="/images/eat.png" class="card-img-top blog-img-main" alt="Thực phẩm sạch" style="height: 250px; object-fit: cover;">
                    <div class="card-body">
                        <h4 class="card-title fw-bold">EAT CLEAN: Nên Và Không Nên Ăn Thực Phẩm Nào? <span class="badge bg-secondary ms-2">3</span></h4>
                        <p class="card-text text-muted">Chúng ta luôn chú trọng lựa chọn thực phẩm sạch và duy trì lối sống lành mạnh. Vậy chế độ ăn Eat Clean nên và không nên ăn gì trong thực đơn hàng ngày để cân bằng thói quen dinh dưỡng cho cơ thể?</p>
                    </div>
                </div>
            </div>
        </div>
        
        <nav aria-label="Page navigation">
            <ul class="pagination justify-content-end">
                <li class="page-item disabled">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&larr;</span>
                    </a>
                </li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&rarr;</span>
                    </a>
                </li>
            </ul>
        </nav>

      </div>
    </div>
  </div>
  
  <footer class="bg-dark text-white text-center py-3"> 
    <div class="container">
      <p class="m-0">&copy;Copyright by FPT Polytechnic</p>
    </div>
  </footer>
</template>
<style scoped>
  /* Định dạng Navigation */
  /* Màu xanh lá cây: #56AB2F */
  /* Màu xanh dương: #00BFFF */
  .nav-link {
    color: #333 !important;
    transition: all 0.3s;
  }
  .nav-link:hover {
    color: #56AB2F !important;
  }
  /* Cập nhật màu cho link active trên navbar (Tiếng Việt) */
  .navbar-nav .nav-link.active {
    color: #56AB2F !important;
    font-weight: 600;
  }
  
  /* Cấu trúc Banner */
  /* Do hình ảnh là ảnh tĩnh, không cần carousel control */
  
  /* Cấu trúc Sidebar */
  
  /* Tiêu đề sidebar (Chuyên mục, Bài viết nổi bật) */
  .text-info {
    color: #00BFFF !important; /* Màu xanh dương trong hình ảnh */
    font-weight: bold;
  }
  
  /* Chuyên mục */
  .list-group-item {
    border-color: #eee;
  }
  .list-group-item a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
  }
  /* Item active trong chuyên mục */
  .active-category {
    background-color: #00BFFF !important;
    border-color: #00BFFF !important;
  }
  .active-category a {
    color: white !important;
    font-weight: bold !important;
  }
  .active-category .badge {
    background-color: #17A2B8 !important; /* Màu xanh đậm hơn cho badge */
  }

  /* Bài viết nổi bật */
  .blog-hot-item a {
    color: #333 !important;
    font-size: 0.95rem;
    line-height: 1.2;
    margin-bottom: 5px;
    display: block;
  }
  .blog-hot-item p {
    font-size: 0.8rem;
  }
  
  /* Nội dung chính (Tất cả bài viết) */
  .card-title {
    font-size: 1.25rem;
    line-height: 1.4;
    color: #333;
  }
  .card-text {
    font-size: 0.9rem;
  }
  .blog-img-main {
    height: 250px;
    object-fit: cover;
  }
  .blog-img-small {
    height: 250px;
    object-fit: cover;
  }
  
  /* Phân trang */
  .pagination .page-link {
    color: #333;
    border-color: #dee2e6;
  }
  .pagination .page-item.active .page-link {
    background-color: #00BFFF;
    border-color: #00BFFF;
    color: white;
  }
  .active-menu-item .nav-link {
    color: #56AB2F !important; 
    border-bottom: 2px solid #56AB2F; 
    padding-bottom: 5px;
  }
</style>