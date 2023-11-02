import * as React from 'react';
import ButtonComponent from "@/components/Button/ButtonComponent";
import Button from "@mui/joy/Button";

export default function QuizComponent() {

    return (
        <div>
            <div>
                <h1 style={{fontSize: '40px'}}> Linear Search Quiz </h1>

                <div style={{textAlign: 'center'}}>
                    <Button>Hint</Button>
                </div>
            </div>
            <div>
                <h2>Question 1</h2>

                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum facilis ipsa labore, modi necessitatibus nemo officiis, ratione similique temporibus totam voluptate voluptates. Error, iure laborum odio omnis quis temporibus ut?</p>
                </div>
            </div>
            <div>
                <span style={{border: "2px solid black"}}>Answer 1</span>

                <span style={{border: "2px solid black"}}>Answer 2</span>
            </div>
            <div>
                <span style={{border: "2px solid black"}}>Answer 3</span>
                <span style={{border: "2px solid black"}}>Answer 4</span>
            </div>

            <div style={{textAlign: 'center'}}>
                <Button>Next</Button>
            </div>
        </div>

    );
}