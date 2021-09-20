import React, { Component } from "react";
import './../../css/simulatedProducts.css';

var visiblityFalse = { display: "none" };
var visiblityTrue = { height: "15px", width:"35px", background:"rgb(180, 180, 180,1)" , border: '1px solid black', borderRadius: '3px'};

// var triBarRed = { background: "linear-gradient(to right, red, blue, yellow)" };
// SINGLE COLOR STYLES
var barRed100 = { height: "15px", width:"35px" , border: '1px solid black', borderRadius: '3px', background: "rgb(255, 0, 0,1)"};
var barBlue100 = {height: "15px", width:"35px" , border: '1px solid black', borderRadius: '3px',  background: "rgb(0, 0, 255,1)"};
var barAmber100 = { height: "15px", width:"35px" , border: '1px solid black', borderRadius: '3px', background: "rgb(255, 255, 0,1)"};
var barWhite100 = {height: "15px", width:"35px" , border: '1px solid black', borderRadius: '3px',  background: "rgb(255, 255, 255,1)"};

var barRed50 = { height: "15px", width:"35px" , border: '1px solid black', borderRadius: '3px', background: "rgb(255, 0, 0)", opacity: "0.65" };
var barBlue50 = {height: "15px", width:"35px" , border: '1px solid black', borderRadius: '3px',  background: "rgb(0, 0, 255)", opacity: "0.65" };
var barAmber50 = { height: "15px", width:"35px" , border: '1px solid black', borderRadius: '3px', background: "rgb(255, 255, 0)", opacity: "0.65" };
var barWhite50 = {height: "15px", width:"35px" , border: '1px solid black', borderRadius: '3px',  background: "rgb(255, 255, 255)", opacity: "0.65" };

var barRed10 = { height: "15px", width:"35px" , border: '1px solid black', borderRadius: '3px', background: "rgb(255, 0, 0)", opacity: "0.3" };
var barBlue10 = {height: "15px", width:"35px" , border: '1px solid black', borderRadius: '3px',  background: "rgb(0, 0, 255)", opacity: "0.3" };
var barAmber10 = { height: "15px", width:"35px" , border: '1px solid black', borderRadius: '3px', background: "rgb(255, 255, 0)", opacity: "0.3" };
var barWhite10 = {height: "15px", width:"35px" , border: '1px solid black', borderRadius: '3px',  background: "rgb(255, 255, 255)", opacity: "0.3" };

var tempBuffer = 0;

export class LightStickArrow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            frontStyles : [visiblityTrue, visiblityTrue, visiblityTrue, visiblityTrue, visiblityTrue, visiblityTrue, visiblityTrue,visiblityTrue, visiblityTrue, visiblityTrue]
        }
    }

    static getDerivedStateFromProps(props, current_state) {
        var startOfArrow = 103;
        tempBuffer = JSON.parse(props.frameBufferProps);
        //console.log(tempBuffer);
        for(var i = startOfArrow; i<10+startOfArrow; i++)
        {
            //console.log(tempBuffer[i]);

            if((tempBuffer[i]&0x03) === 0x03)
            {
                //console.log("Blue");
                current_state.frontStyles[i-startOfArrow] = barBlue100;
            }
            else if((tempBuffer[i]&0x03) === 0x02)
            {
                //console.log("Blue 50");
                current_state.frontStyles[i-startOfArrow] = barBlue50;
            }
            else if((tempBuffer[i]&0x03) === 0x01)
            {
                //console.log("Blue 10");
                current_state.frontStyles[i-startOfArrow] = barBlue10;
            }
            else if((tempBuffer[i]&0x0C) === 0x0C)
            {
                //console.log("Blue");
                current_state.frontStyles[i-startOfArrow] = barRed100;
            }
            else if((tempBuffer[i]&0x0C) === 0x08)
            {
                //console.log("Blue");
                current_state.frontStyles[i-startOfArrow] = barRed50;
            }
            else if((tempBuffer[i]&0x0C) === 0x04)
            {
                //console.log("Blue");
                current_state.frontStyles[i-startOfArrow] = barRed10;
            }
            else if((tempBuffer[i]&0x30) === 0x30)
            {
                current_state.frontStyles[i-startOfArrow] = barAmber100;
            }
            else if((tempBuffer[i]&0x30) === 0x20)
            {
                current_state.frontStyles[i-startOfArrow] = barAmber50;
            }
            else if((tempBuffer[i]&0x30) === 0x10)
            {
                current_state.frontStyles[i-startOfArrow] = barAmber10;
            }
            else if((tempBuffer[i]&0xC0) === 0xC0)
            {
                current_state.frontStyles[i-startOfArrow] = barWhite100;
            }
            else if((tempBuffer[i]&0xC0) === 0x80)
            {
                current_state.frontStyles[i-startOfArrow] = barWhite50;
            }
            else if((tempBuffer[i]&0xC0) === 0x40)
            {
                current_state.frontStyles[i-startOfArrow] = barWhite10;
            }
            else
            {
                current_state.frontStyles[i-startOfArrow] = visiblityTrue;
            }
        }
        //console.log(current_state.frontStyles);
        return current_state;
    }

    render() {
        return (
            <div className="lightStickArrow">
                <div className="lsArrow_m1" style={this.state.frontStyles[0]}>
                </div>
                <div className="lsArrow_m2" style={this.state.frontStyles[0]}>
                </div>
                <div className="lsArrow_m3" style={this.state.frontStyles[0]}>
                </div>
                <div className="lsArrow_m4" style={this.state.frontStyles[0]}>
                </div>
                <div className="lsArrow_m5" style={this.state.frontStyles[1]}>
                </div>
                <div className="lsArrow_m6" style={this.state.frontStyles[2]}>
                </div>
                <div className="lsArrow_m7" style={this.state.frontStyles[3]}>
                </div>
                <div className="lsArrow_m8" style={this.state.frontStyles[4]}>
                </div>
                <div className="lsArrow_m9" style={this.state.frontStyles[5]}>
                </div>
                <div className="lsArrow_m10" style={this.state.frontStyles[6]}>
                </div>
                <div className="lsArrow_m11" style={this.state.frontStyles[7]}>
                </div>
                <div className="lsArrow_m12" style={this.state.frontStyles[8]}>
                </div>
                <div className="lsArrow_m13" style={this.state.frontStyles[9]}>
                </div>
                <div className="lsArrow_m14" style={this.state.frontStyles[9]}>
                </div>
                <div className="lsArrow_m15" style={this.state.frontStyles[9]}>
                </div>
                <div className="lsArrow_m16" style={this.state.frontStyles[9]}>
                </div>
            </div>
        );
    }
}