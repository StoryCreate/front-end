import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './components/lib/store';
import './css/App.css';
import './css/dashboard.css';
import './css/library.css';
import './css/responsiveness.css';
import './css/wallet.css';
import './css/creds.css';
import './css/coins.css';
import './css/contest.css';
import './css/ongoingcontest.css';
import './css/currentongoingcontest.css';
import './css/viewprofile.css';
import './css/friends.css';
import './css/followers.css';
import './css/following.css';
import './css/creators.css';
import './css/subscribers.css';
import './css/readinglist.css';
import './css/messages.css';
import './css/notifications.css';
import './css/myposts.css';
import './css/mentions.css';
import './css/mygigs.css';
import './css/completed.css';
import './css/explore.css';
import './css/mycommunity.css'
import './css/community.css';
import './css/joincommunity.css';
import './css/settings.css';
import './css/signinandsecurity.css';
import './css/settings.css';
import './css/subscriptions.css';
import './css/notification.css';
import './css/privacyandsafety.css';
import './css/hire.css';
import './css/findgig.css';
import './css/createnewstory.css';
import './css/storytypingnextchapter.css';
import './css/search.css';
import './css/reading.css';
import './css/readingnextchapter.css';
import './css/audioreading.css';
import './css/comicreading.css';
import Login from '@pages/(auth)/Login';
import Signup from '@pages/(auth)/Signup';
import { Dashboard } from './pages/dashboard'
import { Home } from './pages/home'
import { Homepost } from './pages/homepost'
import { Library } from './pages/library'
import { Wallet } from './pages/wallet'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { Viewprofile } from './pages/viewprofile'
import { Messages } from './pages/messages'
import { Notifications } from './pages/notifications'
import { Mygigs } from './pages/mygigs'
import { Explore } from './pages/explore'
import { Settings } from './pages/settings'
import { Creds } from './pages/creds'
import { Coins } from './pages/coins'
import { Contest } from './pages/Contest'
import { Ongoingcontest } from './pages/ongoingcontest'
import { Friends } from './pages/friends'
import { Followers } from './pages/followers'
import { Following } from './pages/following'
import { Creators } from './pages/creators'
import { Subscribers } from './pages/subscribers'
import { Readinglist } from './pages/readinglist'
import { Myposts } from './pages/myposts'
import { Mentions } from './pages/mentions'
import { Completed } from './pages/completed'
import { Mycommunity } from './pages/mycommunity'
import { Community } from './pages/community'
import { Joincommunity } from './pages/joincommunity'
import { Communitypost } from './pages/communitypost';
import { Signinandsecurity } from './pages/signinandsecurity'
import { Subscriptions } from './pages/subscriptions'
import { Notification } from './pages/notification'
import { Privacyandsafety } from './pages/privacyandsafety';
import { Accountinformation } from './pages/accountinformation';
import { Changepassword } from './pages/changepassword';
import { Deactivateaccount } from './pages/deactivateaccount';
import { Emailaddress } from './pages/emailaddress';
import { Phonenumbers } from './pages/phonenumbers';
import { Activesessions } from './pages/activesessions';
import { Twostepverification } from './pages/twostepverification';
import { Allownotifications } from './pages/allownotifications';
import { Storytyping } from './pages/storytyping';
import { Hire } from './pages/hire';
import { Findgig } from './pages/findgig';
import { Savedjobs } from './pages/savedjobs';
import { Createnewstory } from './pages/createnewstory';
import { Search } from './pages/search';
import { Reading } from './pages/reading';
import { Readingnextchapter } from './pages/readingnextchapter';
import { Readingpremium } from './pages/readingpremium';
import { Readingpremiumnextchapter } from './pages/readingpremiumnextchapter';
import { Audioreading } from './pages/audioreading';
import { Comicreading } from './pages/comicreading';
import { Storytypingnextchapter } from './pages/storytypingnextchapter';
import PopupProvider from './context/PopupProvider';
import { popupReducer } from './core/reducers';
import { Popup, PopupState } from './core/interfaces';
import RequireAuth from './components/lib/RequireAuth';
import { fetchProfile } from '@comp/lib/features/authSlice';
import Cookies from 'js-cookie';

function App() {
  const [popupState, dispatchPopup] = useReducer(popupReducer, {
    show: PopupState.HIDE,
    which: Popup.NONE
  });

  const token = Cookies.get('token');
  if (token) {
    store.dispatch(fetchProfile());
  }

  return (
    <Provider store={store}>
      <PopupProvider state={popupState} dispatch={dispatchPopup}>
        <div className="App">
          <Router>
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },
                success: {
                  duration: 3000,
                },
                error: {
                  duration: 4000,
                },
              }}
            />
            <Navbar />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route element={<RequireAuth><Outlet /></RequireAuth>}>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/library" element={<Library />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/viewprofile" element={<Viewprofile />} />
                <Route path="/creds" element={<Creds />} />
                <Route path="/coins" element={<Coins />} />
                <Route path="/contest" element={<Contest />} />
                <Route path="/ongoingcontest" element={<Ongoingcontest />} />
                <Route path="/creators" element={<Creators />} />
                <Route path="/subscribers" element={<Subscribers />} />
                <Route path="/readinglist" element={<Readinglist />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/myposts" element={<Myposts />} />
                <Route path="/mentions" element={<Mentions />} />
                <Route path="/mygigs" element={<Mygigs />} />
                <Route path="/completed" element={<Completed />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/mycommunity" element={<Mycommunity />} />
                <Route path="/community" element={<Community />} />
                <Route path="/joincommunity" element={<Joincommunity />} />
                <Route path="/communitypost" element={<Communitypost />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/signinandsecurity" element={<Signinandsecurity />} />
                <Route path="/subscriptions" element={<Subscriptions />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/privacyandsafety" element={<Privacyandsafety />} />
                <Route path="/accountinformation" element={<Accountinformation />} />
                <Route path="/changepassword" element={<Changepassword />} />
                <Route path="/deactivateaccount" element={<Deactivateaccount />} />
                <Route path="/emailaddress" element={<Emailaddress />} />
                <Route path="/phonenumbers" element={<Phonenumbers />} />
                <Route path="/activesessions" element={<Activesessions />} />
                <Route path="/twostepverification" element={<Twostepverification />} />
                <Route path="/allownotifications" element={<Allownotifications />} />
                <Route path="/homepost" element={<Homepost />} />
                <Route path="/storytyping" element={<Storytyping />} />
                <Route path="/hire" element={<Hire />} />
                <Route path="/findgig" element={<Findgig />} />
                <Route path="/savedjobs" element={<Savedjobs />} />
                <Route path="/createnewstory" element={<Createnewstory />} />
                <Route path="/search" element={<Search />} />
                <Route path="/reading" element={<Reading />} />
                <Route path="/readingnextchapter" element={<Readingnextchapter />} />
                <Route path="/readingpremium" element={<Readingpremium />} />
                <Route path="/readingpremium" element={<Readingpremiumnextchapter />} />
                <Route path="/audioreading" element={<Audioreading />} />
                <Route path="/comicreading" element={<Comicreading />} />
                <Route path="/nextchapter" element={<Storytypingnextchapter />} />
              </Route>
            </Routes>
            <Footer />
          </Router>
          <Friends show={popupState.show} which={popupState.which} />
          <Followers show={popupState.show} which={popupState.which} />
          <Following show={popupState.show} which={popupState.which} />
        </div>
      </PopupProvider>
    </Provider>
  );
}

export default App;
