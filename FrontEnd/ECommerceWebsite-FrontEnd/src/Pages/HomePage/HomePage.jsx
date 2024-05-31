import React from "react";
import {WrapperTyperProduct} from './style'
import TypeProduct from "../../Components/TypeProducts/TypeProduct";
import SlideComponent from "../../Components/SliderComponent/SliderComponent";
import { Slider1 } from '../../Assets/images/Slider1';
import { Slider2  } from '../../Assets/images/Slider2';
import { Slider3  } from '../../Assets/images/Slider3';


const HomePage = () => {
    const arr=['TV', 'Tủ lạnh', 'Laptop']
    return(
        <div style={{padding: '0 120px'}}>
            <WrapperTyperProduct>
            {arr.map((item)=>{
            return(
                <TypeProduct name={item} key={item}/>
            )
        })}
            </WrapperTyperProduct>
            <SlideComponent/>
            HomePage
        </div>
    )
}

export default HomePage