import React, { ReactNode } from 'react'

interface Props {
    success: boolean;
    children: ReactNode;
}

const Alert = ({ success, children }: Props) => {
    const alertClasses = "alert " + (success ? "alert-success" : "alert-failure");
  return (
    <div className={alertClasses} role="alert">{children}</div>
  )
}

export default Alert
