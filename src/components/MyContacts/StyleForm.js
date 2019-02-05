import styled from 'styled-components'

export default styled.section`

  & > div {
    text-align: center;
  }

  form {
    width: 340px;
    margin-top: 20px;
    border: 3px solid #fff;
    padding: 20px;
    border-radius: 20px;
    position: relative;
    background-color: #000;

    @media (max-width: 1199px) {
      margin: 0 auto;
    }

    @media (max-width: 320px) {
    width: 290px;
  }

    & > div {
      margin: 5px;
    }

    label {
      display: block;
      color: #fff;
      & > input {
        margin-right: 3px;
      }
    }
  }

  input {
    display: block;
    border: 1px solid #000;
    border-radius: 10px;
    padding-left: 5px;
    width: 100%;
  }

  textarea {
    display: block;
    border: 1px solid #000;
    border-radius: 10px;
    padding-left: 5px;
    resize: none;
    width: 100%;
    height: 100px;
  }

  .buttons {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin-top: 15px;
    
  }

  .button__form {
    background-color: #fff;
    color: #000;
    padding: 4px 20px;
    border-radius: 20px;
    border: 2px solid #fff;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 14px;
  }

  .button__form:hover {
    background-color: #000;
    color: #fff;
    border: 2px solid #fff;
  }

  .span__error {
    display: flex;
    justify-content: center;
    color: red;
    font-weight: bold;
    margin-top: 5px;
  }
`
