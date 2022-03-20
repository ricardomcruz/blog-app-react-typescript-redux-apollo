/** * @jest-environment jsdom */

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { commentMock } from '../../mocks/mocks';
import CommentCard from './index';

describe('CommentCard', () => {

  it('should render the Article Card', () => {
    const { asFragment }= render(
      <CommentCard
        comment={commentMock}
        darkMode
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
