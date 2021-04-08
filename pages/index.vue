<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.task }} {{ todo.id }}
      </li>
    </ul>

    <input type="text" v-model="task" />
    <button type="button" @click="save">追加</button>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  reactive,
  toRefs,
} from '@nuxtjs/composition-api'
import { Todo } from '~/domain/models/todo'

export default defineComponent({
  components: {},
  setup() {
    const root = getCurrentInstance()!.proxy
    const state = reactive<{ todos: Todo[]; task: string }>({
      todos: [],
      task: '',
    })

    const load = async () => {
      state.todos = await root.$repositories.todoRepository.findAll()
    }

    const save = async () => {
      const todo = await root.$repositories.todoRepository.save(
        new Todo(state.task)
      )
      if (todo !== null) {
        state.todos.push(todo)
      }
    }

    load()
    return {
      ...toRefs(state),
      save,
    }
  },
})
</script>