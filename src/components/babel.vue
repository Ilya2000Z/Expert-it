<template>
  <div>
    <div class="arrow-down">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="RequestLable">Выполните запрос</div>
  </div>
</template>
<script>
export default {
  name: "BabelLable",
};
</script>
<style scoped>
.RequestLable {
  display: block;
  margin: 15px auto;
  width: 30%;
  padding: 20px;
  background-color: antiquewhite;
}
.arrow-down {
  padding-top: 10px;
  margin-top: 30px;
}
.arrow-down span {
  display: block;
  width: 30px;
  height: 30px;
  border-bottom: 5px solid #337ab7;
  border-right: 5px solid #337ab7;
  transform: rotate(180deg);
  margin: 0px auto;
  animation: arrow-down 2s infinite;
}
.arrow-down span:nth-child(2) {
  animation-delay: -0.2s;
}
.arrow-down span:nth-child(3) {
  animation-delay: -0.4s;
}
@keyframes arrow-down {
  100% {
    opacity: 0;
    transform: rotate(224deg) translate(20px, 20px);
  }

  50% {
    opacity: 1;
  }
  0% {
    opacity: 0;
    transform: rotate(224deg) translate(-20px, -20px);
  }
}
</style>
