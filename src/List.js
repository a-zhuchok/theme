import {useState} from 'react';
const List = ({arr})=>{
   
    const [isShowPrefix, setIsShowPrefix] = useState(false);

    const handlerButtonClick = () => {
        setIsShowPrefix(!isShowPrefix);
    }

    return (<div>
        <ul>{arr.map((value, index)=><li key={index}>{`${isShowPrefix ? '!!!': ""}${value}`}</li>)}</ul>
        <button onClick={handlerButtonClick}>Add !!!</button>
        </div>
    )
}
export default List