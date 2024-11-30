import { comment } from './data'

export const GET = async () => {
  return Response.json(comment)
}

export const POST = async (request) => {
  const com = await request.json()
  const newComment = {
    id: comment.length + 1,
    content: com.text,
  }
  comment.push(newComment)
  return new Response(JSON.stringify(newComment), {
    headers: {
      'content-type': 'application/json',
    },
    status: 201,
  })
}
