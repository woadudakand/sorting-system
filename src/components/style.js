import Styled from 'vue3-styled-components';

export const Checkbox = Styled('label')`
    &.container {
        position: relative;        
        cursor: pointer;
        font-size: 20px;
    }

    &.container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .checkmark {
        position: absolute;
        top: 50%;
        left: 5px;
        height: 20px;
        width: 20px;
        background-color: ${({ theme }) => theme.secondary};
        border-radius: 5px;
        border: 1px solid #DDDDDD;
        margin-top: -10px;
    }

    &.container input:checked ~ .checkmark {
        background-color: ${({ theme }) => theme.primary};
        border: none;
    }

    .checkmark:after {
        content: '';
        position: absolute;
        display: none;
    }

    &.container input:checked ~ .checkmark:after {
        display: block;
    }

    &.container .checkmark:after {
        left: 8px;
        top: 4px;
        width: 5px;
        height: 10px;
        border: 0px solid #ffffff;
        border-width: 0 3px 3px 0;    
        transform: rotate(45deg);
    }
`;

export const Modal = Styled('div')`
    max-width: 437px;
    width: 100%;
    height: 282px;
    background: ${({ theme }) => theme.secondary};
    border-radius: 5px;
    box-shadow: 0px 0px 4px #00000010;
    position: relative;

    header {
        padding: 20px;
        border-bottom: 1px solid ${({ theme }) => theme.hr};

        h4 {
            margin: 0;
        }
        button {
            width: auto;
            height: auto;
            background-color: transparent;
            color: ${({ theme }) => theme.text};
            cursor: pointer;
        }
    }

    section {
        text-align: left;
        padding: 20px;

        p, .error {
            font-size: 13px;
            font-weight: 400;
            line-height: 18px;
            color: ${({ theme }) => theme.textLight};
            margin: 0;
            margin-bottom: 10px;
        }
        
        .error {            
            margin-top: 10px;
            color: ${({ theme }) => theme.error};
        }

        input {
            width: 100%;
            padding: 12px 8px;
            border: 1px solid ${({ theme }) => theme.hr};
            border-radius: 5px;

            &:focus-visible {
                outline: none;
            }
        }
    }
    
    footer {
        text-align: right;
        padding: 20px;
        border-top: 1px solid ${({ theme }) => theme.hr};
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
    }
`;

export const Button = Styled('button', ['styleType'])`
    border: none;
    padding: 12px 15px;
    background: ${({ theme, styleType }) => theme[styleType]};
    color: ${({ theme, styleType }) => (styleType !== 'badgeBg' ? theme.secondary : theme.textLight)};
    border-radius: 5px;
    margin-left: 10px;
    cursor: pointer;
`;
