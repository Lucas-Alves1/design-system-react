import { SignIn } from './SignIn';
import { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw'
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';


export default {
    title: 'Pages/Sign In',
    component: SignIn,
    args: {},
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                rest.post('/sessios', (req, res, ctx) => {
                    return res(ctx.json({
                        message: 'Login Realizado!'
                    }))
                })
            ],
        },
    }
} as Meta;

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('exemplo@email.com'), 'lucas.lago.cont@gmail.com')
        userEvent.type(canvas.getByPlaceholderText('*********'), '12345')

        userEvent.click(canvas.getByRole('button'))

        await waitFor(() => {
            return expect(canvas.getByText('Login Realizado!')).toBeInTheDocument()
        })

        
    }
}