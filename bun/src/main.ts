import index from './index.html'
import { PhraseService } from './services/phrase.service'

const phraseService = new PhraseService()

Bun.serve({
  port: 3000,
  routes: {
    '/': index,
    '/phrases': {
      async GET(req) {
        const url = new URL(req.url)
        const query = Object.fromEntries(url.searchParams)
        return Response.json(await phraseService.findAll(query))
      },
      async POST(req) {
        const body = await req.json()
        return Response.json(await phraseService.create(body), { status: 201 })
      }
    },

    '/phrases/:id/audio': {
      async GET(req) {
        const id = Number(req.params.id)
        const phrase = await phraseService.findOne(id)
        return new Response(phrase?.audio, {
          headers: {
            'Content-Type': 'audio/mpeg'
          }
        })
      }
    },

    '/audios/:id.mp3': async (req) => {

      const id = req.params['id.mp3'].split('.')[0]
      const phrase = await phraseService.findOne(Number(id))    
      return new Response(phrase?.audio, {
        headers: {
          'Content-Type': 'audio/mpeg'
        }
      })
    }
  }
})

console.log('Server Run! http://localhost:3000')