<template>
  <div class="mymenu">
    <h1>导航</h1>
    {{ $slidev.nav.currentPage }}
    <button @click="te">点我</button>
    <h2
      v-for="title in titles"
    >
      {{title.visited}}
      <Link :to="title.page" :title="title.name"
        class="border-none"
        @click="visit(title)"
      ></Link>
    </h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titles: [
        { name: "个人简介", visited: false, page: 1},
        { name: "工作内容", visited: false, page: 1},
        { name: "展示重点", visited: false, page: 5},
        { name: "总结反思", visited: false, page: 1},
      ],
    }
  },
  methods: {
    visit(title) {
      title.visited = true
    },
    te() {
      debugger
    },
  },
}
</script>

<style>
.mymenu {
  .border-none {
    border: none;
  }
}
</style>
