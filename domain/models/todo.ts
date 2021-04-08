import { BaseEntity } from "./base";

export class Todo extends BaseEntity {
  constructor(readonly task: string) {
    super()
  }
}