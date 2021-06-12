import React, {ChangeEvent, useContext, useEffect, useRef, useState} from 'react';

import {
  Component, Add, List, Item, EditButtons, DeleteText, Edit, Delete, ItemId, ItemField, FlagWorking, Accept, Cancel
} from './styles';
import {useSelector} from "react-redux";
import {RootState} from "src/store";
import {IEntity} from "../../Brain/interfaces/outerInterfaces";
import {Context} from "../../Brain/BrainContext";

interface IProps {
  className: string;
}

const SelectField = ({value, onChangeHandler}: { value: string, onChangeHandler(w: string): void }) => {
  const entities = useSelector((s: RootState) => s.logic.idsWithFields.map((ids: string) => s.logic[ids]).flat().map((id: string) => s.logic.entities[id]));
  
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeHandler(e.target.value);
  };
  
  return (
    <select value={value} onChange={onSelectChange}>
      {entities.map((e: IEntity) => <option key={e.id} value={e.id}>{`${e.id} - ${e.type}`}</option>)}
    </select>
  )
};

const WorkerItem = ({wId}: { wId: string }) => {
  const brains = useContext(Context);
  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState(false);
  const [assignedField, setAssignedField] = useState<string>('');
  
  const data = useSelector((s: RootState) => s.logic.entities[wId]);
  const {id, isWorking, field} = data;
  
  const onEdit = () => {
    setEdit(true);
  };
  
  const onCheck = () => {
    if(remove){
      setRemove(false);
      brains.removeWorker(id);
    } else
    if(edit) {
      setEdit(false);
    }
  };
  
  const onCancel = () => {
    if(remove){
      setRemove(false);
    } else
    if(edit) {
      setEdit(false);
    }
  };
  
  const onDelete = () => {
    setRemove(true);
  };
  
  useEffect(() => {
    if (assignedField !== field?.id) {
      brains.assignWorker(wId, assignedField);
    }
  }, [edit]);
  
  return <Item>
    {remove ? <>
      <DeleteText>Are you sure that you want to delete ?</DeleteText>
    </> : <>
      <ItemId>{id}</ItemId>
      <FlagWorking isWorking={isWorking}>{isWorking}</FlagWorking>
      {
        edit ? <SelectField value={assignedField} onChangeHandler={setAssignedField}/> :
          <ItemField>{field?.id}</ItemField>
      }
    </>
    }
    <EditButtons>
      {
        edit || remove ? <>
          <Accept className="btn material-icons" onClick={onCheck}>check</Accept>
          <Cancel className="btn material-icons" onClick={onCancel}>cancel</Cancel>
        </> : <>
          <Edit className="btn material-icons" onClick={onEdit}>edit</Edit>
          <Delete className="btn material-icons" onClick={onDelete}>delete</Delete>
        </>
      }
    </EditButtons>
  </Item>
};

const Workers = (props: IProps) => {
  const {className} = props;
  const brains = useContext(Context);
  const workers = useSelector((s: RootState) => s.logic.workersIds);
  
  const handleAdd = () => {
    brains.createWorker();
  };
  
  return <Component className={className}>
    <Add onClick={handleAdd}>
      <div className={'circle'}>+</div>
      <div className={'text'}>Add worker</div>
    </Add>
    <List>
      {workers.map((wId: string) => <WorkerItem key={wId} wId={wId}/>)}
    </List>
  </Component>
};

export default Workers;