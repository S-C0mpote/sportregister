<template>
  <div class="waviy">
    <span style="--i:1">A</span>
    <span style="--i:2">n</span>
    <span style="--i:3">n</span>
    <span style="--i:4">u</span>
    <span style="--i:5">l</span>
    <span style="--i:6">e</span>
    <span style="--i:7">r</span>
    <span style="--i:8">&nbsp;</span>
    <span style="--i:9">l</span>
    <span style="--i:10">a</span>
    <span style="--i:11">&nbsp;</span>
    <span style="--i:12">r</span>
    <span style="--i:13">e</span>
    <span style="--i:14">c</span>
    <span style="--i:15">h</span>
    <span style="--i:16">e</span>
    <span style="--i:17">r</span>
    <span style="--i:18">c</span>
    <span style="--i:19">h</span>
    <span style="--i:20">e</span>
    <span style="--i:21">.</span>
  </div>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style scoped>
.waviy {
  position: relative;
}
.waviy span {
  position: relative;
  display: inline-block;
  font-size: 15px;
  color: #fff;
  text-transform: uppercase;
  animation: flip 5s infinite;
  animation-delay: calc(.2s * var(--i))
}
@keyframes flip {
  0%,80% {
    transform: rotateY(360deg)
  }
}
</style>