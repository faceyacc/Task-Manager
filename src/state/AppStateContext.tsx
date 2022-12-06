import { createContext, useContext, FC, PropsWithChildren, Dispatch } from "react"
import { AppState, Task, List, appStateReducer  } from "./appStateReducer"
import { Action } from "./actions"
import { useImmerReducer } from "use-immer"

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
    dispatch:  Dispatch<Action>
}


const AppStateContext = createContext<AppStateContextProps>(
    {} as AppStateContextProps
)


export const AppStateProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, appData)

    const {lists} = state

    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || []
    }
    
    return (
        <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
            { children }
        </AppStateContext.Provider>
    )
}

// Custom Hook to return useContext of AppStateContext
export const useAppState = () => {
    return useContext(AppStateContext)
}