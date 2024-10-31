<script setup>
import { ref, onMounted } from 'vue'

const testimonials = [
  { 
    id: 1, 
    text: "Размещение токена на Odyssey Exchange значительно улучшило наши торговые объемы.", 
    author: "Иван Бокав, CEO BokaTech",
    avatar: "/images/avatars/avatar1.png"
  },
  { 
    id: 2, 
    text: "Решения Odyssey Exchange по лаунчпадам и листингам полностью изменило наш крипто-бизнес.", 
    author: "Елена Смирнова, Основатель P2PCoin",
    avatar: "/images/avatars/avatar2.png"
  },
  { 
    id: 3, 
    text: "Их поддержка в вопросах регуляторного соответствия неоценима в сложном криптовалютном пространстве.", 
    author: "Иван Воланд, Юридический Советник Copytrading Inc.",
    avatar: "/images/avatars/avatar3.png"
  }
]

const currentTestimonial = ref(0)

const nextTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.length
}

const prevTestimonial = () => {
  currentTestimonial.value = (currentTestimonial.value - 1 + testimonials.length) % testimonials.length
}

onMounted(() => {
  setInterval(nextTestimonial, 5000) // Автоматическое переключение каждые 5 секунд
})
</script>

<template>
  <div class="testimonial-slider">
    <div class="testimonial">
      <div class="avatar">
        <img :src="testimonials[currentTestimonial].avatar" :alt="testimonials[currentTestimonial].author">
      </div>
      <p class="quote">"{{ testimonials[currentTestimonial].text }}"</p>
      <p class="author">- {{ testimonials[currentTestimonial].author }}</p>
    </div>
    <div class="controls">
      <button @click="prevTestimonial">←</button>
      <button @click="nextTestimonial">→</button>
    </div>
  </div>
</template>

<style scoped>
.testimonial-slider {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
}

.testimonial {
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--vp-c-brand);
  margin-bottom: 1rem;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.quote {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--vp-c-text-1);
  max-width: 800px;
  margin: 0 auto;
}

.author {
  font-style: italic;
  color: var(--vp-c-text-2);
  margin-top: 1rem;
}

.controls {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

button {
  background-color: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

button:hover {
  background-color: var(--vp-c-brand-dark);
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .quote {
    font-size: 1rem;
  }
  
  .avatar {
    width: 60px;
    height: 60px;
  }
}
</style>