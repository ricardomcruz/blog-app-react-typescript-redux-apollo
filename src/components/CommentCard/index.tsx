import classNamesBind from 'classnames/bind';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { RawComment } from '../../_modules/comments/models/Comment';
import styles from './styles.module.scss';

const cx = classNamesBind.bind(styles);

interface CommentCardProps {
  comment: RawComment
}

const CommentCard = (
  {
    comment: {
      date,
      content,
      user
    }
  }: CommentCardProps
) => {

  return (
      <Card className={cx("comment-card", "my-3")}>
      <Card.Header className={cx("comment-card-header")}>
        <b>{user}</b>
        <div>
          <p>{date}</p>
        </div>
      </Card.Header>
        <Card.Body >
          <Card.Text>
            {content}
          </Card.Text>
        </Card.Body>
      </Card >
  );
}

export default CommentCard;
