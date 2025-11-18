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

  <div class="container my-4">
    <div class="row g-4">
      <div class="col-lg-8 article-content">
        <h1 class="article-title mb-4">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống</h1>
        
        <img src="/images/anh1.jpg" class="img-fluid rounded mb-4" alt="Phương pháp tập Pilates" style="width: 100%; height: auto;">
        
        <p class="article-paragraph">Pilates cơ thể săn chắc khoẻ và là với người Việt, nhưng tất cả các nước phương Tây thì đây chính là phương pháp tập thể dục giúp duy trì vóc dáng, tăng cường ý chí và cải thiện sự linh hoạt, dẻo dai cho người tập. Với tất cả các bài tập Pilates còn có khả năng trị đau lưng, là giải pháp hữu hiệu để phục hồi chấn thương cột sống. Bài viết này sẽ giúp bạn các phương pháp tập luyện này giúp phục hồi chấn thương cột sống nhanh chóng nhé!</p>
        
        <h2 class="article-subtitle mt-5 mb-3">Pilates giúp phục hồi chấn thương cột sống nhanh chóng</h2>
        <p class="article-paragraph">Mỗi buổi sáng thức dậy bạn ngày càng phờ phạc, đôi khi là đau vai, lưng, đó là đau lưng thoát vị đĩa đệm. Tuy nhiên, nếu điều trị lâu dài, bạn cần trị dứt điểm. Bạn có thể sử dụng các bài tập như yoga, võ thuật, điều trị bằng laser không đúng cách hoặc tập yoga không đúng cách có thể khiến bệnh nhân nằm liệt giường.</p>
        
        <img src="/images/anh2.jpg" class="img-fluid rounded my-4" alt="Tập Pilates phục hồi nhanh" style="width: 100%; height: auto;">

        <h2 class="article-subtitle mt-5 mb-3">Phương pháp tập Pilates cốt lõi và có tay của bạn</h2>
        <p class="article-paragraph">Các bước thực hiện:</p>
        <ul class="article-list">
            <li>Bắt đầu với tư thế 4 điểm. Vai và cổ tay của bạn phải thẳng hàng và vuông góc với thảm, lưng của bạn phải bằng phẳng và xương chậu của bạn phải cân đối.</li>
            <li>Hít vào, co cơ bụng và kéo rốn về phía cột sống.</li>
            <li>Thở ra, cong xương cụt, nâng cẳng lưng và đưa cằm về gần khoang ngực.</li>
            <li>Lặp đi lặp lại động tác từ 5-7 lần.</li>
        </ul>

        <h2 class="article-subtitle mt-5 mb-3">Lời kết</h2>
        <p class="article-paragraph">Với các phương pháp tập Pilates giúp phục hồi chấn thương cột sống nhanh chóng, thì đạt được kết quả tập luyện như mong muốn, bạn cần duy trì chế độ tập luyện đều đặn, thực hiện đúng động tác, kết hợp cùng chế độ ăn uống khoa học.</p>
      </div>

      <div class="col-lg-4 article-content">
        <div class="card shadow-sm p-3 mb-4">
          <h5 class="fw-bold mb-3">Bình luận vài viết tại đây</h5>
          <div class="mb-3">
            <textarea class="form-control" rows="3" placeholder="Nhập bình luận của bạn"></textarea>
          </div>
          <button class="btn btn-info w-100">Gửi bình luận</button>
        </div>

        <div class="card shadow-sm p-3">
          <h5 class="fw-bold mb-3">Danh sách các bình luận:</h5>
          <ul class="list-unstyled comment-list">
            <li class="comment-item pb-2 mb-2 border-bottom">
              <span class="fw-bold comment-author">Bình An:</span> Bài viết rất hữu ích
            </li>
            <li class="comment-item pb-2 mb-2 border-bottom">
              <span class="fw-bold comment-author">Bình An:</span> Cảm ơn những chia sẻ bổ ích
            </li>
          </ul>
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
  .navbar-nav .nav-link.active {
    color: #56AB2F !important;
    font-weight: 600;
  }

  .active-menu-item .nav-link {
    color: #56AB2F !important; 
    border-bottom: 2px solid #56AB2F;
    padding-bottom: 5px; 
  }



  .article-title {
    color: #00BFFF;
    font-size: 2.2rem;
    font-weight: bold;
    line-height: 1.3;
  }

  .article-subtitle {
    color: #00BFFF;
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 1.4;
  }

  .article-paragraph {
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
    margin-bottom: 1rem;
  }

  .article-list {
    list-style-type: disc; 
    margin-left: 20px;
    padding-left: 0;
    color: #333;
  }

  .article-list li {
    margin-bottom: 8px;
    line-height: 1.5;
  }
  
 
  .btn-info {
    background-color: #00BFFF; 
    border-color: #00BFFF;
    color: white;
    font-weight: bold;
  }
  .btn-info:hover {
    background-color: #0099CC; 
    border-color: #0099CC;
  }

  .comment-list .comment-item {
    font-size: 0.95rem;
    line-height: 1.4;
    color: #333;
  }
  .comment-list .comment-author {
    color: #56AB2F; 
  }

  footer {
    background-color: #343a40 !important;
  }
  .article-content * {
  text-align: left !important;
}

</style>
