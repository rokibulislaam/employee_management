import React from 'react';
import styled from 'styled-components';
import Select from '../components/Select';
const Container = styled.div`
  position: relative;
  max-width: 900px;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 10px;
`;
const Paper = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  h3 {
    margin-bottom: 15px;
  }
  h4 {
    margin-left: 20px;
    padding-top: 10px;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 20px;
  width: 100%;
`;
const Form = styled.form`
  z-index: -100;
  padding: 0 20px;
  input,
  textarea {
    display: inline-block;
    background-color: #f2f2f2;
    border: none;
    padding: 20px 32px;
    text-align: left;
    text-decoration: none;
    font-size: 16px;
    border-radius: 10px;
    width: 100%;
    margin: 10px 0;

    /* @media screen and (max-width: 400px) {
      width: 90%;
    } */
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
  }
  textarea {
    height: 200px;
  }
  .selectBottomBorder {
    position: relative;
    display: block;
    width: 90%;
    margin: 20px 5px;
    left: 5.1%;
    height: 1.5px;
    background-color: rgb(140, 140, 140);
    border-radius: 50%;
  }
`;
export default function TasksContaier() {
  return (
    <Container>
      <Grid>
        <Paper>
          <h3>Assign Tasks to Employees</h3>
          <Form>
            <Select />
            <div className="selectBottomBorder"></div>
            <h4>Enter the Task to Assign</h4>
            <span>
              <input type="text" name="task" placeholder="Enter the Task to Assign" />
            </span>
            <input type="submit" value="Submit" />
          </Form>
        </Paper>
        <Paper>
          <h3>Add an Update to Billboard</h3>
          <Form>
            <span>
              <textarea type="text" name="message" placeholder="Enter The Message" />
            </span>
            <input type="submit" value="Submit" />
          </Form>
        </Paper>
      </Grid>
    </Container>
  );
}
