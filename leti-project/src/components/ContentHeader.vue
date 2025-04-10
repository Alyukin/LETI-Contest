<script>
export default {
  methods: {
    scrollToBlock(id) {
      const block = document.getElementById(id)
      if (block) {
        block.scrollIntoView({ behavior: 'smooth' }) // Плавный скролл
      }
    },
  },
}
</script>

<template>
  <div id="content-link" class="content-block">
    <div class="content-header rectangle-1 appear-animation">
      <h1 class="content-header-text-h1">Оглавление</h1>
      <div class="content-text-sections">
        <h2 class="content-header-text-h2">
          <span class="large-bullet">•</span> &nbsp;<button class="nav-button" @click="scrollToBlock('first-era')">Основание университета</button>
        </h2>
        <h2 class="content-header-text-h2">
          <span class="large-bullet">•</span> &nbsp;<button class="nav-button" @click="scrollToBlock('second-era')">
            Становление советского образования
          </button>
        </h2>
        <h2 class="content-header-text-h2">
          <span class="large-bullet">•</span> &nbsp;<button class="nav-button" @click="scrollToBlock('third-era')">
            Развитие в советский период
          </button>
        </h2>
        <h2 class="content-header-text-h2">
          <span class="large-bullet">•</span> &nbsp;<button class="nav-button" @click="scrollToBlock('fourth-era')">Современный период</button>
        </h2>
        <h2 class="content-header-text-h2" style="color: #a54410">
          <span class="large-bullet">•</span> &nbsp;<router-link to="/travel">Путешествие по факультетам</router-link>
        </h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-button {
  cursor: pointer;
  transition: color 0.3s;
}
.nav-button:hover {
  color: rgb(116, 40, 40);
}
.content-block {
  border-top: 3px solid #cbd190d5;
  width: 100%;
  background-image: url('bg1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.content-header {
  margin-bottom: 100px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
}
.content-text-sections {
  margin-top: 45px;
  margin-left: 100px;
}
.content-header-text-h1 {
  color: rgb(39, 38, 38);
  font-family: Yeseva One;
  font-size: 45px;
  font-weight: 400;
  line-height: 100%;
}
.content-header-text-h2 {
  color: rgb(39, 38, 38);
  font-family: Yeseva One;
  font-size: 35px;
  font-weight: 400;
  line-height: 100%;
  margin-bottom: 45px;
}
.rectangle-1 {
  box-sizing: border-box;
  background: #fdffbc;
  border-radius: 40px;
  opacity: 0.9;
  height: 624px;
  width: 1388px;
  position: relative;
  padding-left: 100px;
  padding-top: 66px;
}
.large-bullet {
  font-size: 52px;
  vertical-align: middle;
  position: relative;
  bottom: 2px;
  color: rgb(39, 38, 38);
}
</style>
