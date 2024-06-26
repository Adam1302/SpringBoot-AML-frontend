import React, { ReactNode } from 'react'

interface BookAlertProps {
    success: boolean;
    children: ReactNode;
    dismissAlert: () => void;
}

function Alert ({ success, children, dismissAlert }: Readonly<BookAlertProps>) {
    const alertClasses = "alert alert-dismissible fade show " + (success ? "alert-success" : "alert-danger");
  return (
    <div className={alertClasses} role="alert">
        <div>{children}</div>
        <button 
            type="button" 
            className="btn-close" 
            data-bs-dismiss="alert" 
            aria-label="Close"
            onClick={dismissAlert}
            ></button>
    </div>
  )
}

export default Alert;
