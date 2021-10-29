import Styled from 'vue3-styled-components';
const props = [];
export const MainWrapper = Styled('div', props)`
    max-width: 1200px;
    min-width: 320px;
    width: 100%;
    margin: auto;
    padding: 15px;
    font-family: 'Roboto', sans-serif;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2 {
            font-size: 32px;
            font-weight: 700;
            line-height: 37px;
            margin: 0;
            padding: 0;
            
        }

        button {
            width: 161px;
            height: 50px;
            border: none;
            background-color: ${({ theme }) => theme.primary};
            color: ${({ theme }) => theme.secondary};
            border-radius: 5px;
            cursor: pointer;
        }
    }
    .wide-page {
        background-color: ${({ theme }) => theme.secondary};        
        width: 100%;
        border: 1px solid #DDDDDD;
        box-shadow: 0px 0px 4px 0px #00000010;
        border-radius: 5px;
        margin-top: 36px;
        position: relative;
                                
        table {
            min-width: 550px;        
            width: 100%;
            border-spacing: 0px;
            border-radius: 0 0 5px 5px;              
            
            caption {
                text-align: right;
                padding: 25px;
                color: #000000;
                font-weight: 700;
                font-size: 14px;

                .counter {
                    position: absolute;
                    left: 20px;
                }
                
            }
            thead {

                tr th {
                    text-align: left;
                    border: 1px solid #DDDDDD;
                    border-left: none;
                    border-right: none; 
                    border-bottom: none;
                    height: 48px;
                    padding: 5px;
                    padding-left: 20px;
                }
                tr th:first-child {                    
                    border-right: 1px solid #DDDDDD;                    
                }              
            }
            tbody {
                
                tr td {
                    text-align: left;
                    border: 1px solid #DDDDDD;
                    border-left: none;
                    border-right: none;
                    border-bottom: none;
                    height: 48px;
                    padding: 5px;
                    position: relative;
                    padding-left: 20px;
                    .badge {
                        background: ${({ theme }) => theme.badgeBg};                        
                        color: ${({ theme }) => theme.textLight};                        
                        padding: 6px 10px;
                        margin: 0 5px;
                        border-radius: 15px;
                        font-size: 13px;
                    }
                    
                    
                } 
                tr td:first-child {                    
                    border-right: 1px solid #DDDDDD; 
                    padding-left: 15px;             
                }
                
                tr {
                    &:hover, &.active {
                        background-color: ${({ theme }) => theme.trHover};
                    }
                }

                .smooth-dnd-ghost.vertical {
                    background: #efefef50;
                    vertical-align: top;
                    height: auto !important;
                    padding: 16px !important;
                    td {                        
                        border: none !important;
                        height: 100%;                       
                        padding-top: 0px;
                        padding-bottom: 0px;
                        
                    }

                    td:first-child {
                        width: 50%;
                    }
                }
            }
        }
        
        table.empty caption {
            text-align : center;
        }
    }
    @media only screen and (max-width: 560px) {
        .wide-page {
            overflow-x: scroll;
        }
    }

    @media only screen and (max-width: 560px) {
        .wide-page {
            overflow-x: scroll;
        }

        header {
            h2 {
                font-size: 20px;
            }

            button {
                width: 100px;
                height: 40px;
            }
        }
    }
`;
