import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {

  onDelete = (id) => {
    if (confirm('Bạn có chắc chắn muốn xóa hay không')) { //eslint-disable-line
        this.props.onDelete(id)
    }
  }

  render () {

    var {product, index} =this.props;
    var statusName= product.status?'Còn hàng':'hết hàng';
    var statusClass = product.status?'warning':'default';

    return (
        <tr>
            <td>{index+1}</td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                
                <span className={`label label-${statusClass}`}>{statusName}</span>
                
            </td>
            <td>                
                <Link to={`/product/${product.id}/edit`} className="btn btn-sm btn-primary">Cập nhật</Link>
                <button type="button" className="btn btn-sm btn-danger" onClick={() => this.onDelete(product.id)}>Xóa</button>
                
            </td>
        </tr>
    );
  }
  
}

export default ProductItem;
