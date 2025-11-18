<template>
  <div class="container my-4">
    <div class="card shadow-sm border-0">
      <div class="card-body p-4">
        <h2 class="text-center text-danger mb-4">Bảng Thành Phần Dinh Dưỡng</h2>

        <div class="table-responsive">
          <table class="table table-bordered align-middle">
            <thead>
              <tr class="table-warning text-center">
                <th rowspan="2" class="p-3">Thành Phần</th>
                <th colspan="2" class="p-3">Giá Trị</th>
              </tr>
              <tr class="table-warning text-center">
                <th class="p-2">Khối Lượng</th>
                <th class="p-2">% DV*</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-bold">Calories</td>
                <td class="text-end">200 kcal</td>
                <td class="text-end">20%</td>
              </tr>
              <tr>
                <td>Chất Béo</td>
                <td class="text-end">9 g</td>
                <td class="text-end">14%</td>
              </tr>
              <tr>
                <td class="ps-4">Chất Béo Bão Hòa</td>
                <td class="text-end">4 g</td>
                <td class="text-end">20%</td>
              </tr>
              <tr>
                <td>Chất Đạm</td>
                <td class="text-end">8 g</td>
                <td class="text-end">16%</td>
              </tr>
              <tr>
                <td>Chất Xơ</td>
                <td class="text-end">5 g</td>
                <td class="text-end">20%</td>
              </tr>
              <tr>
                <td>Đường</td>
                <td class="text-end">12 g</td>
                <td class="text-center">-</td>
              </tr>
              <tr>
                <td rowspan="2" class="fw-bold">Vitamin</td>
                <td>Vitamin C</td>
                <td class="text-end">25%</td>
              </tr>
              <tr>
                <td>Vitamin D</td>
                <td class="text-end">10%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bai1',
};
</script>

<style scoped>
.table th, .table td {
  border-color: #dee2e6 !important; 
}

.table-warning {
  --bs-table-bg: #ffc107;
  --bs-table-border-color: #e0a800;
}
</style>
