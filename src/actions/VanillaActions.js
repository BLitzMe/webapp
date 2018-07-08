export function setPostDate(date) {
    return {
        type: "SET_POST_DATE",
        payload: date
    }
}

export function setName(name) {
    return {
        type: "SET_NAME",
        payload: name
    }
}

export function setOrt(ort) {
    return {
        type: "SET_ORT",
        payload: ort
    }
}

//define action within an action creator
export function FetchPosts() {
    const FETCH_POSTS = 'FETCH_POSTS'
    return {
        type: FETCH_POSTS,
        status: "loading"
    }
}

//define action within an action creator
export function LoadPosts(posts) {
    const FETCH_SUCCESS = 'FETCH_SUCCESS'
    return {
        type: FETCH_SUCCESS,
        status: "success",
        posts: posts
    }
}

//define action within an action creator
export function FetchFailure(error) {
    const FETCH_FAILURE = 'FETCH_FAILURE'
    return {
        type: FETCH_FAILURE,
        status: "error",
        error
    }
}