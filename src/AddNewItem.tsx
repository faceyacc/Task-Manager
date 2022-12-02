import { useState } from "react";
import { AddItemButton } from "./styles";




type AddNewItemProps = {
    onAdd(text: string): void // Called when user clciks the 'Create' button
    toggleButtonText: string 
    dark?: boolean
}

export const AddNewItem = ({ onAdd, toggleButtonText, dark }: AddNewItemProps) => {
    const [showForm, setShowForm] = useState(false)

    if (showForm) {
        // Show item creation here
    }

    return (
        <AddItemButton dark={ dark } onClick={ () => setShowForm(true) }>
            {toggleButtonText}
        </AddItemButton>
    )
    
}