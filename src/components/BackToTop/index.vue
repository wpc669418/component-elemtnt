<template>
  <div class="pages-content-scroll">
    <el-backtop target=".pages-content-scroll " :bottom="100" />
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.pages-content-scroll {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: hidden;
}
</style>