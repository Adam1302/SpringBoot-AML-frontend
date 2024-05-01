import React, { ReactNode } from 'react'

interface Props {
    success: boolean;
    children: ReactNode;
    dismissAlert: () => void;
}

const Alert = ({ success, children, dismissAlert }: Props) => {
    const alertClasses = "alert alert-dismissible fade show " + (success ? "alert-success" : "alert-failure");
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

export default Alert
