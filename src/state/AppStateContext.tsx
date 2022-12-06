import { createContext, useContext, FC, PropsWithChildren } from "react"
import { AppState, Task, List  } from "./appStateReducer"

const appData: AppState = {
    lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [{ id: "c0", text: "Build" }],
        },
        {
            id: "1",
            text: "In Progress",
            tasks: [{ id: "c0", text: "Research and test" }],
        },
        {
            id: "2",
            text: "Done",
            tasks: [{ id: "c0", text: "Build some more" }],
        }
    ]
}

type AppStateContextProps = {
    lists: List[]
    getTasksByListId(id: string): Task[]
}


const AppStateContext = createContext<AppStateContextProps>(
    {} as AppStateContextProps
)


export const AppStateProvider: FC<PropsWithChildren> = ({ children }) => {
    const {lists} = appData

    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || []
    }
    
    return (
        <AppStateContext.Provider value={{ lists, getTasksByListId }}>
            { children }
        </AppStateContext.Provider>
    )
}

// Custom Hook to return useContext of AppStateContext
export const useAppState = () => {
    return useContext(AppStateContext)
}