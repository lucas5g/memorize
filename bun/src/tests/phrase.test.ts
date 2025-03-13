import { expect, it, describe} from 'bun:test'
import { PhraseService } from '../services/phrase.service'

describe('Phrase', () => {
  const service = new PhraseService()

  it.only('create', async() => {

    const body = {
      english: 'test',
      tag: 'test'
    }

    const res = await service.create(body)

    console.log(res)
  })
})