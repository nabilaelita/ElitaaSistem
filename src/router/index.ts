import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BlogView from '@/views/BlogView.vue';
import AboutUsView from '@/views/AboutUsView.vue';
import ContactUsView from '@/views/ContactUs.View.vue';
import PrivacyView from '@/views/PrivacyView.vue';
import AuthorView from '@/views/AuthorView.vue';
import CategoryView from '../views/CategoryView.vue'
import BlogPostView from '@/views/BlogPostView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/blog', component: BlogView },
  { path: '/about', component: AboutUsView },
  { path: '/contact', component: ContactUsView },
  { path: '/privacy', component: PrivacyView },
  { path: '/author', component: AuthorView },
  { path: '/category', component: CategoryView },
  {path: '/blog/post', component: BlogPostView},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;