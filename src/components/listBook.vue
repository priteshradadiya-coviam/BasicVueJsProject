<template>
    <div class="show-bookdetails">
        <h1> List Book Titles </h1>
        <input type="text" placeholder="Search anything you want" v-model="searchvalue" width="100px">
        <div v-for="book in searchBooks" v-bind:key="book.id" class="show-bookdetails__single-book">
            <h2 v-rainbow>{{book.title | to-uppercase}}</h2>
        </div>
    </div>
</template>

<script>
import searchMixin from '../mixin/searchMixin';
export default {
    data(){
        return {
            books:[],
            searchvalue:''
        };
    },
    methods :{

    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(data){
            console.log(data);
            this.books=data.body.slice(0,20)
        })
    },
    computed :{
    },
    filters :{
        toUppercase(value){
            return value.toUpperCase();
        },
        snippet(value){
            return value.slice(0,70);
        }
    },
    directives :{
        'rainbow':{
            bind (el){
                el.style.color = "#" + Math.random().toString().slice(2,8);
            }
        }
    },
    mixins :[searchMixin]

}
</script>

<style scoped lang="scss">
.show-bookdetails{
    max-width: 800px;
    margin: 0 auto;
    background: #504c4c;
    padding: 20px;
&__single-book{
    padding: 20px;
    margin: 20px 0px;
    box-sizing: content-box;
    background: cadetblue;
}
}
</style>