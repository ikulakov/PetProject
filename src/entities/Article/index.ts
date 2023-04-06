export {
    articleDetailsReducer,
    articleDetailsActions
} from './model/slice/articleDetailsSlice/articleDetailsSlice'

export type {
    ArticleDetailsSchema,
    ArticleView,
    ArticleListSchema
} from './model/types/article'

// components
export {
    ArticleDetails
} from './ui/ArticleDetails/ArticleDetails'

export {
    ArticlesList
} from './ui/ArticlesList/ArticlesList'

export {
    ArticleViewSelector
} from './ui/ArticleViewSelector/ArticleViewSelector'

// selectors
export {
    getArticleDetailsData
} from './model/selectors/getArticleDetailsData/getArticleDetailsData'
