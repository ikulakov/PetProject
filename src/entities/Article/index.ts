export {
    articleDetailsReducer,
    articleDetailsActions
} from './model/slice/articleDetailsSlice/articleDetailsSlice'

export {
    articleListSliceReducer,
    articleListSliceActions
} from './model/slice/articleListSlice/articleListSlice'

export type {
    Article,
    ArticleView,
    ArticleDetailsSchema,
    ArticleListSchema,
} from './model/types/article'

export {
    ArticleType,
    ArticleSortField,
} from './model/types/article'

// services
export {
    initArticlesPage
} from './model/services/initArticlesPage/initArticlesPage'
export {
    fetchNextArticlePage
} from './model/services/fetchNextArticlePage/fetchNextArticlePage'

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
} from './ui/ArticleTypeTabs/ArticleTypeTabs'

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
} from './model/selectors/articlesPageSelectors'
