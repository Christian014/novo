import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    display:flex;
    align-items: center;
    justfy-content:center;
    padding: 0;
    margin: 0;
    box-sizing: border-box;

     div {
            
            height: 510px;
            padding:2px;
            margin: 0 auto;
            display:flex;
            justify-content:space-bettewn;
            background-color: white;
            border-radius: 30px;

            > h1{
                color: #1A1832;
                font-size: 40px;
                margin-top:50px;
                margin-left: -35px;
                padding-bottom:10px;
            }

            > span{
                font-size:12px;
                margin-bottom:25px;
                margin-left: -15px;
            }

            li{
                text-align: center;
                display: flex;
                margin-left: -15px;
                padding:5px;
                font-size:12px;
                
            }

            > ul {
                text-decoration:none;
                list-style:none;
                margin-bottom:25px;

                 img{
                    width:15px;
                    margin-right: 10px;
                }
            }

            > div:first-child{
                height:500px;
                display:flex;
                flex-direction: column;
                align-items:center;

                > .informations{
                    margin:15px;

                    > label{
                        font-size:10px;
                        font-weight:bold;
                        margin-left:-200px;
                    }

                    > input{
                        width:280px;
                        border-radius:6px;
                        border: 1px solid #EDEDED;
                        padding-left:15px;
                        height:40px;
                    }
                }
            }

             .div-image{
                height:500px;

                display: flex;
                justify-content: center;

                > img{
                    margin: 10px;
                }
            }
        };





`;