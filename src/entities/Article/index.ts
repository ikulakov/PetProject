export {
    articleReducer,
    articleActions
} from './model/slice/articleDetailsSlice'

export type {
    ArticleDetailsSchema,
    ArticleView
} from './model/types/article'

// components
export {
    ArticleDetails
} from './ui/ArticleDetails/ArticleDetails'

export {
    ArticlesList
} from './ui/ArticlesList/ArticlesList'

// selectors
export {
    getArticleDetailsData
} from './model/selectors/getArticleDetailsData/getArticleDetailsData'
