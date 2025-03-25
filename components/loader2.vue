<template>
  <div class="">
    <div class="spinner"></div>
  </div>
</template>


<style>
.spinner {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 6px solid;
  border-color: #b8b8bc;
  border-right-color: #f8fafc;
  animation: spinner-d3wgkg 1s infinite linear;
}

@keyframes spinner-d3wgkg {
  to {
    transform: rotate(1turn);
  }
}

  .loader_wrap2 {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    height: 100vh;
    width: 100%;
    background: rgba(62, 77, 99, 0.80);
    backdrop-filter: blur(4px);
  }
</style>
