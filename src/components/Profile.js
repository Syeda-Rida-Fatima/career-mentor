import React from 'react';

const Profile = () => {
    return (
        <div>
            <SfNav
                showProfile={true}
                profilePicture='https://i.pinimg.com/736x/7f/79/6d/7f796d57218d9cd81a92d9e6e8e51ce4--free-avatars-online-profile.jpg'
                profileMenu={[{ caption: "Profile", link: "profile" }, [{ caption: "Settings", link: "support" }, { caption: "Notifications", link: "notifications" }, { caption: "Privacy", link: "privacy" }], { caption: "Support", link: "support" }, { caption: 'Upgrade', link: "upgrade" }]}
                profilePreamble={<div style={{ width: '100%', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px' }}><small>Hi Hrushi!</small><br /><small><small><i>Welcome to Superflows!</i></small></small></div>}
                profileComponent={<div style={{ width: '100%', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px' }}><small>Sign Out</small></div>}
                signInCaption="Subscribe"
                onMenuClicked={(value) => { alert(value) }}
                onSignInPressed={() => { alert('Subscribe pressed!') }}
                stylesProfilePictureContainer={
                    { backgroundColor: 'black', padding: '2px', color: 'white', borderRadius: '5px' }
                }
                stylesProfilePreamble={
                    { backgroundColor: 'white', color: 'black' }} stylesProfileComponent={{ backgroundColor: 'white', color: 'black' }
                    }
                stylesMenu={
                    { backgroundColor: 'black', color: 'white', paddingTop: '3px', paddingBottom: '3px', paddingLeft: '10px', paddingRight: '10px', borderRadius: '5px' }
                }
                stylesSubMenu={
                    { backgroundColor: 'black', color: 'white', paddingLeft: '5px', paddingRight: '5px', border: 'solid 1px gray' }
                }
                stylesMenuMobile={
                    { backgroundColor: 'black', color: 'white', paddingLeft: '5px', paddingRight: '5px', borderRadius: '5px', border: 'solid 1px gray' }
                }
                stylesMenuMobileSelected={
                    { backgroundColor: 'white', color: 'black', paddingLeft: '5px', paddingRight: '5px', borderRadius: '5px', border: 'solid 1px gray' }
                }
                stylesSubMenuMobile={
                    { backgroundColor: 'black', color: 'white', paddingLeft: '5px', paddingRight: '5px', borderRadius: '5px', border: 'solid 1px gray' }
                }
            />
        </div>
    );
};

export default Profile;