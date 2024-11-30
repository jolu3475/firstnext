import { comment } from './data'

export const GET = async (_request, { params }) => {
  const com = comment.find((comme) => comme.id === parseInt(params.id))
  return Response.json(com)
}
