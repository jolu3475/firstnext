import { comment } from './data'

export const GET = () => {
  return new Response.json(comment)
}
