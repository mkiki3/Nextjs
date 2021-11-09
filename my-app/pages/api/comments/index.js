//http://localhost:3000/api/comments
import comments from '../../../data/comments.json'

export default (req, res) => {
  res.status(200).json(comments)
}