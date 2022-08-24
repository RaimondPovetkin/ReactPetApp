import React, {useState, useEffect} from "react";
import classes from './Comp.module.scss';

function Comp() {
    const [avatar, setAvatar] = useState([
        {
            name: "face",
            id: 1,
            range: 50,
            strokeWidth: 1,
            // offsetX: 0,
            // offsetY: 0,
        },
        {
            name: "nose",
            id: 1,
            range: 50,
            strokeWidth: 1,
            offsetX: 0,
            offsetY: 0,
        },
        {
            name: "eye",
            id: 1,
            range: 50,
            strokeWidth: 1,
            offsetX: 0,
            offsetY: 0,
            distance: 25,
        },
        {
            name: "pupil",
            id: 1,
            range: 50,
            strokeWidth: 1,
            offsetX: 0,
            offsetY: 0,
        },
        {
            name: "mouth",
            id: 2,
            range: 50,
            strokeWidth: 1,
            offsetX: 0,
            offsetY: 0,
        },
    ])
    const arrParts = [
        {
            name: "face",
            children: [
                {
                    id: 1,
                    svgMax: '<path d="M 100.62832 , 84.633818 q-.891149,82.197863,28.516785,102.747329c29.407935,20.549465,91.788401-28.92147,101.591045-63.17058s-42.775177-102.747327-130.10783-39.576749Z" transform="matrix( 1.065466 0 0 1 -18.068966 23.165654 )" fill="#ffdfc4" stroke="#000" stroke-width=" 0.6 "/>',
                    svgMin: '<path d="M 100.62832 , 84.633818 q-.891149,82.197863,28.516785,102.747329c29.407935,20.549465,91.788401-28.92147,101.591045-63.17058s-42.775177-102.747327-130.10783-39.576749Z" transform="matrix( 0.379094 0 0 1 97.120935 23.165654 )" fill="#ffdfc4" stroke="#000" stroke-width=" 0.6 "/>'
                },
                {
                    id: 2,
                    svgMax: '<path d="M 208.989485 , 140.322922 q1.018012-61.080749-2.036025-86.531062c-3.054037-25.450313-78.363186-51.918633-78.386962,24.4323-.015783,50.6823-2.547162,55.480498-4.07205,63.116775q-75.950478,39.502284-2.036025,94.675162c55.245646,41.23769,95.544408-64.245536,86.531062-95.693175Z" transform="matrix( 1.163359 0 0 0.601194 -28.120774 67.61604 )" fill="#ffdfc4" stroke="#000" stroke-width=" 0.6 "/>',
                    svgMin: '<path d="M 208.989485 , 140.322922 q1.018012-61.080749-2.036025-86.531062c-3.054037-25.450313-78.363186-51.918633-78.386962,24.4323-.015783,50.6823-2.547162,55.480498-4.07205,63.116775q-75.950478,39.502284-2.036025,94.675162c55.245646,41.23769,95.544408-64.245536,86.531062-95.693175Z" transform="matrix( 0.372544 0 0 0.601194 92.960148 67.61604 )" fill="#ffdfc4" stroke="#000" stroke-width=" 0.6 "/>'
                }
            ]
        },
        {
            name: "nose",
            children: [
                {
                    id: 1,
                    svgMax: '<path d="M 137.919793 , 121.79207 c-73.014107,19.153164-92.120931-4.182215-81.017346,28.207928c9.290399,27.100918,58.596479,35.401317,78.923687.000001" transform="matrix( 1.199541 0 0 0.853337 -15.440446 36.727247 )" fill="#ffdfc4" stroke="#000" stroke-width=" 0.6 "/>',
                    svgMin: '<path d="M 137.919793 , 121.79207 c-73.014107,19.153164-92.120931-4.182215-81.017346,28.207928c9.290399,27.100918,58.596479,35.401317,78.923687.000001" transform="matrix( 0.441907 0 0 0.853337 89.052278 36.727249 )" fill="#ffdfc4" stroke="#000" stroke-width=" 0.6 "/>',
                    offsetRatio: 1
                },
                {
                    id: 2,
                    svgMax: '<path d="M 137.919793 , 121.79207 c-76.27451,9.601243-120.343819,64.024306-78.073661,93.994459c29.544842,20.94772,65.701401-33.438163,75.980002-65.78653" transform="matrix( 1.244689 0 0 0.853337 -21.667249 35.605509 )" fill="#ffdfc4" stroke="#000" stroke-width=" 0.6 "/>',
                    svgMin: '<path d="M 137.919793 , 121.79207 c-76.27451,9.601243-120.343819,64.024306-78.073661,93.994459c29.544842,20.94772,65.701401-33.438163,75.980002-65.78653" transform="matrix( 0.400766 0 0 0.435781 94.726436 86.880273 )" fill="#ffdfc4" stroke="#000" stroke-width=" 0.6 "/>',
                    offsetRatio: 1
                },
                {
                    id: 3,
                    svgMax: '<path d="M 150 , 164.921254 L42.393161,206.740025q-4.543502-65.874246,107.606838-63.022966" transform="matrix( 1.172807 0 0 1 -25.92105 -3.061889 )" fill="#ffdfc4" stroke="#000" stroke-width=" 0.6 "/>',
                    svgMin: '<path d="M 150 , 164.921254 L42.393161,206.740025q-4.543502-65.874246,107.606838-63.022966" transform="matrix( 0.401355 0 0 0.449309 89.79675 75.610467 )" fill="#ffdfc4" stroke="#000" stroke-width=" 0.6 "/>',
                    offsetRatio: 1
                }
            ]
        },
        {
            name: "mouth",
            children: [
                {
                    id: 1,
                    svgMax: '<path d="M 128.370671 , 174.737085 q0-.313156,42.190472.313157-27.699629,34.28655-42.190472-.313157Z" transform="matrix( 2.183137 0 0 1.787645 -186.090691 -141.663596 )" fill="#c34c4c" stroke="#000" stroke-width=" 0.6 "/>',
                    svgMin: '<path d="M 128.370671 , 174.737085 q0-.313156,42.190472.313157-27.699629,34.28655-42.190472-.313157Z" transform="matrix( 0.888094 0 0 1.078384 7.06633 -17.763509 )" fill="#c34c4c" stroke="#000" stroke-width=" 0.6 "/>',
                    offsetRatio: 1
                },
                {
                    id: 2,
                    svgMax: '<g transform="matrix( 1.394783 0 0 1.036778 -57.097025 -6.470832 )"><path d="M 130.061802 , 180.640078 q21.349269,3.669404,35.026145-11.008218" transform="matrix(1.247624 0 0 1.79573-43.548276-134.981138)" fill="none" stroke="#000" stroke-width=" 0.6 "/><path d="M 174.428252 , 180.171006 Q183.434976,154.386068,155.747642,150" transform="matrix(.776155 0 0 0.561026 33.438584 77.014623)" fill="none" stroke="#3f5787" stroke-width=" 0.6 "/></g>',
                    svgMin: '<g transform="matrix( 0.416274 0 0 0.408232 84.423643 104.117447 )"><path d="M 130.061802 , 180.640078 q21.349269,3.669404,35.026145-11.008218" transform="matrix(1.247624 0 0 1.79573-43.548276-134.981138)" fill="none" stroke="#000" stroke-width=" 0.6 "/><path d="M 174.428252 , 180.171006 Q183.434976,154.386068,155.747642,150" transform="matrix(.776155 0 0 0.561026 33.438584 77.014623)" fill="none" stroke="#3f5787" stroke-width=" 0.6 "/></g>',
                    offsetRatio: 0.5
                },
            ]
        },
        {
            name: "eye",
            children: [
                {
                    id: 1,
                    svgMax: '<path d="M 141.29348 , 137.24661 c-17.98032-1.556401-25.888859,25.247619-7.187341,22.944922c9.675278-1.191306,20.766115-19.435712,7.187341-22.944922" transform="matrix( 1.051575 0 0 1 -4.596268 -14.380222 )" fill="#d2dbf1" stroke="#000" stroke-width=" 0.6 "/>',
                    svgMin: '<path d="M 141.29348 , 137.24661 c-17.98032-1.556401-25.888859,25.247619-7.187341,22.944922c9.675278-1.191306,20.766115-19.435712,7.187341-22.944922" transform="matrix( 0.577191 0 0 0.548883 59.701487 53.287328 )" fill="#d2dbf1" stroke="#000" stroke-width=" 0.6 "/>',
                    offsetRatio: 0.5
                }
            ]
        },
        {
            name: "pupil",
            children: [
                {
                    id: 1,
                    svgMax: '<path d="M 141.29348 , 137.24661 c-17.98032-1.556401-25.888859,25.247619-7.187341,22.944922c9.675278-1.191306,20.766115-19.435712,7.187341-22.944922" transform="matrix( 0.377843 0 0 0.387143 83.805781 75.49052 )" stroke="#000" stroke-width=" 0.6 "/>',
                    svgMin: '<path d="M 141.29348 , 137.24661 c-17.98032-1.556401-25.888859,25.247619-7.187341,22.944922c9.675278-1.191306,20.766115-19.435712,7.187341-22.944922" transform="matrix( 0.199806 0 0 0.204722 108.441118 102.85367 )" stroke="#000" stroke-width=" 0.6 "/>',
                    offsetRatio: 1
                }
            ]
        },
    ]
    const [bodyPart, setBodyPart] = useState(0)
    const [range, setRange] = useState(50)
    const [offsetY, setOffsetY] = useState(0)
    const [offsetX, setOffsetX] = useState(0)
    const [eyeDistance, setEyeDistance] = useState(25)
    const [strokeWidth, setStrokeWidth] = useState(1)

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

    const getSvgAverage = (str1, str2, name, drawFirstEye) => {
        const array1 = str1.split(' ')
        const array2 = str2.split(' ')
        const currentRange = avatar.find(item => item.name === name).range
        const currentOffsetX = avatar.find(item => item.name === name)?.offsetX
        const currentOffsetY = avatar.find(item => item.name === name)?.offsetY
        let resultArray = []
        /*слияние массивов*/
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                resultArray.push((Number(array1[i] * (100 - currentRange)) + Number(array2[i] * (currentRange))) / 100)
            } else {
                resultArray.push(array1[i])
            }
        }
        /*смещение по x и y*/
        let offsetRatio = arrParts.find(item => item.name === name).children.find(item => item.id === avatar.find(item => item.name === name).id).offsetRatio
        for (let i = 0; i < resultArray.length; i++) {
            if(resultArray[i] === 'd="M' && currentOffsetX){
                resultArray[i+1] = Number(resultArray[i+1]) + Number(currentOffsetX)*offsetRatio
            }
            if(resultArray[i] === ',' && currentOffsetY){
                resultArray[i+1] = Number(resultArray[i+1]) + Number(currentOffsetY)*offsetRatio
            }
        }
        /*обводка*/
        let currentStrokeWidth = avatar.find(item => item.name === name).strokeWidth
        for (let i = 0; i < resultArray.length; i++) {
            if(resultArray[i] === 'stroke-width="'){
                currentStrokeWidth === 0 ? resultArray[i+1] = 0 : resultArray[i+1] = Number(resultArray[i+1]) * currentStrokeWidth
            }
        }
        /*отрисовка 2 глаза*/
        if (drawFirstEye) {
            if (name === 'eye') {
                resultArray[2] = Number(resultArray[2]) + Number(avatar.find(item => item.name === 'eye').distance)
            } else if (name === 'pupil') {
                resultArray[2] = Number(resultArray[2]) + Number(avatar.find(item => item.name === 'eye').distance * 3)
            }
        }
        return resultArray.join(' ')
    }

    const setAvatarRange = () => {
        avatar.find(item => item.name === arrParts[bodyPart].name).range = range
        setAvatar(avatar)
        drawAvatar()
    }

    const setAvatarOffsetX = () => {
        avatar.find(item => item.name === arrParts[bodyPart].name).offsetX = offsetX
        setAvatar(avatar)
        drawAvatar()
    }

    const setAvatarEyeDistance = () => {
        avatar.find(item => item.name === 'eye').distance = eyeDistance
        setAvatar(avatar)
        drawAvatar()
    }

    const setAvatarOffsetY = () => {
        avatar.find(item => item.name === arrParts[bodyPart].name).offsetY = offsetY
        setAvatar(avatar)
        drawAvatar()
    }

    const setAvatarStrokeWidth = () => {
        avatar.find(item => item.name === arrParts[bodyPart].name).strokeWidth = strokeWidth
        setAvatar(avatar)
        drawAvatar()
    }

    const show = () => {
        console.log(avatar)
    }

    const drawAvatar = () => {
        let elem = document.querySelector(".mainSvg")
        const bodyPartArray = ['face', 'mouth', 'eye', 'pupil', 'nose', 'eye', 'pupil']
        const chainSvgArray = []
        let drawFirstEye = false
        for (let i of bodyPartArray) {
            chainSvgArray.push(
                getSvgAverage(
                    arrParts.find(item => item.name === i).children.find(item => item.id === avatar.find(item => item.name === i).id).svgMin,
                    arrParts.find(item => item.name === i).children.find(item => item.id === avatar.find(item => item.name === i).id).svgMax,
                    i, drawFirstEye
                )
            )
            if (i === 'pupil') drawFirstEye = true
        }
        elem.innerHTML = chainSvgArray.join('')
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
                                    setStrokeWidth(avatar.find(item => item.name === part.name).strokeWidth)
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
                <div className={classes.flexSrt}>
                    {avatar.find(item => item.name === arrParts[bodyPart].name).offsetX === undefined
                        ?
                        <div></div>
                        :
                        <div>
                            {offsetX}
                            <input type="range" min="-20" max="20" value={offsetX}
                                   onChange={
                                       (event) => {
                                           setOffsetX(event.target.value)
                                           setAvatarOffsetX()
                                       }
                                   }
                            >
                            </input>
                            {offsetY}
                            <input type="range" min="-20" max="20" value={offsetY}
                                   onChange={
                                       (event) => {
                                           setOffsetY(event.target.value)
                                           setAvatarOffsetY()
                                       }
                                   }
                            >
                            </input>
                        </div>
                    }
                </div>
                <div className={classes.flexSrt}>
                    {avatar.find(item => item.name === arrParts[bodyPart].name).distance === undefined
                        ?
                        <div></div>
                        :
                        <div>
                            {eyeDistance}
                            <input type="range" min="20" max="60" value={eyeDistance}
                                   onChange={
                                       (event) => {
                                           setEyeDistance(event.target.value)
                                           setAvatarEyeDistance()
                                       }
                                   }
                            >
                            </input>
                        </div>
                    }
                </div>
                <div className={classes.flexSrt}>
                    {avatar.find(item => item.name === arrParts[bodyPart].name).strokeWidth === undefined
                        ?
                        <div></div>
                        :
                        <div>
                            {'strokeWidth'}
                            <input type="range" min="0" max="10" value={strokeWidth}
                                   onChange={
                                       (event) => {
                                           setStrokeWidth(event.target.value)
                                           setAvatarStrokeWidth()
                                       }
                                   }
                            >
                            </input>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Comp