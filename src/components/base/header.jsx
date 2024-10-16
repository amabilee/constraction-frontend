import React, { useState } from 'react'
import ConstractionLogo from '../../assets/logo/constraction-white.svg'
import bellIcon from '../../assets/header/bell-icon.svg'
import ProfilePic from '../../assets/header/pfp.svg'
import './style.css'

import { SelectPicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';


function Header() {
    const [unities, setUnities] = useState(["Unidade Anápolis A", "Unidade Anápolis B"])
    const [selectedUnity, setSelectedUnity] = useState("")

    const [userData, setUserData] = useState({ name: "José Figueiredo", profilePicture: ProfilePic })

    const navigationMainOptions = ['Gestão de Estoque', 'Gestão de Qualidade'].map(
        item => ({ label: item, value: item })
      );

    const [navigationSelectedOption, setNavigationSelectedOption] = useState('Gestão de Estoque')

    return (
        <>
            <div className="page-header">
                <div className="page-header-left">
                    <img src={ConstractionLogo} />
                    <select
                        value={selectedUnity}
                        className='filtering-input'
                        onChange={(e) => setSelectedUnity(e.target.value)}
                    >
                        {unities.map((unity, i) => (
                            <option key={i} value={unity}>{unity}</option>
                        ))}

                    </select>
                </div>
                <div className="page-header-right">
                    <div className="page-header-search">
                        <input type="text" placeholder='Pesquisar' />
                        <img src={bellIcon} />
                    </div>
                    <div className="page-header-profile">
                        <img src={userData.profilePicture} />
                        <p>{userData.name}</p>
                    </div>
                </div>
            </div>
            <div className="page-navigation">
                <SelectPicker
                    data={navigationMainOptions}
                    value={navigationSelectedOption}
                    onChange={setNavigationSelectedOption}
                    searchable={false}
                    style={{ width: 300 }}
                />
            </div>
        </>
    )
}

export default Header