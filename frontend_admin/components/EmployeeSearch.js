import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { MdEmail, MdPhone } from 'react-icons/md';
import { AiOutlineNumber } from 'react-icons/ai';
import EmployeeAvatar from '../assets/employee_avatar.svg';

const Container = styled.div`
  position: relative;
  max-width: 1000px;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 10px;
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
const Grid = styled.div`
  display: grid;
  grid-template-rows: 2;
  grid-gap: 20px;
  /* width: 100%; */
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    /* grid-template-areas: 'card'; */
  }
`;
const SearchBox = styled.div`
  .search__container {
    padding: 20px;
  }

  .search__input {
    width: 100%;
    padding: 12px 24px;

    background-color: transparent;
    transition: transform 250ms ease-in-out;
    font-size: 14px;
    line-height: 18px;

    color: #575756;
    background-color: transparent;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 18px 18px;
    background-position: 95% center;
    border-radius: 50px;
    border: 1px solid #575756;
    transition: all 250ms ease-in-out;
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }

  .search__input::placeholder {
    color: rgba(87, 87, 86, 0.8);
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  .search__input:hover,
  .search__input:focus {
    padding: 12px 0;
    outline: 0;
    border: 1px solid transparent;
    border-bottom: 1px solid #575756;
    border-radius: 0;
    background-position: 100% center;
  }
`;

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;

  .employeeAvatar {
    margin-top: 10px;
    align-items: center;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
    border: 3px solid ${({ theme }) => theme.blue};
  }
  .cardContents span {
    display: block;
    line-height: 1.5em;
  }
  .icon {
    position: relative;
    top: 3px;
    left: 0;
    margin-right: 5px;
  }
  .cardBorder {
    width: 90%;
    margin-top: 10px;
    height: 1.5px;
    flex-grow: 1;
    background-color: rgb(140, 140, 140);
    border-radius: 50%;
  }
  .cardFooter {
    margin: auto;
    /* margin-left: 30px; */
    font-size: 1.8rem;
  }
`;
export default class EmployeeSearchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      users: [],
    };
  }
  componentDidMount() {
    this.fetchBookings();
  }

  fetchBookings = () => {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
       query { users {
          _id
          eid
          email
          password
          firstName
          lastName
          phone
          addrs
          designation
          type
        } } 
        `,
    };

    fetch('http://localhost:8000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        return res.json();
      })
      .then((resData) => {
        this.setState({ users: resData.data.users, isLoading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  render() {
    return (
      <Container>
        <Paper heading wide card>
          <SearchBox>
            <div className="search__container">
              <input className="search__input" type="text" placeholder="Search an Employee" />
            </div>
          </SearchBox>
        </Paper>
        <Grid>
          {
            // console.log(this.state.users)
            this.state.users.map((user) => (
              <Fragment key={user._id}>
                <Paper wide>
                  <Card>
                    <EmployeeAvatar className="employeeAvatar" />
                    <div className="cardContents">
                      <h2 className="employeeName">
                        {user.firstName} {user.lastName}
                      </h2>
                      <div>
                        <span>{user.designation}</span>
                        <span>
                          <MdPhone className="icon" />
                          <a href={`tel:${user.phone}`}> user.phone</a>
                        </span>
                        <span>
                          <MdEmail className="icon" />
                          <a href={`mailto:${user.email}`}>{user.email}</a>
                        </span>
                      </div>
                    </div>
                    <div className="cardBorder"></div>
                    <div className="cardFooter">
                      <AiOutlineNumber className="icon" />
                      <span className="spanLine">Employee ID: {user.eid}</span>
                    </div>
                  </Card>
                </Paper>
              </Fragment>
            ))
          }
        </Grid>
      </Container>
    );
  }
}
