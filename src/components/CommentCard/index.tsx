import classNamesBind from 'classnames/bind';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { RawComment } from '../../_modules/comments/models/Comment';
import styles from './styles.module.scss';

const cx = classNamesBind.bind(styles);

interface CommentCardProps {
  comment: RawComment
  darkMode: boolean
}

const CommentCard = (
  {
    comment: {
      date,
      content,
      user
    },
    darkMode
  }: CommentCardProps
) => {

  return (
    <Card className={cx("comment-card", "my-3", { "bg-dark": darkMode })}>
      <Card.Header className={cx("comment-card-header", { 
        "text-light": darkMode, 
        "bg-secondary": darkMode
        }
        )}>
        <small><b>{user}</b></small>
        <div>
          <small>{date}</small>
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
