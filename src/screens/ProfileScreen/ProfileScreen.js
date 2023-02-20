import './profileScreen.css';
import Nav from "../../Nav";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/UserSlice";
import {auth} from "../../firebase";
import {PlansScreen} from "../PlansScreen/PlansScreen";

export default function ProfileScreen() {
    const user = useSelector(selectUser)

    return (
        <div className='profileScreen'>
            <Nav/>
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8n9HeEUrq7Pj9P0advGP3thHejzAB2_TRNfgpmlscnA6RL4ghAH3GMv3lpMkV3BfX2hI&usqp=CAU' alt='netflix_avatar'/>
                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen__plans">
                        <h3>Plans</h3>

                        <PlansScreen/>
                        <button
                            onClick={() => auth.signOut()}
                            className='profileScreen__signOut'>
                            Sign Out
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}