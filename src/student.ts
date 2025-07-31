type Notes = number | Notes[];

export type Student = {
  name: string;
  notes: Notes;
  average: number;
};

export function createStudent(dataStudent: string): Student {
  const data = dataStudent.split(",").map((item) => item.trim());
  const name: string = data[0];
  const notes: Notes = data[1].split(" ").map((item) => parseFloat(item));
  let average: number;

  if (notes.length === 1) {
    average = notes[0] as number;
  } else {
    average = notes.reduce(
      (acc, note) => (acc as number) + (note as number),
      0
    ) as number;
    average /= notes.length;
  }

  return {
    name: name.toUpperCase(),
    notes: notes,
    average: average,
  };
}