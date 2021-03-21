import {createRouter, createWebHistory} from "vue-router";
import resultDefinition from '@/views/resultDefinition'
import GreetingContainer from "@/layouts/GreetingContainer"
const routes = [
 {path: '/', name:'home',  component:GreetingContainer},
 {path: '/searchword', name:'searchword',   component:()=>import(/* webpackChunkName: "search" */ '@/layouts/SearchBar'),
  children:[
      {path: '/:word', name:'resultdefinition', query:{plan:''}, component:resultDefinition},
      {path: '/examples', name:'syn',  component:()=>import(/* webpackChunkName: "resultdefi" */ '@/views/resultSynonyms')},
      {path: '/antonyms', name:'antonyms', query:{antonymfor:''}, component:()=>import(/* webpackChunkName: "resultantonyms" */ '@/views/resultAntonyms')},
    ]
},
 {path: '/register', name:'register',  component:()=>import(/* webpackChunkName: "registeruser" */ '@/global/RegisterModal')},
 {path: '/writeblog', name:'writeblog',  component:()=>import(/* webpackChunkName: "writeblog" */ '@/views/writeBlog')},
 {path: '/blogNews', name:'blognews',  component:()=>import(/* webpackChunkName: "blogNews" */ '@/views/blogNews')},
 {path: '/blogNews/:id', name:'innerblog',  component:()=>import(/* webpackChunkName: "blogin" */ '@/views/innerBlog')},
 {path: '/favorites', name:'favo',  component:()=>import(/* webpackChunkName: "bln" */ '@/views/fav')}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router