import * as React from 'react';
import Button from '@mui/joy/Button';
import {ButtonDetails} from "@/app/interfaces/button-details";

export default function ButtonComponent({text, alignment}: ButtonDetails) {
    return (
        <div style={{textAlign: alignment}}>
            <Button>{text}</Button>
        </div>
    );
}