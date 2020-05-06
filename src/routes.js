import showBookDetails from './components/showBookDetails.vue';
import listBook from './components/listBook.vue';
import singleBook from './components/singleBook.vue';
import loginForm from './components/HelloWorld.vue'
export default [
    {path: '/', component: showBookDetails},
    {path: '/listBookTitle', component: listBook},
    {path: '/book/:id', component: singleBook},
    {path: '/loginForm', component: loginForm}
]
