import React, {Component} from 'react';

class ProductList extends Component {
  render () {
    return (
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Mã</th>
                    <th>Tên</th>
                    <th>Giá</th>
                    <th>Trang thái</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                {this.props.children}
            </tbody>
        </table>
    );
  }
  
}

export default ProductList;
