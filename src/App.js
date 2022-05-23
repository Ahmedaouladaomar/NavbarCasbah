import React from 'react';
import './App.css';

import { AiOutlineStar } from 'react-icons/ai'
import { MdNotificationsNone } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { BiSearchAlt2 } from 'react-icons/bi'

import Navbar from './components/Navbar'
import Logo from './components/Logo'
import Menu from './components/Menu'
import Icons from './components/Icons'
import SearchBar from './components/SearchBar';



function App(){

  return <div className='main'>
                <Navbar>
                  <Logo/>
                  <Menu>
                    <span style={{ marginLeft: '120px' }}>Home</span>
                    <span style={{ marginLeft: '10px' }}>Shop</span>
                    <span style={{ marginLeft: '10px' }}>Contact</span>
                    <span style={{ marginLeft: '10px' }}>About</span>
                  </Menu>
                  <SearchBar>
                    <h5 style={{position: 'absolute' ,left: '10px'}}>Search</h5>
                    <BiSearchAlt2 style={{position: 'absolute' ,right: '5%'}} />
                  </SearchBar>
                  <Icons>
                    <AiOutlineStar style={{marginLeft: '10px'}} size={25}/>
                    <MdNotificationsNone style={{marginLeft: '10px'}} size={25}/>
                    <CgProfile style={{marginLeft: '10px'}} size={40}/>
                  </Icons>
                </Navbar>
          </div>        
      }



export default App;