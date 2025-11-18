<template>
  <div class="container my-5">
    <h2 class="text-center mb-5 community-health-title">Kiến thức sức khỏe cộng đồng</h2>
    <div class="row g-4">
      
      <div class="col-md-4">
        <div class="card h-100 shadow-sm border-0">
          <img src="/images/rau.jpg" class="card-img-top community-health-img" alt="Rau củ giàu canxi">
          <div class="card-body">
            <h5 class="card-title fw-bold">8 loại rau củ quả giàu canxi</h5>
            <p class="card-text text-muted small">Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất. Có 8 loại rau củ quả giàu canxi...</p>
            <a href="#" class="btn btn-info mt-3">Xem chi tiết</a>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card h-100 shadow-sm border-0">
          <img src="/images/giavi.jpg" class="card-img-top community-health-img" alt="Gia vị tốt cho sức khỏe">
          <div class="card-body">
            <h5 class="card-title fw-bold">Các loại gia vị tốt cho sức khỏe</h5>
            <p class="card-text text-muted small">Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác. Với một lượng nhỏ các món ăn đã thêm thơm và vị hấp dẫn...</p>
            <a href="#" class="btn btn-info mt-3">Xem chi tiết</a>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card h-100 shadow-sm border-0">
          <img src="/images/dau.jpg" class="card-img-top community-health-img" alt="Các loại đậu">
          <div class="card-body">
            <h5 class="card-title fw-bold">9 loại đậu bổ dưỡng nên dùng nhiều</h5>
            <p class="card-text text-muted small">Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin và khoáng chất giúp giảm lượng đường trong máu, tốt cho tim...</p>
            <a href="#" class="btn btn-info mt-3">Xem chi tiết</a>
          </div>
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

  .community-health-title {
    color: #333; /* Màu chữ đen */
    font-size: 2.5rem; /* Kích thước chữ lớn */
    font-weight: bold;
  }

  .community-health-img {
    height: 200px; /* Chiều cao cố định cho ảnh */
    object-fit: cover; /* Đảm bảo ảnh được cắt mà không bị méo */
    border-top-left-radius: 0.25rem; /* Bo tròn góc trên trái của ảnh */
    border-top-right-radius: 0.25rem; /* Bo tròn góc trên phải của ảnh */
  }

  /* Tiêu đề trong card */
  .card-body .card-title {
    font-size: 1.25rem; /* Kích thước tiêu đề */
    color: #333;
    margin-bottom: 0.75rem;
  }

  /* Mô tả ngắn trong card */
  .card-body .card-text {
    font-size: 0.9rem;
    line-height: 1.5;
    height: 70px; /* Chiều cao cố định cho mô tả */
    overflow: hidden; /* Ẩn phần văn bản thừa */
  }

  
  .card-body .btn-info {
    background-color: #00BFFF; 
    border-color: #00BFFF;
    color: white;
    font-weight: bold;
    padding: 0.5rem 1.5rem; 
    border-radius: 0.3rem; 
  }
  .card-body .btn-info:hover {
    background-color: #0099CC; 
    border-color: #0099CC;
  }
</style>