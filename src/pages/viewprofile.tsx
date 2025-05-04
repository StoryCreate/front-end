import React, { useContext, useRef, useState, useEffect } from "react";
import { PopupContext } from "../context/PopupProvider";
import { Popup, PopupState } from "../core/interfaces";
import { useAppSelector, useAppDispatch } from "@comp/lib/hooks";
import { updateProfile, fetchProfile } from "@comp/lib/features/authSlice";
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import locationIcon from '../assets/icons/location.png';
import facebookIcon from '../assets/icons/facebook_profile.png';
import instagramIcon from '../assets/icons/instagram_profile.png';
import linkedInIcon from '../assets/icons/LinkedIN_profile.png';
import moreIcon from '../assets/icons/more_icon.png';
import bookOpen from '../assets/icons/book_open.png';
import thumbsUp from '../assets/icons/thumbs_up.png';
import subscribersIcon from '../assets/icons/subscribers.png';
import creatorsIcon from '../assets/icons/creators.png';
import profilePic from '../assets/icons/profile-pic.svg';
import EditProfileModal from '../components/EditProfileModal';
import { RootState, AppDispatch } from '@comp/lib/store';

export const Viewprofile = () => {
  const popupContext = useContext(PopupContext);
  const dispatch: AppDispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [updating, setUpdating] = useState(false);
  const navigate = useNavigate();
  
  // Fetch profile on component mount
  useEffect(() => {
    dispatch(fetchProfile() as any);
  }, [dispatch]);

  // Use useAppSelector to get user, loading, and error
  const { user, loading, error } = useAppSelector((state: RootState) => state.auth);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (open && dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [open]);

  // useEffect(() => {
  //   if (!user?.validToken) {
  //     navigate('/login')
  //   }
  // }, [user, navigate]);

  // Early returns for loading and error states
  if (loading) return <p className="h-screen mt-10">Loading...</p>;
  if (error) return <div className="flex flex-col gap-4 items-center justify-center">
    <p className="h-screen mt-10 space-x-4" style={{ color: 'red' }}>
    {error}
    <span className="text-purple-600 cursor-pointer" onClick={() => navigate('/login')}> Login</span>
    </p>
  </div>;
  if (!user) return <p className="h-screen mt-10">No user data available.</p>;

  // Derive names from nested person object or fallback to top-level
  const personData = user?.person || {};
  const firstName = personData.firstName || '';
  const lastName = personData.lastName || '';
  const fullName = `${firstName} ${lastName}`.trim() || user.name || '';
  const tagline = user.profession || 'Creator';

  // Popup handling functions
  const showPopup = (which: Popup) => {
    popupContext?.dispatch({ type: PopupState.HIDE, payload: { show: PopupState.HIDE, which: Popup.NONE } });
    popupContext?.dispatch({ type: PopupState.SHOW, payload: { show: PopupState.SHOW, which } });
  };

  const showFollowing = () => {
    popupContext?.dispatch({
      type: PopupState.HIDE,
      payload: {
        show: PopupState.HIDE,
        which: Popup.NONE
      }
    });

    popupContext?.dispatch({
      type: PopupState.SHOW,
      payload: {
        show: PopupState.SHOW,
        which: Popup.FOLLOWING
      }
    });
  };

  const showFollowers = () => {
    popupContext?.dispatch({
      type: PopupState.HIDE,
      payload: {
        show: PopupState.HIDE,
        which: Popup.NONE
      }
    });

    popupContext?.dispatch({
      type: PopupState.SHOW,
      payload: {
        show: PopupState.SHOW,
        which: Popup.FOLLOWING
      }
    })
  }

  const showFriends = () => {
    popupContext?.dispatch({
      type: PopupState.SHOW,
      payload: {
        show: PopupState.SHOW,
        which: Popup.FRIENDS
      }
    });
  }

  // Handlers for Edit Profile modal
  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };
  const handleCancelEdit = () => {
    setIsEditModalOpen(false);
  };
  const handleSubmitEdit = (values: any) => {
    setUpdating(true);
    dispatch(updateProfile(values) as any)
      .unwrap()
      .then(() => {
        toast.success('Profile updated successfully!');
        setIsEditModalOpen(false);
      })
      .catch((err: any) => {
        toast.error(err || 'Update failed');
      })
      .finally(() => setUpdating(false));
  };

  return (
    <div className="flex flex-col main-padding bg-gray-100 min-h-screen pt-16 pb-16">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-32">
        <div>
          <div className="bg-white max-w-4xl left rounded-2xl shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src="https://c.animaapp.com/7HeBl85L/img/rectangle-2383.png"
                alt="Cover"
                className="w-full h-48 object-cover"
              />
              <img
                src={profilePic}
                alt="Profile"
                className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-white absolute left-4 lg:left-16 top-36 lg:top-32"
              />
            </div>
            <div className="mt-10 lg:mt-6 p-6 pl-6 lg:pl-52 text-left">
              <h1 className="text-xl text-black lg:text-2xl font-semibold mb-2">{fullName}</h1>
              <p className="text-gray-600 text-sm">{tagline}</p>
              <div className="flex gap-8 pt-6 text-sm">
                <div className="text-primary font-medium" onClick={showFriends}> 1000 Friends</div>
                <div className="text-primary font-medium" onClick={showFollowers}>900 Followers</div>
                <div className="text-primary font-medium" onClick={showFollowing}>500 Following</div>
              </div>
              <button
                onClick={handleOpenEditModal}
                className="mt-4 px-4 py-2 flex justify-end border border-purple-600 text-purple-600 rounded-full font-medium cursor-pointer"
              >
                Edit Profile
              </button>
            </div>
          </div>

          {/* About Me */}
          <div className="bg-white max-w-4xl left mt-14 p-6 rounded-2xl shadow">
            <h2 className="text-xl text-left font-semibold mb-4">About Me</h2>
            <p className="text-gray-700 text-left text-sm leading-relaxed">
              {user.bio || 'No bio added yet.'}
            </p>
          </div>
        </div>

        <div>
          {/* More Menu */}
          <div className="max-w-4xl mx-auto mt-8 pl-80 lg:pl-44" ref={dropdownRef}>
            <button onClick={() => setOpen(!open)} className="relative">
              <img src={moreIcon} alt="More" className="w-6 h-6" />
              {open && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg p-4">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2 cursor-pointer hover:text-purple-600" onClick={() => showPopup(Popup.FRIENDS)}>
                      <img src={creatorsIcon} alt="Friends" className="w-5 h-5" /><span>Friends</span>
                    </li>
                    <li className="flex items-center space-x-2 cursor-pointer hover:text-purple-600">
                      <img src={bookOpen} alt="Published" className="w-5 h-5" /><span>Published Stories</span>
                    </li>
                    <li className="flex items-center space-x-2 cursor-pointer hover:text-purple-600">
                      <img src={thumbsUp} alt="Saved" className="w-5 h-5" /><span>Saved Books</span>
                    </li>
                    <li className="flex items-center space-x-2 cursor-pointer hover:text-purple-600">
                      <img src={subscribersIcon} alt="Subscribers" className="w-5 h-5" /><span>Subscribers</span>
                    </li>
                    <li className="flex items-center space-x-2 cursor-pointer hover:text-purple-600">
                      <img src={creatorsIcon} alt="Creators" className="w-5 h-5" /><span>Creators I follow</span>
                    </li>
                  </ul>
                </div>
              )}
            </button>
          </div>

          {/* Interests */}
          <div className="bg-white max-w-4xl mx-auto mt-8 p-6 rounded-2xl shadow">
            <h2 className="text-xl text-left font-semibold mb-4">Interests</h2>
            {user.interests && user.interests.length > 0 ? (
              <ul className="flex flex-col text-sm">
                {user.interests.map((intr: string) => (
                  <li key={intr} className="flex items-center space-x-1">
                    <span className="text-purple-600">●</span>
                    <span className="text-gray-700">{intr || 'No interest added yet.'}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-sm">No interests specified</p>
            )}
          </div>

          {/* Location */}
          <div className="bg-white max-w-4xl mx-auto mt-8 p-6 rounded-2xl shadow flex items-center space-x-4">
            <div className="flex flex-col gap-4">
              <h2 className="text-xl text-left font-semibold flex-shrink-0">Location</h2>
              <div className="flex flex-row gap-2 items-center">
                <img src={locationIcon} alt="Location" className="w-5 h-5" />
                <span className="text-gray-700 text-sm">{user.location || 'No location added.'}</span>
              </div>
            </div>
          </div>

          {/* Let's Connect */}
          <div className="bg-white max-w-4xl mx-auto mt-8 p-6 rounded-lg shadow text-sm">
            <h2 className="text-xl text-left font-semibold mb-4">Let's Connect</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 overflow-hidden max-w-[300px]">
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
                <span className="text-gray-700">{user.instagram}</span>
              </div>
              <div className="flex items-center space-x-3 overflow-hidden max-w-[300px]">
                <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
                <span className="text-gray-700">{user.facebook}</span>
              </div>
              <div className="flex items-center space-x-3 overflow-hidden max-w-[300px]">
                <img src={linkedInIcon} alt="LinkedIn" className="w-6 h-6" />
                <span className="text-gray-700 text-left">{user.linkedin}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Place the EditProfileModal at root */}
      <EditProfileModal
        visible={isEditModalOpen}
        confirmLoading={updating}
        initialValues={{
          firstName: firstName,
          lastName: lastName,
          profession: user.profession,
          bio: user.bio,
          location: user.location,
          interests: user.interests,
          instagram: user.instagram,
          facebook: user.facebook,
          linkedin: user.linkedin,
        }}
        onCancel={handleCancelEdit}
        onSubmit={handleSubmitEdit}
      />
    </div>
  );
};

export default Viewprofile;