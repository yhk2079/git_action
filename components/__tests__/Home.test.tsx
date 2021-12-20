import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../utils/theme';
import MockProvider from '../../utils/MockProvider';
import Home from '../Home';

test('should render Home', async () => {
  const { getByText, asFragment } = render(
    <MockProvider>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </MockProvider>,
  );
  expect(getByText('potato')).toBeInTheDocument();

  expect(asFragment()).toMatchSnapshot();
});
