import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import LoginAvatarSvg from '../assets/login_page_avatar.svg';
const LoginAvatar = styled(LoginAvatarSvg)`
  position: absolute;
  top: -50px;
  height: 100px;
  left: calc(50% - 50px);
`;
const LoginForm = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  min-height: 100%;
  margin: auto;
  float: center;
`;
const FormContent = styled.div`
  position: relative;
  border-radius: 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  margin: 0px;
  text-align: center;

  &,
  &::before,
  &::after {
    box-shadow: 0px 2px 12px 1px rgba(0, 0, 0, 0.1);
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: #eee;
  }

  &::before {
    left: 0px;
    top: 5px;
    z-index: -1;
  }

  &::after {
    left: 0px;
    top: 10px;
    z-index: -2;
  }
  h2 {
    margin-top: 20px;
  }
`;
const Form = styled.form`
  input {
    display: inline-block;
    background-color: #f2f2f2;
    border: none;
    padding: 20px 32px;
    text-align: left;
    text-decoration: none;
    font-size: 16px;
    margin: 10px;
    border-radius: 10px;
    width: 80%;
    @media screen and (max-width: 400px) {
      width: 90%;
    }
  }
  input[type='button'],
  input[type='submit'],
  input[type='reset'] {
    background-color: #183283;
    color: white;
    text-align: center;
    text-transform: uppercase;
    font-size: 15px;
    padding: 12px 32px;
    margin: 20px;
  }
`;
export default function LoginPage() {
  return (
    <Fragment>
      <LoginForm>
        <FormContent className="formContent">
          <h2> Log In </h2>

          <LoginAvatar />
          <Form>
            <span>
              <input name="username" placeholder="Employee ID" />
            </span>
            <input type="password" placeholder="password"></input>
            <input type="submit" value="Log In" />
            <Link href="/dashboard">
              <input value="Go to dashboard" />
            </Link>
          </Form>

          <a href="#">Forgot Password?</a>
        </FormContent>
      </LoginForm>
    </Fragment>
  );
}
