export type TLogicState = {
  entities: {[key: string]: any},
  idsForCanvas: ["baseIds", "storeIds", "mineIds"],
  idsWithFields: ["storeIds", "mineIds"],
  baseIds: string[],
  storeIds: string[],
  workersIds: string[],
  mineIds: string[]
};

export default {
  LOGIC_ENTITY_SET: 'LOGIC_ENTITY_SET',
  LOGIC_SET_DATA: 'LOGIC_SET_DATA'
};
