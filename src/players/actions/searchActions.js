export const APPLY_FILTER = 'APPLY_FILTER';

export default function searchAction(filter) {
  return {
    type: APPLY_FILTER,
    payload: filter
  }
}