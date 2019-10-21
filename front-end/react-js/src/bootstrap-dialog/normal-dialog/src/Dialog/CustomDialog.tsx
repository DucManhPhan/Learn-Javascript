import React from "react";
import './CustomDialog.scss';
import { Checkbox } from "../Checkbox/Checkbox";
import { Form, Button, FormCheck } from 'react-bootstrap';
import { SpinBox } from "../SpinBox/SpinBox";
import { number } from "prop-types";


export class CustomDialog extends React.Component {
    
    state = {
        valueOfAngle: 45
    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="figure-dialog">
                <div className="dialog-header row-dialog">
                    <div className="title-header name">Chỉnh sửa ký hiệu</div>
                    <div className="close-btn">
                        <img src="./asset/images/close-dialog-btn.png" />
                    </div>
                </div>

                <div className="dialog-content">
                    <div className="row-dialog">
                        <div className="name">Tên</div>
                        <input type="text" className="text-content"/>
                    </div>

                    <div className="row-dialog">
                        <div className="name">Góc quay</div>
                        <SpinBox value={this.state.valueOfAngle} />
                    </div>

                    <div className="row-dialog">
                        <div className="name">Tỷ lệ</div>
                        <SpinBox />
                    </div>

                    <div className="row-dialog">
                        <div className="name">Độ cao (M)</div>
                        <SpinBox />
                    </div>

                    <div className="row-dialog">
                        <div className="name">Ta/Địch</div>
                        <Form.Control as="select" className="text-content">
                            <option>Quân Ta</option>
                            <option>Quân Địch</option>
                        </Form.Control>
                    </div>

                    <div className="row-dialog">
                        <div className="name">Vị trí</div>
                        <input type="text" className="text-content"/>
                    </div>

                    <div className="row-dialog">
                        <div className="name">Chữ</div>
                        <div className="font-info">
                            <input type="text" className="text-content"/>
                            <div className="font-edge">
                                <Checkbox path="./asset/images/bold.png" />
                                <Checkbox path="./asset/images/italic.png" />
                                <Checkbox path="./asset/images/underline.png" />
                            </div>
                            <div className="font-type">
                                <Form.Control as="select" className="font">
                                    <option>VnArial</option>
                                    <option>Times New Roman</option>
                                </Form.Control>

                                <Form.Control as="select" className="font-size">
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>                                    
                                </Form.Control>
                            </div>
                        </div>
                    </div>

                    <div className="row-dialog row-btns">
                        <Button variant="secondary" className="default-btn close-btn">Đóng</Button>
                        <Button variant="secondary" className="default-btn advanced-btn">Nâng cao</Button>
                        <Button variant="secondary" className="default-btn save-btn">Lưu</Button>
                    </div>
                </div>
            </div>
        );
    }
}