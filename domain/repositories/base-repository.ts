import { BaseEntity } from "../models/base"

export abstract class BaseRepository<T extends BaseEntity> {

  protected readonly _db: firebase.default.firestore.CollectionReference<T>

  constructor(db: firebase.default.firestore.CollectionReference<T>) {
    this._db = db
  }

  public async findAll(): Promise<T[]> {
    const snap = await this._db.get()
    const data: T[] = []
    snap.forEach(item => data.push(item.data()))
    return data
  }

  public async find(id: string): Promise<T | null> {
    const snap = await this._db.doc(id).get()
    if (!snap.exists) {
      return null
    }
    const data = snap.data()
    if (data === undefined) {
      return null
    }
    return data
  }

  public async save(data: T): Promise<T | null> {
    let docRef: firebase.default.firestore.DocumentReference<T>
    if (data.id) {
      docRef = this._db.doc(data.id)
    } else {
      docRef = this._db.doc()
    }
    await docRef.set(data)

    return this.find(docRef.id)
  }

  public async delete(id: string) {
    await this._db.doc(id).delete()
  }

}