/** * @jest-environment jsdom */

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { postMock } from '../../mocks/mocks';
import ArticleCard from './index';

describe('ArticleCard', () => {

  it('should render the Article Card', () => {
    const { asFragment }= render(
      <ArticleCard
        darkMode={false}
        post={postMock}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
