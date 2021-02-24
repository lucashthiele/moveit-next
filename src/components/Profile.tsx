import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return(
        <div className={ styles.profileContainer }>
            <img src="http://github.com/LucasHenriqueT.png" alt="Profile Image"/>
            <div>
                <strong>Lucas Henrique Thiele</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                </p>
            </div>
        </div>
    );

}