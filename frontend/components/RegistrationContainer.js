import React, { Component } from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import NProgress from 'nprogress';

// import Form from './styles/Form';
// import Error from './ErrorMessage';
// import { CURRENT_USER_QUERY } from './User';

const Container = styled.div`
  position: relative;
  max-width: 1000px;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Paper = styled.div`
  /* margin: 20px; */
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  ${({ heading }) =>
    heading &&
    `margin-bottom: 20px;
    padding: 0px;
        `};
  @media only screen and (min-width: 600px) {
    padding: 20px 40px;
    /* min-width: 400px; */
    /* margin: auto; */
  }
  @media only screen and (min-width: 600px) and (max-width: 900px) {
    ${({ wide }) =>
      wide &&
      ` width : 500px;
        margin: auto;
    margin-bottom: 20px;
        
        `};
  }
`;

const SignUpForm = styled.div`
  padding: 20px;
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
`;
const Form = styled.form`
  input,
  textarea,
  button[type='submit'] {
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
  input[type='reset'],
  button[type='submit'] {
    background-color: #183283;
    color: white;
    text-align: center;
    text-transform: uppercase;
    font-size: 15px;
    padding: 12px 32px;
    margin: 20px;
  }
`;
const Radio = styled.div`
  display: block;
  /* left: -30px; */
  margin: 0;
  padding: 0;
  .formRadio {
    display: inline-block;
    /* border-radius: 999px; */
    position: relative;
    left: -10%;
  }
  .formRadio__input {
    opacity: 0;
    /* position: absolute; */
  }
  .formRadio__label {
    /* border-radius: 9999px; */
    padding: 3px 15px 3px 40px;
    left: 25%;
    bottom: 34px;
    cursor: pointer;
    position: relative;
    transition: all 0.5s;
  }
  .formRadio__label::before,
  .formRadio__label::after {
    content: '';
    border-radius: 9999px;
    width: 16px;
    height: 16px;
    margin: 3px 0;
    position: absolute;
    z-index: 1;
  }
  .formRadio__label::before {
    background-color: #dcdcdc;
    border: 2px solid #dcdcdc;
    top: 4px;
    left: 10px;
    transition: all 0.5s;
  }
  .formRadio__label::after {
    background-color: #f2f2f2;
    top: 6px;
    left: 12px;
    transition: all 0.15s;
    transition-timing-function: ease-out;
  }
  .formRadio__label:hover {
    background-color: rgba(114, 86, 248, 0.1);
  }
  .formRadio__label:hover::before {
    border: 2px solid ${({ theme }) => theme.blue};
  }
  .formRadio__input:checked ~ .formRadio__label::before {
    background-color: ${({ theme }) => theme.blue};
    border: 2px solid ${({ theme }) => theme.blue};
  }
  .formRadio__input:checked ~ .formRadio__label::after {
    width: 8px;
    height: 8px;
    top: 10px;
    left: 16px;
  }
`;

const SIGNUP_MUTATION = gql`
  mutation createUser(
    $eid: String!
    $firstName: String!
    $lastName: String!
    $designation: String!
    $email: String!
    $password: String!
    $phone: String!
    $addrs: String!
    $type: String!
  ) {
    createUser(
      userInput: {
        eid: $eid
        firstName: $firstName
        lastName: $lastName
        designation: $designation
        email: $email
        password: $password
        phone: $phone
        addrs: $addrs
        type: $type
      }
    ) {
      _id
      email
      firstName
      lastName
    }
  }
`;

class RegistrationContainer extends Component {
  state = {
    eid: '',
    firstName: '',
    lastName: '',
    designation: '',
    email: '',
    password: '',
    phone: '',
    addrs: '',
    type: 'employee',
  };
  saveToState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Mutation mutation={SIGNUP_MUTATION} variables={this.state}>
        {(createUser, { error, loading }) => (
          <Container>
            {/* {!loading && NProgress.done} */}
            <SignUpForm>
              <FormContent className="formContent">
                <h2> Employee Registration </h2>
                {/* {error && <p>error found ${error}</p>} */}
                {/* <LoginAvatar /> */}
                <Form
                  method="post"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const res = await createUser();
                    console.log(res);
                    this.setState({
                      eid: '',
                      firstName: '',
                      lastName: '',
                      designation: '',
                      email: '',
                      password: '',
                      phone: '',
                      addrs: '',
                      type: 'employee',
                    });
                  }}
                >
                  <input value={this.state.eid} onChange={this.saveToState} type="text" name="eid" placeholder="Employee ID : 11907509" />
                  <input value={this.state.firstName} onChange={this.saveToState} type="text" placeholder="First Name" name="firstName" />
                  <input value={this.state.lastName} onChange={this.saveToState} type="text" placeholder="Last Name" name="lastName" />
                  <input
                    value={this.state.designation}
                    onChange={this.saveToState}
                    type="text"
                    placeholder="Designation"
                    name="designation"
                  />
                  <input value={this.state.email} onChange={this.saveToState} type="email" placeholder="Email" name="email" />
                  <input
                    value={this.state.password}
                    onChange={this.saveToState}
                    type="password"
                    placeholder="Password"
                    name="password"
                  ></input>
                  <input value={this.state.phone} onChange={this.saveToState} type="tel" placeholder="Phone" name="phone"></input>
                  <textarea value={this.state.addrs} onChange={this.saveToState} type="address" placeholder="Address" name="addrs" />
                  <Radio>
                    <h4>Type:</h4>
                    <div className="formRadio">
                      <input
                        value={this.state.type}
                        onChange={this.saveToState}
                        type="radio"
                        name="type"
                        id="employee"
                        className="formRadio__input"
                        value="employee"
                        checked
                      />
                      <label htmlFor="employee" className="formRadio__label">
                        Employee
                      </label>
                    </div>
                    <div className="formRadio">
                      <input
                        value={this.state.type}
                        onChange={this.saveToState}
                        type="radio"
                        name="type"
                        id="hr"
                        className="formRadio__input"
                        value="hr"
                      />
                      <label htmlFor="hr" className="formRadio__label">
                        HR
                      </label>
                    </div>
                  </Radio>
                  <input
                    onClick={async (e) => {
                      e.preventDefault();
                      const res = await createUser();
                      console.log(res);
                    }}
                    type="submit"
                  />
                </Form>
              </FormContent>
            </SignUpForm>
          </Container>
        )}
      </Mutation>
    );
  }
}

export default RegistrationContainer;
// export { SIGNUP_MUTATION };
