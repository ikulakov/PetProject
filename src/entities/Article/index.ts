export {
    articleDetailsReducer,
    articleDetailsActions
} from './model/slice/articleDetailsSlice/articleDetailsSlice'

export {
    articleListSliceReducer,
    articleListSliceActions,
    getArticles
} from './model/slice/articleListSlice/articleListSlice'

export {
    articleDetailsPageRecommendationReducer
} from './model/slice/articleDetailsPageRecommendationSlice/articleDetailsPageRecommendation'

export type {
    Article,
    ArticleView,
    ArticleDetailsSchema,
    ArticleListSchema,
} from './model/types/article'

export type {
    ArticleDetailsPageRecommendationSchema
} from './model/types/articleDetailsPageRecommendationSchema'

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
export {
    fetchArticlesList
} from './model/services/fetchArticlesList/fetchArticlesList'

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

export {
    ArticlesSortSelector
} from './ui/ArticlesSortSelector/ArticlesSortSelector'

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
    getArticlesPageSort,
    getArticlesPageType
} from './model/selectors/articlesPageSelectors'
