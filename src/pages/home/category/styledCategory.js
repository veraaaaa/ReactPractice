import styled from "styled-components"

export const HeaderWrap=styled.div`
    height:.44rem;
    background:#ee742f;
  display:flex;
  align-items:center;
  justify-content:center;
  ul{
      width:1.4rem;
      height:.3rem;
      display:flex;
      position:relative;
      border:1px solid #fff;
      //  3 修改添加滑块
           z-index:0;
           border-radius:.15rem;
      li{
          flex:1;
          line-height:.3rem;
          text-align:center;
          color:#fff;
          
          &:last-child{
            position:absolute;
            //  1 修改添加滑块
            width:50%;
            height:.3rem;
            background:#fff;
            z-index:-1;
            // 2添加远郊
            border-radius:.15rem;
            transform:translate(0,0);
            transition:all 0.4s ease-in;
            &.right{
                transform:translate(100%,0);
            }
          }
          &.active{
            color:#ee742f;
          }
      }
  }
`



export const CateWrap=styled.div`
height:100%;
overflow:hidden;
`