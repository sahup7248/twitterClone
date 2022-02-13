import React,{ useState} from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from './firebase'

function Tweetbox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = e =>{
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Piyush sahu',
            username: 'piyusshhh',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740",
        });
        setTweetMessage("");
        setTweetImage("");
    };
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740" />
                    <input
                    onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage}
                    placeholder="What's happening?"
                    type="text"
                    />
                    
                </div>
                <input
                onChange={(e)=> setTweetImage(e.target.value)}
                value={tweetImage}
                className="tweetBox__imageInput"
                placeholder="Optional : Enter image URl"
                type="text"
                />
                <Button onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default Tweetbox;
