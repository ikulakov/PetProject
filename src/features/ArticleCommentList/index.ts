export type {
    ArticleDetailsCommentsSchema
} from './model/types/ArticleDetailsCommentsSchema'

export {
    articleDetailCommentsReducer,
    articleDetailCommentsActions
} from 'features/ArticleCommentList/model/slice/articleDetailCommentsSlice'

// selectors
export {
    getArticleComments
} from './model/slice/articleDetailCommentsSlice'

export {
    getArticleCommentsError,
    getArticleCommentsIsLoading
} from './selectors/comments'

export {
    fetchCommentsByArticleId
} from './model/service/fetchCommentsByArticleId'
