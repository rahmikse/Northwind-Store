import React, {Component} from 'react';
import Navi from '../navi/Navi'
import {Row,Col} from 'reactstrap'
import CategoryList from "../categories/CategoryList";
import ProductList from "../products/ProductList";
class DashBord extends Component {
    render() {
        return (
            <div>

                <Row>
                    <Col xs={3}>
                        <CategoryList/>
                    </Col>
                    <Col xs={9}>
                        <ProductList/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DashBord;