import styled from "styled-components"
const border=(Comp)=>{
    const BorderedComp=styled(Comp) `
    border-width:${props=>props.width||"1px"};
    border-color:${props=>props.color||"#ccc"};
    border-style:${props=>props.style||"solid"};
    border-radius:${props=>props.radius||0};
 
    `
    return BorderedComp
}

export default border