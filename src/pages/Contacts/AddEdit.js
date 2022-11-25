import { css } from '@emotion/css';
import { Spinner } from 'components';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useAddContactMutation,
  useContactQuery,
  useUpdateContactMutation,
} from 'services/contactsApi';

const initialContact = {
  name: '',
  email: '',
  contact: '',
};

const AddEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [addContact] = useAddContactMutation();
  const [updateContact] = useUpdateContactMutation();

  const [formData, setFormData] = useState(initialContact);
  const { name, email, contact } = formData;

  const [editMode, setEditMode] = useState(false);
  const { isLoading, error, data } = useContactQuery(id);

  useEffect(() => {
    if (id && error) {
      toast.error('잘못된 요청입니다.', {
        icon: '🚨',
        style: {
          borderRadius: '10px',
          background: '#251b45',
          color: '#efe8ff',
        },
      });
    }
  }, [id, error]);

  useEffect(() => {
    if (id) {
      setEditMode(true);
      if (data) {
        const { name, email, contact } = data;
        setFormData({
          name,
          email,
          contact,
        });
      }
    } else {
      setEditMode(false);
      setFormData({ ...initialContact });
    }
  }, [id, data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !contact) {
      toast.error('이름, 이메일, 전화번호를 모두 입력해야 합니다.', {
        icon: '🚨',
        style: {
          borderRadius: '10px',
          background: '#251b45',
          color: '#efe8ff',
        },
      });
    } else {
      if (editMode) {
        await updateContact({ id, ...formData });
        setEditMode(false);
      } else {
        await addContact(formData);
      }

      navigate('/contacts');

      toast.success(
        editMode
          ? '변경된 연락처를 저장했습니다.'
          : '새로운 연락처를 저장했습니다.',
        {
          icon: '😎',
          style: {
            borderRadius: '10px',
            background: '#cfc1fc',
            color: '#1e113c',
          },
        }
      );
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  if (id && isLoading) {
    return <Spinner>수정할 연락처 정보를 불러오는 중입니다...</Spinner>;
  }

  return (
    <div className={containerStyle}>
      <form onSubmit={handleSubmit}>
        <div className="formControl">
          <label htmlFor="contactName">이름</label>
          <input
            id="contactName"
            name="name"
            type="text"
            placeholder="홍길동"
            value={formData.name}
            onChange={handleInput}
          />
        </div>
        <div className="formControl">
          <label htmlFor="contactEmail">이메일</label>
          <input
            id="contactEmail"
            name="email"
            type="email"
            placeholder="user@company.io"
            value={formData.email}
            onChange={handleInput}
          />
        </div>
        <div className="formControl">
          <label htmlFor="contactPhone">전화번호</label>
          <input
            id="contactPhone"
            name="contact"
            type="text"
            placeholder="010-1111-1111"
            value={formData.contact}
            onChange={handleInput}
          />
        </div>
        <button type="submit">{editMode ? '수정' : '추가'}</button>
      </form>
    </div>
  );
};

export default AddEdit;

/* styles ------------------------------------------------------------------- */

const containerStyle = css`
  margin-top: 40px;

  form {
    width: 480px;
    border-top: 1px dashed #584896;
    padding-top: 20px;
    border-bottom: 1px dashed #584896;
    padding-bottom: 20px;
    text-align: right;
  }

  .formControl {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
    color: #2e2163;

    label {
      width: 12%;
      color: inherit;
    }

    input {
      flex: 1;
      border-radius: 4px;
      border: 1px solid currentColor;
      padding: 0.6em;
      font-size: 1rem;
      color: inherit;
    }
  }

  button {
    cursor: pointer;
    text-decoration: none;
    font-size: 14px;
    border-radius: 4px;
    margin: 4px 0 0;
    border: 1px solid currentColor;
    padding: 0.3em 0.9em;
    background: transparent;
    font-size: 1rem;
    color: #2e2163;

    &:hover {
      background: #f0e7ff;
    }
  }
`;
