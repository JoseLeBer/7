<template>
  <div class="header">
    <div class="row row-header">
      <div class="col">
        <img src="../assets/icon-left-font.png" alt="" class="header--img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="scss">
.header {
  margin-bottom: 20px;
}
.row-header {
  height: 80px;
}
.header--img {
  width: auto;
  max-height: 25%;
}
</style>
