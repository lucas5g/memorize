import index from './index.html'
import { PhraseService } from './services/phrase.service'

const phraseService = new PhraseService()

Bun.serve({
  port: 3000,
  routes: {
    '/': index,
    '/phrases': {
      async GET() {
        return Response.json(await phraseService.findAll())
      },
      async POST(req) {
        const body = await req.json()
        return Response.json(await phraseService.create(body))
      }
    },
    '/list': async req => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      return Response.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' }
      ])
    }
  }
})

console.log('Server Run! http://localhost:3000')