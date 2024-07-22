import { FC } from "react"

import './SendingSpinner.scss';

interface SendingSpinnerProps {
  className?: string;
}

const SendingSpinner: FC<SendingSpinnerProps> = ({
  className
}) => {
  return <div className={`SendingSpinner${className ? ` ${className}` : ''}`}>
    <div className="box">
        <div className="SendingSpinner__border one"></div>
        <div className="SendingSpinner__border two"></div>
        <div className="SendingSpinner__border three"></div>
        <div className="SendingSpinner__border four"></div>

        <div className="line one"></div>
        <div className="line two"></div>
        <div className="line three"></div>
    </div>
  </div>
}

export default SendingSpinner;