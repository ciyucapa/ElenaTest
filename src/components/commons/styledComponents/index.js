import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-cirection: column;
    justify-content: center;
    align-items: center;
`;

export const Box = styled.div`
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const InputBox = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const ButtonBox = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ListBox = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonListBox = styled.div`
    margin: 10px;
`;

export const CreateBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
`;

export const ButtonField = styled.button`
    padding: 5px 15px;
    font-size: 14px;
    font-weight: 600;
    border: 1px solid gray;
    border-radius: 25px;
    margin: 0px 10px;
`;