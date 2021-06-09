export const generateData = (length: number) => {
  const res = {} as {[key: string]: string};
  
  for(let i = 0; i < length; i++){
    res[i] = {[Math.random()]: generate(100)};
  }
  
  return res;
};

export const generate = (n: number) => 'Lorem insprut'.repeat((Math.random() + 1) * n) + `${Date.now()}`;