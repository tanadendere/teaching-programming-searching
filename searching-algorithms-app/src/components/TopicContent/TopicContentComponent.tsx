import * as React from 'react';
import {TopicContentDetails} from "@/app/interfaces/topic-content-details";

export default function TopicContentComponent({title, summary}: TopicContentDetails) {

    return (
        <div >
            <h1 style={{fontSize: '40px'}}>{title}</h1>
            <p>{summary}</p>
        </div>

    );
}