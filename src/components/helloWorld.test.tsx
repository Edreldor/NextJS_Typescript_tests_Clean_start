// helloWorld.test.tsx
import { render } from '@testing-library/react';
import HelloWorld from './helloWorld';

test('renders a Hello World message', () => {
  const { container, getByText } = render(<HelloWorld />);
  expect(getByText('Hello World')).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
    <p
      class="text-center"
    >
      Hello World
    </p>
    `);
});
