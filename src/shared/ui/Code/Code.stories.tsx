import { StoryFn, StoryObj } from '@storybook/react'
import { Code } from './Code'

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as StoryObj<typeof Code>

const Template: StoryFn<typeof Code> = (args) => <Code { ...args } />

export const Normal = Template.bind({})
Normal.args = {
    code: '<!DOCTYPE html>' +
   '<html>' +
   '  <body>' +
   '    <p id="hello"></p>' +
   '' +
   '    <script>' +
   '      document.getElementById("hello").innerHTML = "Hello, world!";' +
   '    </script>' +
   '  </body>' +
   '</html>;'
}
