export const OPEN_FOR_EDIT = 'OPEN_FOR_EDIT';
export function openForEdit(steps: any[]) {
  return {
    steps,
    type: OPEN_FOR_EDIT,
  };
}
