import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '437c9658-e497-466b-8472-c01b088cb312';

const App = () => {
     if (!localStorage.getItem('username')) return <LoginForm />; 
    return (
      <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

      />
    );
           
};

export default App;