import React, {Component} from 'react';

class NotFoundPage extends Component {
  render () {
    return (
        <div>
            
            <div class="alert alert-warning">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <strong>Không tìm thấy trang</strong>
            </div>
            
        </div>
    );
  }
  
}

export default NotFoundPage;
