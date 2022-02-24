import { createWebHistory, createRouter } from "vue-router";
import List from './components/list.vue';
import Home from './components/home.vue';
import Detail from './components/detail.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: List,
  },  
  {
    path: "/detail/:id",
    component: Detail,
    children:[
      {
      path: "author",
      component: Author,
    },
    {
      path: "comment",
      component: Comment,
    }
    
    ]
    }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 