/* eslint-disable no-restricted-globals */
import { useEffect } from 'react';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import {
  useContactsQuery,
  useDeleteContactMutation,
} from 'services/contactsApi';
import { Spinner } from 'components';
import toast from 'react-hot-toast';

const AddEdit = () => {
  const { isLoading, data, error } = useContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  useEffect(() => {
    if (error) {
      toast.error(
        error.status === 404
          ? '잘못된 요청입니다.'
          : '알 수 없는 오류가 발생했습니다.',
        {
          icon: '🚨',
          style: {
            borderRadius: '10px',
            background: '#251b45',
            color: '#efe8ff',
          },
        }
      );
    }
  }, [error]);

  if (isLoading) {
    return <Spinner>연락처 로딩 중...</Spinner>;
  }

  const handleDelete = async (id) => {
    if (confirm('연락처를 지우시겠습니까?')) {
      await deleteContact(id);
      toast.success('연락처를 삭제했습니다.', {
        icon: '😃',
        style: {
          borderRadius: '10px',
          background: '#efe8ff',
          color: '#251b45',
        },
      });
    }
  };

  return (
    <div className={containerStyle}>
      <table>
        <caption>연락처</caption>
        <thead>
          <tr>
            <th scope="col" lang="en">
              No.
            </th>
            <th scope="col">이름</th>
            <th scope="col">이메일</th>
            <th scope="col">전화번호</th>
            <th scope="col">액션</th>
          </tr>
        </thead>
        <tbody>
          {data?.map?.(({ id, name, email, contact }, index) => (
            <tr key={id}>
              <td>{index + 1}</td>
              <td>{name}</td>
              <td>
                <a href={`mailto:${email}`}>{email}</a>
              </td>
              <td>
                <a href={`tel:${contact}`}>{contact}</a>
              </td>
              <td>
                <Link className={buttonStyle} to={`info/${id}`}>
                  인포
                </Link>
                <Link className={buttonStyle} to={`edit/${id}`}>
                  편집
                </Link>
                <button
                  className={buttonStyle}
                  type="button"
                  onClick={() => handleDelete(id)}
                >
                  제거
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddEdit;

/* styles ------------------------------------------------------------------- */

const containerStyle = css`
  margin-top: 40px;
  color: #443a53;

  table {
    border-collapse: collapse;
  }

  caption {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    clip-path: circle(0);
  }

  tr {
    border-bottom: 1px solid currentColor;
  }

  th,
  td {
    padding: 0.9em;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: currentColor;
    &:hover {
      color: #715790;
    }
  }
`;

const buttonStyle = css`
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  border-radius: 4px;
  margin: 0 4px;
  border: 1px solid currentColor;
  padding: 0.3em 0.9em;
  background: transparent;

  &:hover {
    background: #f0e7ff;
  }
`;
