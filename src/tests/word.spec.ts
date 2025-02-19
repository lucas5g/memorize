import { WordService } from "@/services/word.service"
import { after } from "node:test"
import { afterAll, beforeAll, describe, expect, it } from "vitest"
describe('Word', () => {

  const service = new WordService()
  let id: number
  const properties = ['id', 'name', 'translate', 'createdAt', 'updatedAt'];

  beforeAll(async () => {

    const data = {
      name: 'café',
      translate: 'coffee'
    }

    const res = await service.create(data)

    expect(res).toMatchObject(data)
    id = res.id

  })

  afterAll(async () => {
    await service.delete(id)
  })

  it.only('findAll', async () => {
    const res = await service.findAll()
    expect(Object.keys(res[0])).toEqual(properties)
  })

})