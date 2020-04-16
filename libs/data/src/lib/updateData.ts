import { data } from './data';

export const updateData = (updatedData: string) => {
  data.basics.name = updatedData;

  console.log("updatedDate:", data);
}
