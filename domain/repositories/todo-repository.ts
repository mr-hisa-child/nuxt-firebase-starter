import { BaseRepository } from "./base-repository";
import { Todo } from "~/domain/models/todo"
import { NuxtFireInstance } from "@nuxtjs/firebase";

export class TodoRepository extends BaseRepository<Todo> {
  constructor(fire: NuxtFireInstance) {
    const converter = {
      toFirestore(todo: Todo): firebase.default.firestore.DocumentData {
        return { task: todo.task };
      },
      fromFirestore(
        snapshot: firebase.default.firestore.QueryDocumentSnapshot,
        options: firebase.default.firestore.SnapshotOptions
      ): Todo {
        const data = snapshot.data(options)!;
        return new Todo(data.task);
      }
    };
    super(fire.firestore.collection("todos").withConverter(converter))
  }
}