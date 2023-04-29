import { screen } from '@testing-library/react'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { EditableProfileCard } from './EditableProfileCard'
import { type Profile } from '@/entities/Profile'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import { profileReducer } from '../../model/slice/profileSlice'
import userEvent from '@testing-library/user-event'
import { $api } from '@/shared/api/api'

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 465,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin123'
}

const options = {
    initialState: {
        profile: {
            data: profile,
            form: profile,
            readonly: true,
            isLoading: false
        },
        user: {
            authData: {
                id: '1',
                username: 'admin'
            }
        }
    },
    asyncReducers: {
        profile: profileReducer
    }
}

describe('features/EditableProfileCard', () => {
    // beforeEach(() => {
    //     componentRender(<EditableProfileCard id={'1'} />, options)
    // })

    test('Режим рид онли должен переключаться', async () => {
        componentRender(<EditableProfileCard id={'1'} />, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument()
    })

    test('При отмене значения должны обнуляться', async () => {
        componentRender(<EditableProfileCard id={'1'} />, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user')

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user')

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'))

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin')
    })

    test('Должна появиться ошибка', async () => {
        componentRender(<EditableProfileCard id={'1'} />, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()
    })

    test('Если нет ошибок, должен уйти put запрос на сервер', async () => {
        const mockPutReq = jest.spyOn($api, 'put')
        componentRender(<EditableProfileCard id={'1'} />, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

        expect(mockPutReq).toHaveBeenCalled()
    })
})
