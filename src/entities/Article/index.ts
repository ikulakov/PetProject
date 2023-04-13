export {
    articleDetailsReducer,
    articleDetailsActions
} from './model/slice/articleDetailsSlice/articleDetailsSlice'

export {
    articleListSliceReducer,
    articleListSliceActions
} from './model/slice/articleListSlice/articleListSlice'

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

export {
    ArticleTypeTabs
} from 'entities/Article/ui/ArticleTypeTabs/ArticleTypeTabs'

// selectors
export {
    getArticleDetailsData
} from './model/selectors/getArticleDetailsData/getArticleDetailsData'

export {
    getArticlesPageIsLoading,
    getArticlesPageError,
    getArticlesPageView,
    getArticlesPageNum,
    getArticlesPageLimit,
    getArticlesPageHasMore,
    getArticlesPageInited,
    getArticlesPageSearch,
    getArticlesPageOrder,
    getArticlesPageSort
} from 'entities/Article/model/selectors/articlesPageSelectors'
