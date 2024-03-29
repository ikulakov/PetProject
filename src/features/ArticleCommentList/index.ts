export type { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema'

export {
    articleDetailCommentsReducer,
    articleDetailCommentsActions,
} from './model/slice/articleDetailCommentsSlice'

// selectors
export { getArticleComments } from './model/slice/articleDetailCommentsSlice'

export {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from './model/selectors/comments'

export { fetchCommentsByArticleId } from './model/service/fetchCommentsByArticleId'

export { addCommentForArticle } from './model/service/addCommentForArticle'
