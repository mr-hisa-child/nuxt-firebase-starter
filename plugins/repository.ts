import type { Plugin } from '@nuxt/types'
import { TodoRepository } from '@/domain/repositories/todo-repository'

export interface Repositories {
  todoRepository: TodoRepository
}

declare module 'vue/types/vue' {
  interface Vue {
    readonly $repositories: Repositories
  }
}

declare module 'vuex' {
  interface Store<S> {
    readonly $repositories: Repositories
  }
}

declare module '@nuxt/types' {
  interface Context {
    readonly $repositories: Repositories
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    readonly $repositories: Repositories
  }
}

const repositoriesFactory: Plugin = ({ $fire }, inject) => {
  const todoRepository = new TodoRepository($fire)
  const repositories: Repositories = {
    todoRepository
  }
  inject('repositories', repositories)
}
export default repositoriesFactory
