import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { GardenForm } from '../../styles/garden/GardenComponentStyle';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useSelector, useDispatch } from 'react-redux';
import { updateGarden } from '../../features/garden/gardenActions';
import { gardenCreateConfirm } from '../../features/garden/gardenSlice';

const GardenUpdateModal = ({ modalOpen, closeModal, gardenPlant }) => {
  console.log(gardenPlant);
  const {
    id,
    plant,
    img_url,
    date_grow,
    watering_schedule,
    recent_water,
    memo,
    preference,
    present,
  } = gardenPlant;
  console.log(memo);

  const dispatch = useDispatch();
  const initialState = {
    date_grow,
    watering_schedule,
    recent_water,
    memo,
    preference,
  };
  const [imgFile, setImgFile] = useState(null); // img 전송용
  const [imgSrc, setImgSrc] = useState(null); // img 표시용
  const [isDragging, setIsDragging] = useState(false);
  const [presentCheck, setPresentCheck] = useState(null);
  const [gardenInputs, setGardenInputs] = useState({});
  const { success } = useSelector((state) => state.garden);

  useEffect(() => {
    if (success) {
      dispatch(gardenCreateConfirm());
      closeModal();
    }
  }, [success, dispatch, gardenCreateConfirm]);
  useEffect(() => {
    setGardenInputs(initialState);
    setImgSrc(img_url);
    setPresentCheck(present);
  }, [gardenPlant]);

  const dragRef = useRef(null);

  const onImageChange = (e) => {
    e.preventDefault();
    const imgTarget = e.target.files[0];
    setImgFile(imgTarget);
    if (imgTarget) {
      const reader = new FileReader();
      reader.readAsDataURL(imgTarget);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
    } else {
      setImgSrc(null);
    }
  };

  const onChangeHandler = (e) => {
    const id = e.target.id;
    let value;
    if (id == 'watering_schedule') {
      value = parseInt(e.target.value);
    } else {
      value = e.target.value;
    }
    setGardenInputs({
      ...gardenInputs,
      [id]: value,
    });
  };

  const onCheckHandler = (e) => {
    setPresentCheck(e.target.checked);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const params = { ...gardenInputs, presentCheck };
    if (imgFile) {
      const formData = new FormData();
      const data = JSON.stringify(params);
      formData.append('data', data);
      formData.append('files', imgFile);
      formData.append('enctype', 'multipart/form-data');
      dispatch(updateGarden({ mygardenId: id, params: formData }));
    } else {
      dispatch(
        updateGarden({
          mygardenId: id,
          params: params,
        }),
      );
    }
  };

  const handleDragIn = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files) {
      setIsDragging(true);
    }
  }, []);

  const onChangeFiles = useCallback((e) => {
    let selectFiles = [];
    if (e.type === 'drop') {
      selectFiles = e.dataTransfer.files;
    } else {
      selectFiles = e.target.files;
    }

    const imgTarget = selectFiles[0];
    setImgFile(imgTarget);
    if (imgTarget) {
      const reader = new FileReader();
      reader.readAsDataURL(imgTarget);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
    } else {
      setImgSrc(null);
    }
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      onChangeFiles(e);
      setIsDragging(false);
    },
    [onChangeFiles],
  );

  const initDragEvents = useCallback(() => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener('dragenter', handleDragIn);
      dragRef.current.addEventListener('dragleave', handleDragOut);
      dragRef.current.addEventListener('dragover', handleDragOver);
      dragRef.current.addEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback(() => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener('dragenter', handleDragIn);
      dragRef.current.removeEventListener('dragleave', handleDragOut);
      dragRef.current.removeEventListener('dragover', handleDragOver);
      dragRef.current.removeEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  return (
    <Wrapper modalOpen={modalOpen}>
      <div className="close-modal" onClick={closeModal} />
      <div className="modal-div">
        <CloseIcon className="close-btn" onClick={closeModal} />
        <GardenForm onSubmit={onSubmitHandler}>
          <div
            className={isDragging ? 'img-div dragging' : 'img-div'}
            ref={dragRef}
          >
            <label htmlFor="plant-img" className="plant-img-label">
              <div
                className={!imgSrc ? 'label-div' : 'label-div plant-img-hide'}
              >
                <FileUploadIcon className="upload-icon" />
                <span>Drag & Drop images or Click to Upload</span>
              </div>
            </label>

            <input
              type="file"
              id="plant-img"
              className="plant-img-hide"
              accept="image/*"
              onChange={onImageChange}
            />
            <img
              src={imgSrc}
              alt="피드 이미지"
              className={imgSrc ? 'plant-img' : 'plant-img-hide'}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="plant-input-div">
              <label htmlFor="plantname">🌱 식물 종류</label>
              <input
                type="text"
                id="plantname"
                value={plant.plant_name}
                disabled
              />
            </div>
            <label htmlFor="memo">💬 한줄 메모</label>
            <input
              type="text"
              id="memo"
              onChange={onChangeHandler}
              placeholder="반려식물을 소개해주세요."
              value={gardenInputs.memo}
              required
            />
            <label htmlFor="date_grow">📆 키운 날짜</label>
            <input
              type="date"
              id="date_grow"
              onChange={onChangeHandler}
              value={gardenInputs.date_grow}
              required
            />
            <label htmlFor="watering_schedule">💧 물주는 주기 (일)</label>
            <input
              type="number"
              id="watering_schedule"
              onChange={onChangeHandler}
              placeholder="숫자만 입력해 주세요. ex. 1일: 1, 7일: 7"
              value={gardenInputs.watering_schedule}
              required
            />
            <label htmlFor="recent_water">🚿 최근 물 준 날짜</label>
            <input
              type="date"
              id="recent_water"
              onChange={onChangeHandler}
              value={gardenInputs.recent_water}
              required
            />
            <label htmlFor="preference">💚 추천 점수(선호 점수)</label>
            <select
              name="plant-preference"
              id="preference"
              onChange={onChangeHandler}
              value={gardenInputs.preference}
            >
              <option value="4">4점</option>
              <option value="3">3점</option>
              <option value="2">2점</option>
              <option value="1">1점</option>
              <option value="0">0점</option>
            </select>
            <span>
              <span>🎁 선물 받은 식물&nbsp;&nbsp;</span>
              <input
                type="checkbox"
                id="present"
                onChange={onCheckHandler}
                checked={presentCheck}
              />
            </span>
            <button type="submit">작성</button>
          </div>
        </GardenForm>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  ${({ modalOpen }) =>
    modalOpen &&
    css`
      display: flex;
      align-items: center;
      animation: modal-bg-show 0.4s;
    `}
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.85);
  overflow-y: initial !important;

  & .close-modal {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  & .modal-div {
    overflow-y: initial !important;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    padding: 50px;
    left: 50%;
    transform: translateX(-50%);
    animation: modal-show 0.4s;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 90vw;
    max-width: 850px;
    height: 90vh;

    & .close-btn {
      position: absolute;
      right: 30px;
      top: 30px;
      opacity: 0.5;
      &:hover {
        opacity: 1;
        cursor: pointer;
      }
    }
    @media (max-width: 1199px) {
      margin-top: 5vh;
      height: 90vh;
    }
  }

  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default GardenUpdateModal;
