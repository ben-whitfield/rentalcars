import { useReducer, useEffect } from 'react'
import axios from 'axios'

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}


const reducer = (state:any, action:any) => {
  switch(action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, results: [] }
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, results: action.payload.results }
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload.error, results: [] }
    default:
      return state
    }
}

const useFetchResults = (searchTerm: string) => {
  const BASE_URL = `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=3&solrTerm=${searchTerm}`
  const [state, dispatch] = useReducer(reducer, { results: [], loading: true })
  
  useEffect(() => {
    const controller = new AbortController();
    
    if(searchTerm.length < 2) return state
    
    dispatch({ type: ACTIONS.MAKE_REQUEST })
    axios.get(BASE_URL, {
        signal: controller.signal,
        params: { markdown: true, searchTerm }
    }).then(res => {
        dispatch({ type: ACTIONS.GET_DATA, payload: {results: res.data} })
    }).catch( e => {
        if (axios.isCancel(e)) return 
        dispatch({ type: ACTIONS.ERROR, payload: {error: e} })
    })

    return () => {
      controller.abort()
    }
  }, [searchTerm])

  return state
}

export default useFetchResults