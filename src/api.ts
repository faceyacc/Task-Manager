import { AppState } from "./state/appStateReducer";

// Makes POST request and sends JSON of AppState to the backend
export const save = (payload: AppState) => {
    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/save`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then((response) => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error("Error while saving the state.")
        }
    })
}

// Makes GET request to retrieve saved data
export const load = () => {
    return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/load`).then(
        (response) => {
            if (response.ok) {
                return response.json() as Promise<AppState>
            } else {
                throw new Error("Error while loading the state.")
            }
        }   
    )
}