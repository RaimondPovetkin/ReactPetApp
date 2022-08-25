import React, {useState, useEffect} from "react";
import classes from './Comp.module.scss';

function Comp() {
    const [avatar, setAvatar] = useState([
        {
            name: "face",
            id: 1,
            range: 50,
            strokeWidth: 1,
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
            distance: 25,
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
                },
                {
                    id: 3,
                    svgMax: '<path d="M 132.980959 , 152.916638 c-8.977552-19.08632-6.986275-22.008568-6.986275-38.465098c0-42.513567,61.506276-60.810174,90.606415-17.877499c7.241008,10.682967,20.310776,43.695667,22.418596,56.342597c1.28921,7.73526-10.028536,34.836913-13.874324,40.751418-25.273858,38.869112-62.410667,45.362243-84.316186,41.698362-27.576207-10.169817-24.996001-72.398645-7.848226-82.44978" transform="matrix( 0.912264 0 0 0.79757 6.499539 27.030639 )" fill="#ffdfc4" stroke="#000" stroke-width=" 0.6 "/>',
                    svgMin: '<path d="M 132.980959 , 152.916638 c-8.977552-19.08632-6.986275-22.008568-6.986275-38.465098c0-42.513567,61.506276-60.810174,90.606415-17.877499c7.241008,10.682967,20.310776,43.695667,22.418596,56.342597c1.28921,7.73526-10.028536,34.836913-13.874324,40.751418-25.273858,38.869112-62.410667,45.362243-84.316186,41.698362-27.576207-10.169817-24.996001-72.398645-7.848226-82.44978" transform="matrix( 0.240387 0 0 0.79757 111.634157 27.030639 )" fill="#ffdfc4" stroke="#000" stroke-width=" 0.6 "/>'
                },
                {
                    id: 4,
                    svgMax: '<path d="M 100.442299 , 133.463856 c-17.882506,8.558172-4.774201,80.252058,0,92.617851c4.39693,11.388613,60.674823,14.279292,72.975373,9.886232c28.28586-10.10209,52.324749-132.321069,43.635059-156.217729-11.10097-30.52766-52.735907-37.075724-79.012237-21.747864-31.11848,18.15245-12.782694,65.454844-37.598195,75.46151" transform="matrix( 0.967581 0 0 0.697076 -0.546043 49.640504 )" fill="#ffdfc4" stroke="#000" stroke-width=" 0.6 "/>',
                    svgMin: '<path d="M 100.442299 , 133.463856 c-17.882506,8.558172-4.774201,80.252058,0,92.617851c4.39693,11.388613,60.674823,14.279292,72.975373,9.886232c28.28586-10.10209,52.324749-132.321069,43.635059-156.217729-11.10097-30.52766-52.735907-37.075724-79.012237-21.747864-31.11848,18.15245-12.782694,65.454844-37.598195,75.46151" transform="matrix( 0.243401 0 0 0.697076 114.14506 49.640504 )" fill="#ffdfc4" stroke="#000" stroke-width=" 0.6 "/>'
                },
            ]
        },
        {
            name: "nose",
            children: [
                {
                    id: 1,
                    svgMax: '<path d="M 137.919793 , 121.79207 c-73.014107,19.153164-92.120931-4.182215-81.017346,28.207928c9.290399,27.100918,58.596479,35.401317,78.923687.000001" transform="matrix( 1.199541 0 0 0.853337 -15.440446 36.727247 )" fill="#ffdfc4" stroke="#000" stroke-width=" 0.6 "/>',
                    svgMin: '<path d="M 137.919793 , 121.79207 c-73.014107,19.153164-92.120931-4.182215-81.017346,28.207928c9.290399,27.100918,58.596479,35.401317,78.923687.000001" transform="matrix( 0.441907 0 0 0.853337 89.052278 36.727249 )" fill="#ffdfc4" stroke="#000" stroke-width=" 0.6 "/>',
                    offsetRatioX: 1,
                    offsetRatioY: 1
                },
                {
                    id: 2,
                    svgMax: '<path d="M 137.919793 , 121.79207 c-76.27451,9.601243-120.343819,64.024306-78.073661,93.994459c29.544842,20.94772,65.701401-33.438163,75.980002-65.78653" transform="matrix( 1.244689 0 0 0.853337 -21.667249 35.605509 )" fill="#ffdfc4" stroke="#000" stroke-width=" 0.6 "/>',
                    svgMin: '<path d="M 137.919793 , 121.79207 c-76.27451,9.601243-120.343819,64.024306-78.073661,93.994459c29.544842,20.94772,65.701401-33.438163,75.980002-65.78653" transform="matrix( 0.400766 0 0 0.435781 94.726436 86.880273 )" fill="#ffdfc4" stroke="#000" stroke-width=" 0.6 "/>',
                    offsetRatioX: 1,
                    offsetRatioY: 1
                },
                {
                    id: 3,
                    svgMax: '<path d="M 150 , 164.921254 L42.393161,206.740025q-4.543502-65.874246,107.606838-63.022966" transform="matrix( 1.172807 0 0 1 -25.92105 -3.061889 )" fill="#ffdfc4" stroke="#000" stroke-width=" 0.6 "/>',
                    svgMin: '<path d="M 150 , 164.921254 L42.393161,206.740025q-4.543502-65.874246,107.606838-63.022966" transform="matrix( 0.401355 0 0 0.449309 89.79675 75.610467 )" fill="#ffdfc4" stroke="#000" stroke-width=" 0.6 "/>',
                    offsetRatioX: 1,
                    offsetRatioY: 1
                }
            ]
        },
        {
            name: "mouth",
            children: [
                {
                    id: 1,
                    svgMax: '<path d="M 181.636139 , 177.10198 c-1.12169-2.24337-11.161287-17.266134-12.194574-15.209067-10.12556,20.157956-36.260364,14.813217-36.392314,15.209067-.7,2.10001,20.136703,13.266007,48.586888,0" transform="matrix( 1.515516 0 0 1.475316 -79.836834 -74.571161 )" fill="#fff" stroke="#000" stroke-width=" 0.6 "/>',
                    svgMin: '<path d="M 181.636139 , 177.10198 c-1.12169-2.24337-11.161287-17.266134-12.194574-15.209067-10.12556,20.157956-36.260364,14.813217-36.392314,15.209067-.7,2.10001,20.136703,13.266007,48.586888,0" transform="matrix( 0.541325 0 0 0.643328 57.089067 71.854778 )" fill="#fff" stroke="#000" stroke-width=" 0.6 "/>',
                    offsetRatioX: 0.4,
                    offsetRatioY: 0.3
                },
                {
                    id: 2,
                    svgMax: '<g transform="matrix( 1.394783 0 0 1.036778 -57.097025 -6.470832 )"><path d="M 130.061802 , 180.640078 q21.349269,3.669404,35.026145-11.008218" transform="matrix(1.247624 0 0 1.79573-43.548276-134.981138)" fill="none" stroke="#000" stroke-width=" 0.6 "/><path d="M 174.428252 , 180.171006 Q183.434976,154.386068,155.747642,150" transform="matrix(.776155 0 0 0.561026 33.438584 77.014623)" fill="none" stroke="#000" stroke-width=" 0.6 "/></g>',
                    svgMin: '<g transform="matrix( 0.416274 0 0 0.408232 84.423643 104.117447 )"><path d="M 130.061802 , 180.640078 q21.349269,3.669404,35.026145-11.008218" transform="matrix(1.247624 0 0 1.79573-43.548276-134.981138)" fill="none" stroke="#000" stroke-width=" 0.6 "/><path d="M 174.428252 , 180.171006 Q183.434976,154.386068,155.747642,150" transform="matrix(.776155 0 0 0.561026 33.438584 77.014623)" fill="none" stroke="#000" stroke-width=" 0.6 "/></g>',
                    offsetRatioX: 0.5,
                    offsetRatioY: 0.25
                },
                {
                    id: 3,
                    svgMax: '<path d="M 183.51629 , 65.54549 c-14.29641,2.85928-24.60933-18.00996-39.84738-12.93061-3.21425,1.07142-4.48613,6.06947-4.48613,6.06947-3.366577-7.903851-11.924768-7.644494-14.25006-1.58334-5.934589,15.46922,14.693504,12.001305,34.105721,10.619565-18.688127,2.870791-39.221244-2.964172-34.105721,7.581247c4.250409,8.762025,14.910626,6.561661,18.73619,6.640263c13.74214.282352,25.87005-11.649515,39.3196-16.132705" transform="matrix( 1.143037 0 0 0.796075 -25.695148 126.593529 )" fill="#cf4d4d" stroke="#000" stroke-width=" 0.6 "/>',
                    svgMin: '<path d="M 183.51629 , 65.54549 c-14.29641,2.85928-24.60933-18.00996-39.84738-12.93061-3.21425,1.07142-4.48613,6.06947-4.48613,6.06947-3.366577-7.903851-11.924768-7.644494-14.25006-1.58334-5.934589,15.46922,14.693504,12.001305,34.105721,10.619565-18.688127,2.870791-39.221244-2.964172-34.105721,7.581247c4.250409,8.762025,14.910626,6.561661,18.73619,6.640263c13.74214.282352,25.87005-11.649515,39.3196-16.132705" transform="matrix( 0.336021 0 0 0.330123 92.621334 155.235679 )" fill="#cf4d4d" stroke="#000" stroke-width=" 0.6 "/>',
                    offsetRatioX: 0.5,
                    offsetRatioY: 0.4
                },
                {
                    id: 4,
                    svgMax: '<path d="M 161.453759 , 165.614568 c0-19.85974-41.939035-5.705542-24.653979,14.447822c10.649294,12.416454,27.408129-1.291661,24.653979-15.062391" transform="matrix( 1.689092 0 0 1.068753 -108.314648 9.076806 )" fill="#b6443d" stroke="#000" stroke-width=" 0.6 "/>',
                    svgMin: '<path d="M 161.453759 , 165.614568 c0-19.85974-41.939035-5.705542-24.653979,14.447822c10.649294,12.416454,27.408129-1.291661,24.653979-15.062391" transform="matrix( 0.420904 0 0 0.280908 78.278735 131.509543 )" fill="#b6443d" stroke="#000" stroke-width=" 0.6 "/>',
                    offsetRatioX: 0.5,
                    offsetRatioY: 0.6
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
                    offsetRatioX: 0.5,
                    offsetRatioY: 1
                },
                {
                    id: 2,
                    svgMax: '<path d="M 167.931261 , 128.619659 q0-.034088-17.931261-.034087c.687032,15.59524,14.712025,17.588241,17.931261.034087Z" transform="matrix( 1.423102 0 0 1.832612 -88.191546 -112.196781 )" fill="#d2dbf1" stroke="#000" stroke-width=" 0.6 "/>',
                    svgMin: '<path d="M 167.931261 , 128.619659 q0-.034088-17.931261-.034087c.687032,15.59524,14.712025,17.588241,17.931261.034087Z" transform="matrix( 0.770901 0 0 1 6.166877 0.142604 )" fill="#d2dbf1" stroke="#000" stroke-width=" 0.6 "/>',
                    offsetRatioX: 0.5,
                    offsetRatioY: 1
                },
            ]
        },
        {
            name: "pupil",
            children: [
                {
                    id: 1,
                    svgMax: '<path d="M 141.29348 , 137.24661 c-17.98032-1.556401-25.888859,25.247619-7.187341,22.944922c9.675278-1.191306,20.766115-19.435712,7.187341-22.944922" transform="matrix( 0.377843 0 0 0.387143 83.805781 75.49052 )" stroke="#000" stroke-width=" 0.6 "/>',
                    svgMin: '<path d="M 141.29348 , 137.24661 c-17.98032-1.556401-25.888859,25.247619-7.187341,22.944922c9.675278-1.191306,20.766115-19.435712,7.187341-22.944922" transform="matrix( 0.199806 0 0 0.204722 108.441118 102.85367 )" stroke="#000" stroke-width=" 0.6 "/>',
                    offsetRatioX: 1,
                    offsetRatioY: 1
                }
            ]
        },
    ]
    const [bodyPart, setBodyPart] = useState(0)
    const [range, setRange] = useState(50)
    const [offsetY, setOffsetY] = useState(0)
    const [offsetX, setOffsetX] = useState(0)
    const [eyeDistance, setDistance] = useState(25)
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
        let offsetRatioX = arrParts.find(item => item.name === name).children.find(item => item.id === avatar.find(item => item.name === name).id).offsetRatioX
        let offsetRatioY = arrParts.find(item => item.name === name).children.find(item => item.id === avatar.find(item => item.name === name).id).offsetRatioY
        for (let i = 0; i < resultArray.length; i++) {
            if(resultArray[i] === 'd="M' && currentOffsetX){
                resultArray[i+1] = Number(resultArray[i+1]) + Number(currentOffsetX)*offsetRatioX
            }
            if(resultArray[i] === ',' && currentOffsetY){
                resultArray[i+1] = Number(resultArray[i+1]) + Number(currentOffsetY)*offsetRatioY
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
                resultArray[2] = Number(resultArray[2]) + Number(avatar.find(item => item.name === 'pupil').distance * 4)
            }
        }
        return resultArray.join(' ')
    }

    const changeAvatar = (newValue, nameValue) => {
        avatar.find(item => item.name === arrParts[bodyPart].name)[nameValue] = newValue
        setAvatar(avatar)
        drawAvatar()
    }

    const show = () => {
        for (let itemAvatar of avatar){
            let maxRabge = arrParts.find(item => item.name === itemAvatar.name).children.length
            let minRabge = 1

            itemAvatar.id = Math.floor(Math.random() * (maxRabge - minRabge + 1)) + minRabge
        }
        setAvatar(avatar)
        drawAvatar()
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
                                    setOffsetY(avatar.find(item => item.name === part.name).offsetY)
                                    setOffsetX(avatar.find(item => item.name === part.name).offsetX)
                                    setDistance(avatar.find(item => item.name === part.name).distance)
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
                                   changeAvatar(event.target.value,'range')
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
                                           changeAvatar(event.target.value,'offsetX')
                                       }
                                   }
                            >
                            </input>
                            {offsetY}
                            <input type="range" min="-20" max="20" value={offsetY}
                                   onChange={
                                       (event) => {
                                           setOffsetY(event.target.value)
                                           changeAvatar(event.target.value,'offsetY')
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
                            <input type="range" min="17" max="40" value={eyeDistance}
                                   onChange={
                                       (event) => {
                                           setDistance(event.target.value)
                                           changeAvatar(event.target.value,'distance')
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
                            {'strokeWidth:'+ strokeWidth}
                            <input type="range" min="0" max="6" value={strokeWidth}
                                   onChange={
                                       (event) => {
                                           setStrokeWidth(event.target.value)
                                           changeAvatar(event.target.value,'strokeWidth')
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