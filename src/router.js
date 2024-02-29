import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/Home.vue';
import AboutPage from './pages/About.vue';
import CulturePage from './pages/Culture.vue';
import EventsPage from './pages/Events.vue';
import VisitPage from './pages/Visit.vue';
import ArticleDetail from '@/components/ArticleDetail';

// Define route components
const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/culture', component: CulturePage },
  { path: '/events', component: EventsPage },
  { path: '/visit', component: VisitPage },
  { path: '/attractions/:id', name: 'ArticleDetail', component: ArticleDetail }
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;