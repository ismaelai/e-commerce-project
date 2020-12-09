import React, { useState } from 'react';
import { auth, googleAuthProvider } from '../../firebase.js';
import { toast } from 'react-toastify';
import { Button } from 'antd';
import { MailOutlined, GoogleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
