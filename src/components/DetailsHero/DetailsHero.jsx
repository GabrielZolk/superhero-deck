import React from 'react'
import { DetailsCard, CardInfo } from './DetailsHero.style';
import { Background } from '../Grid/Grid.style';
import { Art } from '../CardHero/CardHero.style';

export default function DetailsHero({ appearance, img, biography, connections, work }) {
    return (
        <>
            <Background src='/bg.png'></Background>
            <DetailsCard>
                <div id='left-div'>
                    <CardInfo>
                        <h1>Appearance</h1>
                        <ul>
                            <li>Gender: {appearance.gender}</li>
                            <li>Eye Color: {appearance['eye-color']}</li>
                            <li>Hair Color: {appearance['hair-color']}</li>
                            <li>Height: {appearance.height[1]}</li>
                            <li>Race: {appearance.race}</li>
                            <li>Weight: {appearance.weight[1]}</li>
                        </ul>

                        <h1>Connections</h1>
                        <ul>
                            <li>Group: {connections['group-affiliation']}</li>
                        </ul>
                    </CardInfo>
                </div>
                <Art src={img} id='image'/>
                <div id='right-div'> 
                    <CardInfo>
                        <h1>Biography</h1>
                        <ul>
                            <li>Nicknames: {biography.aliases[0]} / {biography.aliases[1]}</li>
                            <li>Alignment: {biography.alignment}</li>
                            <li>Alter-Egos: {biography['alter-egos']}</li>
                            <li>First Appearance: {biography['first-appearance']}</li>
                            <li>Full Name: {biography['full-name']}</li>
                            <li>Originality: {biography['place-of-birth']}</li>
                            <li>Publisher: {biography.publisher}</li>
                        </ul>

                        <h1>Work</h1>
                        <ul>
                            <li>Base: {work.base}</li>
                            <li>Occupation: {work.occupation}</li>
                        </ul>
                    </CardInfo>
                </div>
            </DetailsCard>

        </>
    )
}
