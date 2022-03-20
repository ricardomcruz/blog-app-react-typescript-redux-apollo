/** * @jest-environment jsdom */

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CommentForm from './index';

describe('CommentForm', () => {

  const handleCommentSubmit = jest.fn();

  it('should render the Comment Form', () => {
    const { asFragment }= render(
      <CommentForm
        postId={1}
        onCommentSubmit={handleCommentSubmit}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
