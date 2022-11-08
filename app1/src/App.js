import logo from './imgs/2.png'
import React from 'react'
import { StyleSheet, Text, View, Image} from 'React-Native';
import ReactDOM from 'react-dom';
import {QRCodeSVG} from 'qrcode.react';

export default function App()
{

   
   
ReactDOM.render(<QRCode value="hey" />, document.getElementById("Container"));
} 