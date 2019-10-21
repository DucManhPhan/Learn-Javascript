import React from "react";
import './CustomDialog.scss';
import { Checkbox } from "../Checkbox/Checkbox";


export class CustomDialog extends React.Component {
    
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="figure-dialog">
                <div className="dialog-header row">
                    <div className="title-header name">Chỉnh sửa ký hiệu</div>
                    <div className="close-btn">
                        <img src="./asset/images/close-dialog-btn.png" />
                    </div>
                </div>

                <div className="dialog-content">
                    <div className="row">
                        <div className="name">Tên</div>
                        <input type="text" className="text-content"/>
                    </div>

                    <div className="row">
                        <div className="name">Góc quay</div>
                        <div className="text-content inc-dec">
                            <div className="decrement">-</div>
                            <div className="inc-dec-content">
                                <input type="text" className="inc-dec-text"/>
                            </div>
                            <div className="increment">+</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="name">Tỷ lệ</div>
                        <div className="text-content inc-dec">
                            <div className="decrement">-</div>
                            <div className="inc-dec-content">
                                <input type="text" className="inc-dec-text"/>
                            </div>
                            <div className="increment">+</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="name">Độ cao (M)</div>
                        <div className="text-content inc-dec">
                            <div className="decrement">-</div>
                            <div className="inc-dec-content">
                                <input type="text" className="inc-dec-text"/>
                            </div>
                            <div className="increment">+</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="name">Ta/Địch</div>
                        <div className="text-content type-contender">
                            <select name="" id="">
                                <option value="">Quân Ta</option>
                                <option value="">Quân Địch</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="name">Vị trí</div>
                        <input type="text" className="text-content"/>
                    </div>

                    <div className="row">
                        <div className="name">Chữ</div>
                        <div className="font-info">
                            <input type="text" className="text-content"/>
                            <div className="font-edge">
                                <Checkbox path="./asset/images/bold.png" />
                                <Checkbox path="./asset/images/italic.png" />
                                <Checkbox path="./asset/images/underline.png" />
                            </div>
                            <div className="font-type">
                                <select name="" className="font">
                                    <option value="">VnArial</option>
                                </select>
                                <select name="" className="font-size">
                                    <option value="">12</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row row-btns">
                        <button className="default-btn close-btn">Đóng</button>
                        <button className="default-btn advanced-btn">Nâng cao</button>
                        <button className="default-btn save-btn">Lưu</button>
                    </div>
                </div>
            </div>
        );
    }
}