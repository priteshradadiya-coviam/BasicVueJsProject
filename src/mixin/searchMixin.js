export default {
    computed : {
        searchBooks : function(){
            return this.books.filter((book) => {
                return book.title.match(this.searchvalue)
            });
        }
    }
}