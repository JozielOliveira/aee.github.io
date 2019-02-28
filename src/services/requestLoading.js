import { loadingC } from '../store/actions/loading'

export const request = async (req, dispatch) => {
    try {
      dispatch(loadingC()) // Start Loading
      const response = await req // Featch
      dispatch(loadingC()) // End Loading
      return response
    } catch (error) {
      console.log(error)
      dispatch(loadingC()) /// End Loading
      return {error : error.response.data.message}
    }
}