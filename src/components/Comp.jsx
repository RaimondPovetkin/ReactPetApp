import React, {useState, useEffect} from "react";
import classes from './Comp.module.scss';

function Comp() {
    const [avatar, setAvatar] = useState([
        {
            name: "face",
            id: 1,
            range: 50,
        },
        {
            name: "nose",
            id: 1,
            range: 50,
        },
        {
            name: "mouth",
            id: 1,
            range: 50,
        },
    ])
    const arrParts = [
        {
            name: "face",
            children: [
                {
                    id: 1,
                    svg: '<path d="M91.62832,84.633818q-.891149,82.197863,28.516785,102.747329c29.407935,20.549465,91.788401-28.92147,101.591045-63.17058s-42.775177-102.747327-130.10783-39.576749Z" transform="matrix( 0.379094 0 0 1 97.120935 23.165654 )" fill="#ffdfc4" stroke="#000" stroke-width="0.6"/>',
                    svgMax: '<path d="M91.62832,84.633818q-.891149,82.197863,28.516785,102.747329c29.407935,20.549465,91.788401-28.92147,101.591045-63.17058s-42.775177-102.747327-130.10783-39.576749Z" transform="matrix( 1.065466 0 0 1-18.068966 23.165654 )" fill="#ffdfc4" stroke="#000" stroke-width="0.6"/>',
                    svgMin: '<path d="M91.62832,84.633818q-.891149,82.197863,28.516785,102.747329c29.407935,20.549465,91.788401-28.92147,101.591045-63.17058s-42.775177-102.747327-130.10783-39.576749Z" transform="matrix( 0.379094 0 0 1 97.120935 23.165654 )" fill="#ffdfc4" stroke="#000" stroke-width="0.6"/>'
                },
                {
                    id: 2,
                    svg: '<path d="M208.989485,140.322922q1.018012-61.080749-2.036025-86.531062c-3.054037-25.450313-78.363186-51.918633-78.386962,24.4323-.015783,50.6823-2.547162,55.480498-4.07205,63.116775q-75.950478,39.502284-2.036025,94.675162c55.245646,41.23769,95.544408-64.245536,86.531062-95.693175Z" transform="matrix( 0.372544 0 0 0.601194 92.960148 67.61604 )" fill="#ffdfc4" stroke="#000" stroke-width="0.6"/>',
                    svgMax: '<path d="M208.989485,140.322922q1.018012-61.080749-2.036025-86.531062c-3.054037-25.450313-78.363186-51.918633-78.386962,24.4323-.015783,50.6823-2.547162,55.480498-4.07205,63.116775q-75.950478,39.502284-2.036025,94.675162c55.245646,41.23769,95.544408-64.245536,86.531062-95.693175Z" transform="matrix( 1.163359 0 0 0.601194 -28.120774 67.61604 )" fill="#ffdfc4" stroke="#000" stroke-width="0.6"/>',
                    svgMin: '<path d="M208.989485,140.322922q1.018012-61.080749-2.036025-86.531062c-3.054037-25.450313-78.363186-51.918633-78.386962,24.4323-.015783,50.6823-2.547162,55.480498-4.07205,63.116775q-75.950478,39.502284-2.036025,94.675162c55.245646,41.23769,95.544408-64.245536,86.531062-95.693175Z" transform="matrix( 0.372544 0 0 0.601194 92.960148 67.61604 )" fill="#ffdfc4" stroke="#000" stroke-width="0.6"/>'
                }
            ]
        },
        {
            name: "nose",
            children: [
                {
                    id: 1,
                    svg: '<path d="M137.919793,121.79207c-73.014107,19.153164-92.120931-4.182215-81.017346,28.207928c9.290399,27.100918,58.596479,35.401317,78.923687.000001" transform="matrix(1 0 0 0.853337 12.080207 36.060083)" fill="#ffdfc4" stroke="#000" stroke-width="0.6"/>',
                    svgMax: '<path d="M137.919793,121.79207c-73.014107,19.153164-92.120931-4.182215-81.017346,28.207928c9.290399,27.100918,58.596479,35.401317,78.923687.000001" transform="matrix( 1.199541 0 0 0.853337-15.440446 36.727247 )" fill="#ffdfc4" stroke="#000" stroke-width="0.6"/>',
                    svgMin: '<path d="M137.919793,121.79207c-73.014107,19.153164-92.120931-4.182215-81.017346,28.207928c9.290399,27.100918,58.596479,35.401317,78.923687.000001" transform="matrix( 0.441907 0 0 0.853337 89.052278 36.727249 )" fill="#ffdfc4" stroke="#000" stroke-width="0.6"/>'
                },
                {
                    id: 2,
                    svg: '<path d="M137.919793,121.79207c-76.27451,9.601243-120.343819,64.024306-78.073661,93.994459c29.544842,20.94772,65.701401-33.438163,75.980002-65.78653" transform="matrix(1.244689 0 0 0.853337 -21.667249 35.605509)" fill="#ffdfc4" stroke="#000" stroke-width="0.6"/>',
                    svgMax: '<path d="M137.919793,121.79207c-76.27451,9.601243-120.343819,64.024306-78.073661,93.994459c29.544842,20.94772,65.701401-33.438163,75.980002-65.78653" transform="matrix( 1.244689 0 0 0.853337 -21.667249 35.605509 )" fill="#ffdfc4" stroke="#000" stroke-width="0.6"/>',
                    svgMin: '<path d="M137.919793,121.79207c-76.27451,9.601243-120.343819,64.024306-78.073661,93.994459c29.544842,20.94772,65.701401-33.438163,75.980002-65.78653" transform="matrix( 0.400766 0 0 0.435781 94.726436 86.880273 )" fill="#ffdfc4" stroke="#000" stroke-width="0.6"/>'
                },
                {
                    id: 3,
                    svg: '<path d="M150,164.921254L42.393161,206.740025q-4.543502-65.874246,107.606838-63.022966" transform="matrix( 1.172807 0 0 1 -25.92105 -3.061889 )" fill="#ffdfc4" stroke="#000" stroke-width="0.6"/>',
                    svgMax: '<path d="M150,164.921254L42.393161,206.740025q-4.543502-65.874246,107.606838-63.022966" transform="matrix( 1.172807 0 0 1 -25.92105 -3.061889 )" fill="#ffdfc4" stroke="#000" stroke-width="0.6"/>',
                    svgMin: '<path d="M150,164.921254L42.393161,206.740025q-4.543502-65.874246,107.606838-63.022966" transform="matrix( 0.401355 0 0 0.449309 89.79675 75.610467 )" fill="#ffdfc4" stroke="#000" stroke-width="0.6"/>'
                }
            ]
        },
        {
            name: "mouth",
            children: [
                {
                    id: 1,
                    svg: '<path d="M128.370671,174.737085q0-.313156,42.190472.313157-27.699629,34.28655-42.190472-.313157Z" transform="matrix( 0.888094 0 0 1.078384 7.06633 -17.763509 )" fill="#c34c4c" stroke="#000" stroke-width="0.6"/>',
                    svgMax: '<path d="M128.370671,174.737085q0-.313156,42.190472.313157-27.699629,34.28655-42.190472-.313157Z" transform="matrix( 2.183137 0 0 1.787645 -186.090691 -141.663596 )" fill="#c34c4c" stroke="#000" stroke-width="0.6"/>',
                    svgMin: '<path d="M128.370671,174.737085q0-.313156,42.190472.313157-27.699629,34.28655-42.190472-.313157Z" transform="matrix( 0.888094 0 0 1.078384 7.06633 -17.763509 )" fill="#c34c4c" stroke="#000" stroke-width="0.6"/>'
                }
            ]
        },
    ]
    const [bodyPart, setBodyPart] = useState(0)
    const [range, setRange] = useState(50)

    useEffect(() => {
        drawAvatar()
    }, [])

    const changeAvatarOption = (idEl, indexPart) => {
        avatar.map((item) => {
            if (item.name === arrParts[indexPart].name) {
                item.id = idEl
            }
        })
        setAvatar(avatar)
        drawAvatar()
    }

    const setAvatarRange = () => {
        avatar.find(item => item.name === arrParts[bodyPart].name).range = range
        setAvatar(avatar)
        drawAvatar()
    }

    const show = () => {
        console.log(avatar)
    }

    const drawAvatar = () => {
        let elem = document.querySelector(".mainSvg")
        let faceSvg = arrParts.find(item => item.name === 'face').children.find(item => item.id === avatar.find(item => item.name === 'face').id).svg
        let mouthSvg = arrParts.find(item => item.name === 'mouth').children.find(item => item.id === avatar.find(item => item.name === 'mouth').id).svg
        let noseSvg = arrParts.find(item => item.name === 'nose').children.find(item => item.id === avatar.find(item => item.name === 'nose').id).svg
        elem.innerHTML = faceSvg + mouthSvg + noseSvg;
    }

    return (
        <div className={classes.avatarRedactorWrap}>
            {bodyPart}
            <button onClick={show}>click</button>
            <div className={classes.avatarReview}>
                <svg
                    className="mainSvg"
                    viewBox="0 0 300 300"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision">
                </svg>
            </div>
            <div className={classes.tools}>
                <div className={classes.flexSrt}>
                    {arrParts.map((part, index) =>
                        <div key={part.name}>
                            <div
                                className={classes.bodyPart}
                                onClick={() => {
                                    setBodyPart(index)
                                    setRange(avatar.find(item => item.name === part.name).range)
                                }
                                }
                            >
                                {part.name}
                            </div>
                        </div>
                    )}
                </div>
                <div className={classes.flexSrt}>
                    {arrParts[bodyPart].children.map(
                        (kid) =>
                            <div
                                key={kid.id}
                                className={classes.bodyPartId}
                                onClick={() => {
                                    changeAvatarOption(kid.id, bodyPart)
                                }}
                            >
                                {kid.id}
                            </div>
                    )}
                </div>
                <div className={classes.flexSrt}>
                    <h1>{range}</h1>
                    <input type="range" value={range}
                           onChange={
                               (event) => {
                                   setRange(event.target.value)
                                   setAvatarRange()
                               }
                           }
                    >
                    </input>
                </div>
            </div>
        </div>
    )
}

export default Comp