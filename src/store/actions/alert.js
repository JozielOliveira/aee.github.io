export const openAlert = (msg, variant) => ({ type : 'OPEN_ALERT', msg, variant })
export const closeAlert = () => ({type : 'CLOSE_ALERT'})

export const alertInfo = msg => openAlert(msg, 'info')  
export const alertError = msg => openAlert(msg, 'error')  
export const alertSuccess = msg => openAlert(msg, 'success') 
export const alertWarning = msg => openAlert(msg, 'warning')  
