<template>
    <nav>
        <ul>
            <li><router-link to="/" exact>Books</router-link></li>
            <li><router-link to="/listBookTitle" exact>Book Titles</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: red;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #444;
    padding: 20px;
    margin-left: 210px;
    margin-bottom: 40px;
    width: 800px;
    align-content: center;
}
.router-link-active{
    background: #eee;
    color: #444;
}

</style>