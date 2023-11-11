import * as React from 'react';
import Button from '@mui/joy/Button';
import {ButtonDetails} from "@/app/interfaces/button-details";

export default function ButtonComponent({className, text, alignment, buttonEvent}: ButtonDetails) {
    return (
        <div className={className} style={{textAlign: alignment}}>
            <Button onClick={buttonEvent}>{text}</Button>
        </div>
    );
}