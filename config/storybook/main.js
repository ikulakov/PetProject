module.exports = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', {
        name: '@storybook/addon-essentials',
        options: {
            backgrounds: false
        }
    }, '@storybook/addon-interactions', 'storybook-addon-mock', 'storybook-addon-themes'],
    framework: '@storybook/react-webpack5',
    // core: {
    //     builder: '@storybook/builder-webpack5'
    // },
    docs: {
        autodocs: false
    }
};