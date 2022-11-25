import { css } from '@emotion/css';
import { useState } from 'react';
import { subscription } from 'store';
import { unsubscription } from 'store';
import { loadState, removeState, saveState } from 'utils';

export const SAVE_STORAGE_SETTING = 'storage/save-key';

function Setting() {
  const [isEnabled, setIsEnabled] = useState(
    () => loadState(SAVE_STORAGE_SETTING) ?? false
  );

  const enable = () => {
    setIsEnabled(true);
    saveState(true, SAVE_STORAGE_SETTING);
    subscription();
  };

  const disable = () => {
    setIsEnabled(false);
    saveState(false, SAVE_STORAGE_SETTING);
    removeState();
    unsubscription();
  };

  return (
    <div className={containerStyle}>
      <h1>Setting</h1>
      <dl className={listStyle}>
        <dt>로컬 스토리지 상태 관리</dt>
        <dd className={buttonGroup}>
          <button
            disabled={isEnabled}
            onClick={enable}
            aria-label="로컬 스토리지 저장 활성"
          >
            ON
          </button>
          <button
            disabled={!isEnabled}
            onClick={disable}
            aria-label="로컬 스토리지 삭제 및 저장 비활성"
          >
            OFF
          </button>
        </dd>
      </dl>
    </div>
  );
}

export default Setting;

/* styles ------------------------------------------------------------------- */

const containerStyle = css`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  h1 {
    color: #9188b6;
  }
`;

const listStyle = css`
  display: flex;
  align-items: center;

  dt {
    color: #9188b6;
  }
`;

const buttonGroup = css`
  display: flex;
  gap: 4px;

  button {
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid currentColor;
    padding: 0.5em 1em;
    background: transparent;
    color: #9188b6;

    &:hover {
      background: #e5e2f4;
    }

    &:focus-visible {
      outline: 1px solid #9188b6;
    }

    &:disabled {
      cursor: not-allowed;
      background: transparent !important;
      color: #c4bfdb;
    }
  }
`;
