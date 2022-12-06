 export type Item = {
    id: string
 }

// Helper function to find Lists by thier indices
 export const findItemIndexById = <TItem extends Item>(
    items: TItem[],
    id: string
 ) => {
    return items.findIndex((item: TItem) => item.id === id)
 }

// Helper function to remove an task at a given index
 export const removeItemAtIndex = <TItem>(
   array: TItem[],
   index: number
 ) => {
   return [...array.slice(0, index), ...array.slice(index + 1)]
 }

 // Helper function to insert an task at a given index
 export const insertItemAtIndex = <TItem>(
   array: TItem[],
   item: TItem,
   index: number
 ) => {
   return [...array.slice(0, index), item, ...array.slice(index)]
 }


// Helper function to move an item from one List to another List
 export const moveItem = <TItem>(
   array: TItem[],
   from: number,
   to: number
 ) => {
   const item = array[from]
   return insertItemAtIndex(removeItemAtIndex(array, from), item, to)
 }