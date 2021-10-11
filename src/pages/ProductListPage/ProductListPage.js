import React, {Component} from 'react';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductList from '../../components/ProductList/ProductList';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import * as Actions from '../../actions/index';

class ProductListPage extends Component {
    
    componentDidMount(){
        this.props.onListProducts();
    }

    showProduct = (products) => {
        var result = null;
        if(products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem key={index} product={product} index={index} onDelete={this.onDelete}></ProductItem>
            })
        }
        return result;
    }

    onDelete = (id) => {
        this.props.onDeleteProduct(id);
    }

  render () {

    var {products} = this.props;

    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        
            <Link to="/product/add" className="btn btn-info" style={{marginBottom: '10px'}}>Thêm sản phẩm</Link>
            
            <div className="panel panel-primary">
                <div className="panel-heading">
                        <h3 className="panel-title">Danh sách sản phẩm</h3>
                </div>
                <div className="panel-body">
                        
                        <ProductList>
                            {this.showProduct(products)}
                        </ProductList>
                        
                </div>
            </div>

        </div> 
    );
  }
  
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onListProducts : () => {
            dispatch(Actions.listProductsRequest())
        },
        onDeleteProduct: (id) => {
            dispatch(Actions.deleteProductRequest(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);
