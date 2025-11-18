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
    <div class="container my-4">
    <div class="row">

      <div class="col-md-3"> 
        
        <h2 class="text-info mb-3">Về tôi</h2>
        <div class="card p-3"> 
          <img src="/images/avatar.png" class="img-fluid rounded-circle mx-auto d-block" alt="Avatar" style="max-width: 150px;"> 
          <div class="card-body p-0 pt-3 text-center"> 
            <h5 class="card-title fw-bold">Giới thiệu bản thân</h5> 
            <p class="card-text">TS. Trần Hoàng, Tổ chức Tư vấn sức khỏe quốc tế độc lập <br>
              Châm ngôn: Ta không được chọn nơi mình sinh ra, nhưng ta được chọn cách mình sẽ sống
            </p>
          </div>
        </div>
        <div class="mb-5"></div> 
        
        <h3 class="text-info mt-2">Chuyên mục</h3>
        <ul class="list-group list-group-flush"> 
          <li class="list-group-item active bg-info d-flex justify-content-between align-items-center">
            <a class="nav-link text-white" href="#">Chế độ tập</a>
            <span class="badge bg-primary rounded-pill">12</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <a class="nav-link" href="#">Chế độ dinh dưỡng</a>
            <span class="badge bg-primary rounded-pill">15</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <a class="nav-link" href="#">Cẩm nang cuộc sống</a>
            <span class="badge bg-primary rounded-pill">99</span>
          </li>
        </ul>
      </div>
      <div class="col-md-9"> 
        <h2 class="text-info mb-3">Blog của tôi</h2>
        
        <div class="card p-3">
            <div class="row"> 
                <div class="col-md-7"> 
                  <h5 class="fw-bold">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống
                    <span class="badge bg-secondary">
                        <i class="fa-solid fa-comment-dots"></i> 16
                    </span>
                  </h5>
                  <img src="/images/blog1.jpg" alt="Pilates" class="img-fluid mb-2">
                  <p >Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt, dẻo dai cho người tập, Pilates giúp cơ bắp và các khớp khóc mọc dài hơn, kéo giãn hơn...</p>
                </div>

                <div class="col-md-5 d-flex flex-column justify-content-between"> 
                  
                  <div class="row align-items-center mb-3"> 
                    <div class="col-4">
                      <img src="/images/blog-small-1.jpg" alt="Cây non" class="img-fluid rounded">
                    </div>
                    <div class="col-8">
                      <h6 class="m-0 small-text fw-normal"> Biết ơn đời, đời sẽ thương ta
                        <span class="badge bg-secondary">
                            <i class="fa-solid fa-comment-dots"></i> 30
                        </span>
                      </h6>
                    </div>
                  </div>

                  <div class="row align-items-center mb-3">
                    <div class="col-4">
                      <img src="/images/blog-small-2.jpg" alt="Cam" class="img-fluid rounded">
                    </div>
                    <div class="col-8">
                      <h6 class="m-0 small-text fw-normal">
                        9 tác dụng tuyệt vời của quả cam
                        <span class="badge bg-secondary">
                            <i class="fa-solid fa-comment-dots"></i> 28
                        </span>
                      </h6>
                    </div>
                  </div>

                  <div class="row align-items-center mb-3">
                    <div class="col-4">
                      <img src="/images/blog-small-3.jpg" alt="Dầu dừa" class="img-fluid rounded">
                    </div>
                    <div class="col-8">
                      <h6 class="m-0 small-text fw-normal">
                        10 công dụng bất ngờ từ dầu dừa
                        <span class="badge bg-secondary">
                            <i class="fa-solid fa-comment-dots"></i> 15
                        </span>
                      </h6>
                    </div>
                  </div>

                  <div class="row align-items-center mb-0"> 
                    <div class="col-4">
                      <img src="/images/blog-small-4.jpg" alt="Rau mùi" class="img-fluid rounded">
                    </div>
                    <div class="col-8">
                      <h6 class="m-0 small-text fw-normal">
                        Lợi ích khi ăn rau mùi mỗi ngày
                        <span class="badge bg-secondary">
                            <i class="fa-solid fa-comment-dots"></i> 12
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>
            </div>
            
            <div class="d-flex justify-content-center mt-3">
                <button class="btn btn-info">Xem thêm</button>
            </div>
        </div> 
      </div>
      </div>
  </div>
 <div class="container my-5">
    <div class="row g-4">

        <!-- SIDEBAR TRÁI -->
        <div class="col-lg-4 col-12">

            <div class="mb-4 sidebar-tabs">
                <a href="#" class="text-decoration-none me-3">Đọc nhiều</a>
                <a href="#" class="text-decoration-none">Xem nhiều</a>
            </div>

            <div class="d-flex align-items-center mb-3 sidebar-item">
                <img src="/images/blog-small-1.jpg" class="me-3" alt="Biết ơn đời">
                <div>
                    <a href="#" class="text-decoration-none">Biết ơn đời, đời sẽ thương ta</a>
                </div>
            </div>

            <div class="d-flex align-items-center mb-3 sidebar-item">
                <img src="/images/blog-small-3.jpg" class="me-3" alt="Dầu dừa">
                <div>
                    <a href="#" class="text-decoration-none">10 công dụng bất ngờ từ dầu dừa</a>
                </div>
            </div>

            <div class="d-flex align-items-center mb-3 sidebar-item">
                <img src="/images/blog-small-4.jpg" class="me-3" alt="Ăn rau">
                <div>
                    <a href="#" class="text-decoration-none">Lợi ích khi ăn rau mỗi ngày</a>
                </div>
            </div>

        </div>

        <!-- VIDEO PHẢI -->
        <div class="col-lg-8 col-12">

            <h2 class="video-title mb-4">VIDEO - ĐỪNG BỎ LỠ</h2>

            <div class="row g-3">

                <!-- Card 1 -->
                <div class="col-md-6">
                    <div class="card video-card h-100 shadow-sm">
                        <img src="/images/dixahondetruongthanh.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title text-dark">Đi xa hơn để trưởng thành hơn</h5>
                            <p class="card-text text-muted small">
                                Tuổi trẻ chỉ nên nghĩ đến những chuyến đi, đôi mong một ngày được bay nhảy...
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="col-md-6">
                    <div class="card video-card h-100 shadow-sm">
                        <img src="/images/chuttamtunhungngaycuoinam.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title text-dark">Chút tâm tư NHỮNG NGÀY CUỐI NĂM</h5>
                            <p class="card-text text-muted small">
                                Guồng quay cuộc sống dẫu có vội vàng, dẫu có tấp nập đến đâu...
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="col-md-6">
                    <div class="card video-card h-100 shadow-sm">
                        <img src="/images/uocgitrovetuoitho.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title text-dark">ƯỚC GÌ ĐƯỢC TRỞ VỀ TUỔI THƠ</h5>
                            <p class="card-text text-muted small">
                                Tuổi trẻ chỉ nên nghĩ đến những chuyến đi, đôi mong một ngày...
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 4 -->
                <div class="col-md-6">
                    <div class="card video-card h-100 shadow-sm">
                        <img src="/images/Banguoithayvidai.jpg" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title text-dark">Ba người thầy vĩ đại</h5>
                            <p class="card-text text-muted small">
                                Ta xem vạn vật là thầy. Tinh thần học hỏi của ta luôn rộng mở hơn...
                            </p>
                        </div>
                    </div>
                </div>


            </div>

            <div class="text-center mt-4">
                <button class="btn-see-more">Xem thêm</button>
            </div>

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

  .card-img-top {
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s;
  }
  .card:hover .card-img-top {
    transform: scale(1.05);
  }

  .card-title {
    font-size: 1.1rem;
    line-height: 1.4;
  }



  .sidebar-tabs a {
    font-size: 17px;
    font-weight: 600;
    color: #00bfff !important;
  }


  .sidebar-item img {
    width: 60px;
    height: 60px;
    border-radius: 6px;
    object-fit: cover;
  }

  .sidebar-item a {
    font-size: 15px;
    font-weight: 600;
    line-height: 1.3;
    color: #000 !important;
  }


  .video-title {
    font-size: 32px;
    font-weight: 700;
    color: #00bfff;
    margin-bottom: 25px;
  }


  .video-card {
    border: 1px solid #eaeaea !important;
    border-radius: 10px;
  }

  .video-card img {
    height: 180px;
    object-fit: cover;
  }

  .video-card .card-title {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3;
  }


  .btn-see-more {
    background-color: #00c7ff;
    border: none;
    color: #fff;
    padding: 8px 40px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
  }

</style>
