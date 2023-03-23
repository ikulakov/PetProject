export {
    articleReducer,
    articleActions
} from './model/slice/articleDetailsSlice'

export type {
    ArticleDetailsSchema
} from './model/types/article'

export {
    ArticleDetails
} from './ui/ArticleDetails/ArticleDetails'

export {
    getArticleDetailsData
} from './model/selectors/getArticleDetailsData/getArticleDetailsData'
