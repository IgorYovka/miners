import React, {useEffect, useMemo, useState, useRef} from 'react';
import Mind from '../../classes/Cat';
import {Cat, Talk} from './styles';

interface IProps {
  className?: string;
}

interface IState {
  isTalking: boolean;
}

function useOutsideAlerter(ref: any, onOutside: any) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(e: any) {
      if (ref.current && !ref.current.contains(e.target)) {
        onOutside();
      }
    }
    
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const UI_Cat = ({className}: IProps) => {
  const wrapperRef = useRef(null);
  
  const [chosen, setChosen] = useState<boolean>(false);
  const [innerState, setInnerState] = useState<IState>({
    isTalking: false
  });
  
  const mind = useMemo(() => new Mind({
    askAboutState: setInnerState
  }), []);
  
  const onClickHandler = (e: any) => {
    setChosen(true);
  };
  
  useOutsideAlerter(wrapperRef, () => { setChosen(false)});
  
  const {isTalking} = innerState;
  
  return <Cat ref={wrapperRef} className={className} chosen={chosen} onClick={onClickHandler}>
    {isTalking && <Talk>Meow</Talk>}
  </Cat>
};

export default UI_Cat;