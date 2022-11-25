import { css } from '@emotion/css';
import { Spinner } from 'components';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { useContactQuery } from 'services/contactsApi';

const Info = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, error, data } = useContactQuery(id);

  useEffect(() => {
    if (error) {
      toast.error('잘못된 요청입니다.', {
        icon: '🚨',
        style: {
          borderRadius: '10px',
          background: '#251b45',
          color: '#efe8ff',
        },
      });
    }
  }, [error]);

  if (isLoading) {
    return <Spinner>연락처 정보 로딩 중...</Spinner>;
  }

  const { name, email, contact } = data;

  return (
    <div className={containerStyle}>
      <table>
        <caption>연락처 상세 정보</caption>
        <thead>
          <tr>
            <th scope="col">이름</th>
            <th scope="col">이메일</th>
            <th scope="col">전화번호</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>
              <a href={`mailto:${email}`}>{email}</a>
            </td>
            <td>
              <a href={`tel:${contact}`}>{contact}</a>
            </td>
          </tr>
        </tbody>
      </table>

      <button
        className={goBackStyle}
        type="button"
        onClick={() => navigate(-1)}
      >
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 13v7l-8-8 8-8v7h8v2z" />
        </svg>
        뒤로 가기
      </button>
    </div>
  );
};

export default Info;

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

const goBackStyle = css`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 100%;
  padding: 20px;
  background: transparent;
  border: none;
  color: #3e3759;

  svg {
    translate: 0 -1px;
    fill: currentColor;
  }
`;
