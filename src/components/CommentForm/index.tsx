import classNamesBind from 'classnames/bind';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { RawComment } from '../../_modules/comments/models/Comment';
import styles from './styles.module.scss';

const cx = classNamesBind.bind(styles);
interface CommentFormProps {
  postId: number,
  onCommentSubmit: (data: RawComment) => void
}

const CommentForm = (
  {
    postId,
    onCommentSubmit
  }: CommentFormProps
) => {


  const date = new Date().toISOString().slice(0, 10);;

  const emptyComment = {
    postId,
    user: '',
    date,
    content: ''
  }

  const [value, setValue] = useState<RawComment>(emptyComment as RawComment);
  const [validated, setValidated] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (event: any, field: string) => {
    setValue({ ...value, [field]: event.target.value});
    setValidated(false);
    setSent(false);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;

    
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      setSent(true);
      onCommentSubmit(value)
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group
        className="mb-3"
        controlId="validationCustom01"
        onChange={(e) => handleChange(e, 'user')}
      >
        <Form.Label>Name</Form.Label>
        <Form.Control required type="text" />
        <Form.Control.Feedback type="invalid">
          Please provide your name
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group
        onChange={(e) => handleChange(e, 'content')}
        className="mb-3"
        controlId="validationCustom02"
      >
        <Form.Label>Comment</Form.Label>
        <Form.Control required as="textarea" rows={3} />
        <Form.Control.Feedback type="invalid">
          Please provide your comment
        </Form.Control.Feedback>
      </Form.Group>
      <div className={cx('button-container')}>
        <Button type="submit">{
          sent ?
            'Sent'
            :
            'Submit form'
        }
        </Button>
      </div>
      
    </Form>
  );
}

export default CommentForm;
