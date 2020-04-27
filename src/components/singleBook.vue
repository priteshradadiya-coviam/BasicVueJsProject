<template>
    <div id="single-book">
        <h1>{{book.title}}</h1>
        <article>{{book.body}}</article>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            book:{}
        }
    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts/'+this.id)
        .then(function(value){
            console.log(value);
            this.book=value.body;

        })

    }
}
</script>

<style scoped>
#single-book{
    max-width:960px;
    margin:0 auto;
}

</style>