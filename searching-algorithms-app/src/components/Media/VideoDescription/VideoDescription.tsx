import * as React from 'react';
import {fontSize} from "@mui/system";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";

export default function VideoDescriptionComponent() {

    return (
        <div >
            <h1 style={{fontSize: '40px'}}> Linear Search </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam architecto asperiores, aut dolore dolorem error excepturi impedit, molestiae molestias numquam, officiis porro quibusdam rem repellat rerum similique suscipit? Aperiam.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi consectetur consequatur distinctio, dolor perferendis quis! Adipisci corporis cumque, dolore eos expedita facere facilis modi molestiae quaerat reprehenderit. Est, tempore!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloribus nemo quisquam? Ad cupiditate eaque fugit id magnam nostrum! Alias aliquid architecto corporis ea possimus saepe sapiente ullam! Fugit, molestias!</p>
            <div>
                <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
                    <CardCover>
                        <img
                            src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
                            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                            loading="lazy"
                            alt=""
                        />
                    </CardCover>
                    <CardContent>
                        <Typography
                            level="body-lg"
                            fontWeight="lg"
                            textColor="#fff"
                            mt={{ xs: 12, sm: 18 }}
                        >
                            Image
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam architecto asperiores, aut dolore dolorem error excepturi impedit, molestiae molestias numquam, officiis porro quibusdam rem repellat rerum similique suscipit? Aperiam.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi consectetur consequatur distinctio, dolor perferendis quis! Adipisci corporis cumque, dolore eos expedita facere facilis modi molestiae quaerat reprehenderit. Est, tempore!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloribus nemo quisquam? Ad cupiditate eaque fugit id magnam nostrum! Alias aliquid architecto corporis ea possimus saepe sapiente ullam! Fugit, molestias!</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam architecto asperiores, aut dolore dolorem error excepturi impedit, molestiae molestias numquam, officiis porro quibusdam rem repellat rerum similique suscipit? Aperiam.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi consectetur consequatur distinctio, dolor perferendis quis! Adipisci corporis cumque, dolore eos expedita facere facilis modi molestiae quaerat reprehenderit. Est, tempore!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloribus nemo quisquam? Ad cupiditate eaque fugit id magnam nostrum! Alias aliquid architecto corporis ea possimus saepe sapiente ullam! Fugit, molestias!</p>
            <div>
                <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
                    <CardCover>
                        <img
                            src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
                            srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
                            loading="lazy"
                            alt=""
                        />
                    </CardCover>
                    <CardContent>
                        <Typography
                            level="body-lg"
                            fontWeight="lg"
                            textColor="#fff"
                            mt={{ xs: 12, sm: 18 }}
                        >
                            Image
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam architecto asperiores, aut dolore dolorem error excepturi impedit, molestiae molestias numquam, officiis porro quibusdam rem repellat rerum similique suscipit? Aperiam</p>

        </div>


    );
}