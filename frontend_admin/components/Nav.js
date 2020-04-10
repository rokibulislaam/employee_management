import React, { Fragment, useState, useCallback } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FaHome, FaRegCalendarCheck, FaSearch } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { GoTasklist } from 'react-icons/go';
const Wrapper = styled.div`
  z-index: 99;
  position: absolute;
`;
const TopNavbar = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  position: fixed;
  .hamburger {
    width: 70px;
    height: 60px;
    background: #183283;
    padding: 15px 12px;
    cursor: pointer;
    div {
      width: 35px;
      height: 4px;
      background: #92a6e2;
      margin: 5px 0;
      border-radius: 5px;
    }
  }
  .top_menu {
    width: calc(100% - 70px);
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    .logo {
      color: #183283;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 3px;
    }
  }
`;
const SideBar = styled.div`
  font-size: 18px;
  position: fixed;
  top: 60px;
  background: #183283;
  /* display: none; */
  width: ${({ collapse }) => (collapse ? '70px' : '220px')};
  @media only screen and (max-width: 600px) {
    display: ${({ collapse }) => (collapse ? 'none' : 'block')};
  }
  transition: all 0.3s ease;
  height: 100%;
  ul {
    list-style: none;
    text-decoration: none;
  }
  ul li a {
    display: block;
    padding: 20px;
    color: #fff;
    position: relative;
    margin-bottom: 1px;
    white-space: nowrap;
    ${({ collapse }) => {
      collapse && 'text-align: center';
    }}/* text-align: center; */
  }
  ul li a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: #92a6e2;
    display: none;
  }
  .icon {
    margin-right: 10px;
    display: inline-block;
    ${({ collapse }) => collapse && 'margin : 0'}
  }
  .title {
    display: ${({ collapse }) => (collapse ? 'none' : 'inline-block')};
  }
  ul li a:hover,
  ul li a.active {
    background: #4360b5;
    color: #fff;
  }
  ul li a:hover::before,
  ul li a.active:before {
    display: block;
  }
`;

export default function Nav({ page }) {
  const [collapse, setCollapse] = useState(true);
  const toggleSidebar = useCallback(() => setCollapse((value) => !value));
  const toggleSidebarWithViewPort = useCallback(() => Number(window.innerWidth) < 600 && setCollapse((value) => !value));

  return (
    <Wrapper>
      <TopNavbar className="top_navbar">
        <div className="hamburger" onClick={toggleSidebar}>
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        <div className="top_menu">
          <div className="logo">{page}</div>
        </div>
      </TopNavbar>

      <SideBar collapse={collapse} className="sidebar">
        <ul>
          <li>
            <Link href="/dashboard">
              <a onClick={toggleSidebarWithViewPort}>
                <span className="icon">
                  <FaHome />
                </span>
                <span className="title">Dashboard</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/attendence">
              <a onClick={toggleSidebarWithViewPort}>
                <span className="icon">
                  <FaRegCalendarCheck />
                </span>
                <span className="title">Attendence</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/employeeSearch">
              <a onClick={toggleSidebarWithViewPort}>
                <span className="icon">
                  <FaSearch />
                </span>
                <span className="title">Employee Search</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/registeremployee">
              <a onClick={toggleSidebarWithViewPort}>
                <span className="icon">
                  <FiLogIn />
                </span>
                <span className="title">Register Employee</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/assign_tasks">
              <a onClick={toggleSidebarWithViewPort}>
                <span className="icon">
                  <GoTasklist />
                </span>
                <span className="title">Tasks and Updates</span>
              </a>
            </Link>
          </li>
        </ul>
      </SideBar>
    </Wrapper>
  );
}
