import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const {level} = useContext(ChallengesContext);

    return(
        <div className={ styles.profileContainer }>
            <img src="http://github.com/LucasHenriqueT.png" alt="Profile Image"/>
            <div>
                <strong>Lucas Henrique Thiele</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );

}