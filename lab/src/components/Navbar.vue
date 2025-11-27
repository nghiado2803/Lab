<template>
  <div class="sidebar bg-light shadow p-3 d-flex flex-column">
    
    <div class="mb-4">
        <h4 class="text-dark fw-bold border-bottom pb-2">LAB</h4>
    </div>

    <div class="sidebar-section mb-4">
      <h6 class="text-secondary fw-bolder mb-2">LAB 2</h6>
      <ul class="nav flex-column">
        <li class="nav-item">
          <RouterLink class="nav-link text-dark" to="/bai1lab2">Bài 1</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-dark" to="/bai2lab2">Bài 2</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-dark" to="/bai3lab2">Bài 3</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-dark" to="/bai4lab2">Bài 4</RouterLink>
        </li>
      </ul>
    </div>

    <div class="sidebar-section">
      <h6 class="text-secondary fw-bolder mb-2">LAB 3</h6>
      <ul class="nav flex-column">
        <li class="nav-item">
          <RouterLink class="nav-link text-dark" to="/bai1lab3">Bài 1</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-dark" to="/bai2lab3">Bài 2</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-dark" to="/bai3lab3">Bài 3</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link text-dark" to="/bai4lab3">Bài 4</RouterLink>
        </li>
      </ul>
    </div>
    
        <div class="sidebar-section">
      <h6 class="text-secondary fw-bolder mb-2">LAB 4</h6>
      <ul class="nav flex-column">
        <li class="nav-item">
          <RouterLink class="nav-link text-dark" to="/bai1lab4">Bài 1</RouterLink>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 150px; 
  height: 100vh;
  z-index: 1030;
}

.nav-link.router-link-exact-active {
  background-color: var(--bs-light); 
  border-left: 3px solid var(--bs-primary); 
  color: var(--bs-primary) !important; 
  font-weight: 600;
}
</style>