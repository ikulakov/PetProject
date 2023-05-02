import { Rating } from '@/entities/Rating'
import { rtkApi } from '@/shared/api/rtkApi'

interface GetProfileArg {
    userId: string
    profileId: string
}

interface RateProfileArg {
    userId: string
    profileId: string
    rate: number
    feedback?: string
}

const profileRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileRating: build.query<Rating[], GetProfileArg>({
            query: ({ userId, profileId }) => ({
                url: '/profile-ratings',
                params: {
                    userId,
                    profileId
                }
            })
        }),
        rateProfile: build.mutation<void, RateProfileArg>({
            query: (args) => ({
                url: '/profile-ratings',
                method: 'POST',
                body: args
            })
        })
    })
})

export const useGetProfileRating = profileRatingApi.useGetProfileRatingQuery
export const useRateProfile = profileRatingApi.useRateProfileMutation
