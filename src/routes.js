import showBookDetails from './components/showBookDetails.vue';
import listBook from './components/listBook.vue';
import singleBook from './components/singleBook.vue';

export default [
    {path: '/', component: showBookDetails},
    {path: '/listBookTitle', component: listBook},
    {path: '/book/:id', component: singleBook}
]