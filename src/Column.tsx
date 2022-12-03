import { AddNewItem } from "./AddNewItem"
import { Card } from "./Card"
import { ColumnContainer, ColumnTitle } from "./styles"


type ColumnProps = {
    text: string
}


export const Column = ({ text }: ColumnProps) => {
    return (
        <ColumnContainer>
            <ColumnTitle> { text } </ColumnTitle>
            <Card text="Build" />
            <Card text="Research & Test" />
            <Card text="Build some more" />
            <AddNewItem
                toggleButtonText="+ Add another Task"
                onAdd={() => console.log("Task added!")}
                dark
            />
      </ColumnContainer>
    )
}