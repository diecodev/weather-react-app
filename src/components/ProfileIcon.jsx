import "../styles/profileIcon.scss";

const ProfileIcon = ({ iconSize, storyBorder, profileImage }) => {

    const getRandomIntNumber = (minNumber, maxNumber) => {
        minNumber = Math.ceil(minNumber);
        maxNumber = Math.floor(maxNumber);
        return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    }

    let id = getRandomIntNumber(1, 50);

    let image = profileImage ? profileImage : `https://i.pravatar.cc/${iconSize}?img=${id}`;

    return (
        <div className={storyBorder ? "storyBorder" : ""}>
            <img className="profileIcon" src={image} alt="Profile Icon" />
        </div>
    )
}

export default ProfileIcon