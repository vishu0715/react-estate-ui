import { useState } from 'react'
import './chat.scss'

function Chat() {
    const [chat, setChat] = useState(true)
    return (
        <div className='chat'>
            <div className="messages" onClick={() => setChat(!chat)}>
                <h1>Messages</h1>
                <div className="message">
                    <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="" />
                    <span>Vishnu</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="message">
                    <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="" />
                    <span>Vishnu</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="message">
                    <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="" />
                    <span>Vishnu</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="message">
                    <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="" />
                    <span>Vishnu</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="message">
                    <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="" />
                    <span>Vishnu</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="message">
                    <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="" />
                    <span>Vishnu</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="message">
                    <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="" />
                    <span>Vishnu</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>

            {chat  && (<div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="" />
                        Vishnu
                    </div>
                    <span className='close' onClick={() => setChat(false)}>X</span>
                </div>
                <div className="center">
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>12:00</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>12:30</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>13:00</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>14:00</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>8:00</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>10:00</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>11:00</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>14:00</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>15:00</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>17:00</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>)}
        </div>
    )
}

export default Chat