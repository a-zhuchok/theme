import { useState } from 'react';
import styled from 'styled-components';


const Lists = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
`
const ButtonAdd = styled.div`
padding:5px;
background-color: ${(props)=>props.theme.buttom};
cursor: pointer;
`
const List = ({arr}) => {
    const [isShowPrefix, setIsShowPrefix] = useState(false);
    const handlerButtonClick = () => {
        setIsShowPrefix(!isShowPrefix);
    }
    return (
        
    <Lists>
        <ul>{arr.map((value, index) => <li key={index}>{`${isShowPrefix ? '!!!' : ""}${value}`}</li>)}</ul>
        <button onClick={handlerButtonClick}><ButtonAdd>Add !!!</ButtonAdd></button>
    </Lists>
    
    )
}
export default List