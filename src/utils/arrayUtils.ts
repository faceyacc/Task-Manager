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