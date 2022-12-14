import { useEffect, useState } from "react"
import { load } from "./api"
import { AppState } from "./state/appStateReducer"

type InjectedProps = {
    initialState: AppState
}

// Removes injected props
type PropsWithoutInjected<TBaseProps> = Omit<
    TBaseProps,
    keyof InjectedProps
>

export function withInitialState<TProps>(
    WrappedComponent: React.ComponentType<PropsWithoutInjected<TProps> & InjectedProps>
    ) {

        return (props: PropsWithoutInjected<TProps>) => {
            const [initialState, setInitalState] = useState<AppState>({
                lists: [],
                draggedItem: null
            })
            const [isLoading, setIsLoading] = useState(true)
            const [error, setError] = useState<Error | undefined>()

            useEffect(() => {
                const fetchInitialState = async () => {
                  try {
                    const data = await load()
                    setInitalState(data)
                  } catch (e) {
                    if (e instanceof Error) {
                      setError(e)
                    }
                  }
                  setIsLoading(false)
                }
                fetchInitialState()
              }, [])

              if (isLoading) {
                return <div>Loadings</div>
              }

              if (error) {
                return <div>{error.message}</div>
              }
            // Return wrapper component
            return <WrappedComponent {...props} initialState={initialState} />
        }
}

