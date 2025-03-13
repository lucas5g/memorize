import index from './index.html'
Bun.serve({
  port: 3000,
  routes:{
    '/': index,
    '/list': async req => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      return Response.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' }
      ])
    }
  }
})

console.log('Server Run http://localhost:3000')