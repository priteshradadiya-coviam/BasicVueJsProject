<template>
  <div class="hello">
    <section class="container">
    <div class="login">
      <h1>Login to This Module</h1>
      <form method="post">
        <p><input type="text" name="login" value="" placeholder="Username or Email"></p>
        <p><input type="password" name="password" value="" placeholder="Password"></p>
        <p class="remember_me">
          <label>
            <input type="checkbox" name="remember_me" id="remember_me">
            Remember me on this computer
          </label>
        </p>
        <p class="submit"><input type="submit" name="commit" value="Login"></p>
      </form>
    </div>
  </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@mixin box-sizing($val) {
  -webkit-box-sizing: $val;
}

@mixin box-shadow($shadows...) {
  -webkit-box-shadow: $shadows;
}

@mixin linear-gradient($gradientLine, $colorStops...) {
  background-image: -webkit-linear-gradient($gradientLine, $colorStops);
  @if length($gradientLine) == 2 {
  background-image:         linear-gradient(to #{inverse-side(nth($gradientLine, 1))} #{inverse-side(nth($gradientLine, 2))}, $colorStops);
  } @else {
  background-image:         linear-gradient(to #{inverse-side($gradientLine)}, $colorStops);
  }
}

body {
  font: 13px/20px 'Lucida Grande', Tahoma, Verdana, sans-serif;
  color: #404040;
  background: #305f8b;
}
.container {
  margin: 80px auto;
  width: 640px;
}
.login {
  position: relative;
  margin: 0 auto;
  padding: 20px 20px 20px;
  width: 310px;
  background: white;
  border-radius: 3px;
  // box-shadow: 0 0 200px rgba(white, .5);
  @include box-shadow(0 0 200px rgba(white, .5), 0 1px 2px rgba(black, .3));
  h1 {
    margin: -20px -20px 21px;
    line-height: 40px;
    font-size: 15px;
    font-weight: bold;
    color: #555;
    text-align: center;
    text-shadow: 0 1px white;
    background: #f3f3f3;
    border-bottom: 1px solid #cfcfcf;
    border-radius: 3px 3px 0 0;
    @include linear-gradient(top, whiteffd, #eef2f5);
    @include box-shadow(0 1px #f5f5f5);
  }
  p { margin: 20px 0 0; }
  p:first-child { margin-top: 0px; }
  input[type=text], input[type=password] { width: 278px; }
  p.remember_me {
    float: left;
    line-height: 31px;
    label {
      font-size: 12px;
      color: #777;
      cursor: pointer;
    }
    input {
      position: relative;
      bottom: 1px;
      margin-right: 4px;
      vertical-align: middle;
    }
  }
  p.submit { text-align: right; }
}
::-webkit-input-placeholder {
  color: black;
  font-size: 13px;
}
input {
  font-family: 'Lucida Grande', Tahoma, Verdana, sans-serif;
  font-size: 14px;
}
input[type=text], input[type=password] {
  margin: 5px;
  padding: 0 10px;
  width: 200px;
  height: 34px;
  color: #404040;
  background: white;
  border: 1px solid;
  border-color: #c4c4c4 #d1d1d1 #d4d4d4;
  border-radius: 2px;
  outline: 5px solid #eff4f7;
  @include box-shadow(inset 0 1px 3px rgba(black, .12));
  &:focus {
    border-color: #7dc9e2;
    outline-color: white;
    outline-offset: 0; 
  }
}
input[type=submit] {
  padding: 0 18px;
  height: 29px;
  font-size: 12px;
  font-weight: bold;
  color: #527881;
  text-shadow: 0 1px #e3f1f1;
  background: #cde5ef;
  border: 1px solid;
  border-color: #b4ccce #b3c0c8 #9eb9c2;
  border-radius: 16px;
  outline: 0;
  // box-sizing:content-box; 
  // background-image: -webkit-linear-gradient(top, #edf5f8, #cde5ef);
  // box-shadow: inset 0 1px white, 0 1px 2px rgba(black, .15);
  @include box-sizing(content-box);  
  @include linear-gradient(top, #edf5f8, #cde5ef);
  @include box-shadow(inset 0 1px white, 0 1px 2px rgba(black, .15));
  &:active {
    background: #cde5ef;
    border-color: #9eb9c2 #b3c0c8 #b4ccce;
    @include box-shadow(inset 0 0 3px rgba(black, .2));
  }
}

</style>
