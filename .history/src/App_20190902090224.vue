<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%
}

body {
  height: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

label {
  font-weight: 700;
}

html {
  height: 100%;
  box-sizing: border-box;
}

#app {
  height: 100%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.no-padding {
  padding: 0px !important;
}

.padding-content {
  padding: 4px 0;
}

a:focus,
a:active {
  outline: none;
}

a,
a:focus,
a:hover {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}

div:focus {
  outline: none;
}

.fr {
  float: right;
}

.fl {
  float: left;
}

.pr-5 {
  padding-right: 5px;
}

.pl-5 {
  padding-left: 5px;
}

.block {
  display: block;
}

.pointer {
  cursor: pointer;
}

.inlineBlock {
  display: block;
}

</style>