/* eslint-disable fsd-architecture/layer-imports */
import { StoryFn } from '@storybook/react';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`App ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
)
