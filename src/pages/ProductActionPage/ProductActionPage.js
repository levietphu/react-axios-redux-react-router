import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from '../../actions/index';

class ProductActionPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            price: '',
            status: ''
        }
    }

    componentDidMount(){
        var {match} = this.props;
        
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
        }
    }

    componentWillReceiveProps(nextProps){
        if (nextProps && nextProps.itemEditing) {
            var {itemEditing} = nextProps;
            this.setState({
                id: itemEditing.id,
                name: itemEditing.name,
                price:itemEditing.price,
                status: itemEditing.status
            })
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type==='checkbox'?target.checked:target.value;
        this.setState({
            [name]: value
        })
    }

    onSave = (e) => {
        e.preventDefault();
        var {id, name,price,status} = this.state;
        var product = {
            id: id,
            name:name,
            price:price,
            status:status
        }
        var {history} = this.props;
        if (id) {
            this.props.onUpdateProduct(product,id);
            history.goBack();
        }else{
            this.props.onAddProduct(product)
            history.goBack();
        }
        
    }

  render () {
    var {name,price,status} = this.state;
    return (
        
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            
            <form onSubmit={this.onSave}>     

                <div className="form-group">
                    <label>Tên sản phẩm</label>
                    <input type="text" className="form-control" name="name" onChange={this.onChange} value={name}/>
                </div>
                <div className="form-group">
                    <label>Giá sản phẩm</label>
                    <input type="number" className="form-control" name="price" onChange={this.onChange} value={price}/>
                </div>
                <div className="form-group">
                    
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" name="status" onChange={this.onChange} checked={status}/>
                            Còn hàng
                        </label>
                    </div>
                    
                </div>

                <button type="submit" className="btn btn-primary">Lưu lại</button>
            </form>
            
        </div>
        
    );
  }
  
}

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(Actions.addProductRequest(product))
        },
        onEditProduct : (id) => {
            dispatch(Actions.editProductRequest(id))
        },
        onUpdateProduct: (product,id) => {
            dispatch(Actions.updateProductRequest(product,id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
