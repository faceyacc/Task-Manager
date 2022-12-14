import { createContext, useContext, Dispatch, useEffect } from "react"
import { AppState, Task, List, appStateReducer  } from "./appStateReducer"
import { Action } from "./actions"
import { useImmerReducer } from "use-immer"
import { DragItem } from "../DragItem"
import { save } from "../api"
import { withInitialState } from "../withInitialState"

type AppStateProviderProps = {
    children: React.ReactNode
    initialState: AppState
  }

type AppStateContextProps = {
    draggedItem: DragItem | null
    lists: List[]
    getTasksByListId(id: string): Task[]
    dispatch:  Dispatch<Action>
}


const AppStateContext = createContext<AppStateContextProps>(
    {} as AppStateContextProps
)


export const AppStateProvider =
  withInitialState<AppStateProviderProps>(
    ({ children, initialState }) => {
      const [state, dispatch] = useImmerReducer(
        appStateReducer,
        initialState
      )

      useEffect(() => {
        save(state)
      }, [state])

      const { draggedItem, lists } = state
      const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || []
      }

      return (
        <AppStateContext.Provider
          value={{ draggedItem, lists, getTasksByListId, dispatch }}
        >
          {children}
        </AppStateContext.Provider>
      )
    }
  )

// Custom Hook to return useContext of AppStateContext
export const useAppState = () => {
    return useContext(AppStateContext)
}