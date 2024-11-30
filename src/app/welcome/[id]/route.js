import { comment } from './data'

export const GET = async (_request, { params }) => {
  const com = comment.find((comme) => comme.id === parseInt(params.id))
  return Response.json(com)
}

export const PATCH = async (request, { params }) => {
  const body = await request.json()
  const { text } = body
  const index = comment.findIndex((com) => com.id === parseInt(params.id))
  comment[index].text = text
  return Response.json(comment[index])
}
