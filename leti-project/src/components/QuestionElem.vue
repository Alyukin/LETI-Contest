<template>
  <div class="app">
    <div class="quiz">
      <h2>Вопрос: {{ question }}</h2>
      <div class="answer-buttons">
        <button
          v-for="(answer, index) in answers"
          :key="index"
          class="btn"
          @click="selectedIndex = index"
          :class="{
            correct: selectedIndex !== null && index === correctAnswer,
            incorrect: selectedIndex === index && index !== correctAnswer,
            selected: selectedIndex === index,
          }"
        >
          {{ answer }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['question', 'answers', 'correctAnswer'],
  data: () => ({ selectedIndex: null }),
}
</script>

<style scoped>
body {
  background: #001e4d;
}
.app {
  background: #fff;
  border-radius: 30px;
}
.app h1 {
  font-size: 25px;
  color: #001e4d;
  font-weight: 600;
  border-bottom: 1px solid #333;
  padding-bottom: 30px;
}
.quiz {
  padding: 25px 35px;
}
.quiz h2 {
  font-size: 20px;
  color: #001e4d;
  font-weight: 700;
  margin-bottom: 8px;
  font-family: 'Inter';
}
.btn {
  background: #fff;
  color: #222;
  font-weight: 500;
  width: 100%;
  border: 1px solid #222;
  padding: 10px;
  margin: 10px 0;
  text-align: left;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;
}
.btn:hover:not(.correct):not(.incorrect) {
  background: #d6e6f5;
  color: #1f3374;
  opacity: 0.8;
}
.btn.correct {
  background-color: #319b35;
  color: white;
  border-color: #319b35;
  opacity: 0.9;
}
.btn.incorrect {
  background-color: #f86358;
  color: white;
  border-color: #f86358;
  opacity: 0.9;
}
</style>
