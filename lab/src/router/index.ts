import { createRouter, createWebHistory } from 'vue-router';
//Lab2
import Bai1Lab2 from '../lab2/bai1lab2.vue'; 
import Bai2Lab2 from '../lab2/bai2lab2.vue'; 
import Bai3Lab2 from '../lab2/bai3lab2.vue';
import Bai4Lab2 from '../lab2/bai4lab2.vue';

//Lab3
import Bai1Lab3 from '../lab3/bai1lab3.vue'; 
import Bai2Lab3 from '../lab3/bai2lab3.vue'; 
import Bai3Lab3 from '../lab3/bai3lab3.vue'; 
import Bai4Lab3 from '../lab3/bai4lab3.vue';

//Lab4
import Bai1Lab4 from '../lab4/bai1lab4.vue';

const routes = [
  { 
    path: '/bai1lab2', 
    name: 'Bai1Lab2', 
    component: Bai1Lab2 
  },
  { 
    path: '/bai2lab2', 
    name: 'Bai2Lab2', 
    component: Bai2Lab2 
  },
  { 
    path: '/bai3lab2', 
    name: 'Bai3Lab2', 
    component: Bai3Lab2 
  },
  { 
    path: '/bai4lab2', 
    name: 'Bai4Lab2', 
    component: Bai4Lab2 
  },
    { 
    path: '/bai1lab3', 
    name: 'Bai1Lab3', 
    component: Bai1Lab3 
  },
      { 
    path: '/bai2lab3', 
    name: 'Bai2Lab3', 
    component: Bai2Lab3 
  },
        { 
    path: '/bai3lab3', 
    name: 'Bai3Lab3', 
    component: Bai3Lab3 
  },
          { 
    path: '/bai4lab3', 
    name: 'Bai4Lab3', 
    component: Bai4Lab3 
  },
            { 
    path: '/bai1lab4', 
    name: 'Bai1Lab4', 
    component: Bai1Lab4 
  },
  // Đường dẫn mặc định khi truy cập root URL (/)
  { 
    path: '/', 
    redirect: '/bai1' 
  }
];

const router = createRouter({
  // Sử dụng History mode
  history: createWebHistory(),
  routes,
});

export default router;