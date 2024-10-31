<script setup>
import { ref } from 'vue'
import { useData } from 'vitepress'

const { theme } = useData()
const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const menuItems = [
  { text: 'Главная', link: '/' },
  { text: 'О Нас', link: '/about' },
  { text: 'Сервисы', link: '/services' },
  { text: 'Партнерство', link: '/partnership' },
  { text: 'Решения', link: '/solutions' },
  { text: 'Контакты', link: '/contact' }
]

const isDark = ref(false)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  if (typeof window !== 'undefined') {
    document.documentElement.classList.toggle('dark', isDark.value)
  }
}
</script>

<template>
  <div class="nav-menu">
    <button class="menu-toggle" @click="toggleMenu" aria-label="Меню">
      <span class="menu-icon"></span>
    </button>
    <nav :class="{ 'is-open': isOpen }">
      <a v-for="item in menuItems" :key="item.text" :href="item.link" @click="isOpen = false">{{ item.text }}</a>
      <button class="toggle-dark-mode" @click="toggleDarkMode">
        {{ isDark ? '☀️' : '🌙' }}
      </button>
    </nav>
  </div>
</template>

<style scoped>
.nav-menu {
  position: relative;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-icon {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--vp-c-text-1);
  position: relative;
}

.menu-icon::before,
.menu-icon::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: var(--vp-c-text-1);
  left: 0;
}

.menu-icon::before {
  top: -6px;
}

.menu-icon::after {
  bottom: -6px;
}

.nav-menu nav {
  display: flex;
  gap: 1rem;
}

.nav-menu a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.nav-menu a:hover {
  color: var(--vp-c-brand);
}

.toggle-dark-mode {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-menu nav {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    background: var(--vp-c-bg);
    padding: 1rem;
    border: 1px solid var(--vp-c-divider);
    border-radius: 4px;
    flex-direction: column;
    min-width: 200px;
  }

  .nav-menu nav.is-open {
    display: flex;
  }
}
</style>