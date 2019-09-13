import React from "react";
import Base from "../components/base";
import '../css/eventScreenStyle.css';
import {
    Row,
    Col
} from 'reactstrap';
import connect from "react-redux/es/connect/connect";
import {unshowWeek, showWeek} from "../actions/eventsActions";
import {
        RowDetailState,
        PagingState,
        IntegratedPaging} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    TableHeaderRow,
    TableRowDetail,
    PagingPanel,
} from '@devexpress/dx-react-grid-bootstrap4';
import { generateRows } from '../demo-data/generator';

const RowDetail = () => (
    <div>
        Dilluns
        Dimarts
        Dimecres
        Dijous
        Divendres
    </div>
);


class Events extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            columns: [
                { name: 'setmana', title: 'Setmana' },
                { name: 'valoracions', title: 'Valoració mitjana' },
                { name: 'assistencia_voluntaris', title: 'Assistencia Voluntaris' },
                { name: 'assistencia_infants', title: 'Assistencia Infants' },
            ],
            rows: generateRows({ length: 8 }),
        };
    }
    render(){
        const { rows, columns } = this.state;
        return(
            <div>
                <Base/>
                <div className="viewStyle">
                    <Row>
                        <Col md={{ size: 6, offset: 2 }}>
                            <h4 className="titleStyle">Activitats anteriors</h4>
                            <div className="card">
                                <Grid
                                    rows={rows}
                                    columns={columns}
                                >
                                    <PagingState
                                        defaultCurrentPage={0}
                                        pageSize={6}
                                    />
                                    <RowDetailState
                                        defaultExpandedRowIds={[]}
                                    />
                                    <IntegratedPaging />
                                    <Table />
                                    <TableHeaderRow />
                                    <TableRowDetail
                                        contentComponent={RowDetail}
                                    />
                                    <PagingPanel />
                                </Grid>
                            </div>
                        </Col>
                        <Col  md={{ size: 4 }}>
                            <div className="cardStyle">
                                <h5 className="titleCardStyle">Llegenda</h5>
                                <hr/>
                                <Row className="rowIconStyle">
                                    <i className="fa fa-star iconStarStyle"/>
                                    <p className="textIconStyle">Valoració mitjana</p>
                                </Row>
                                <div>
                                    <ul>
                                        És la mitjana de les valoracions de tota la setmana
                                    </ul>
                                </div>

                                <Row className="rowIconStyle">
                                    <i className="fa fa-users iconStyle"/>
                                    <p className="textIconStyle">Assistència</p>
                                </Row>
                                <div>
                                    <ul>
                                        <Row className="rowIconStyle">
                                            <i className="fa fa-angle-double-up assaltaStyle"/>
                                            <p>Alta</p>
                                        </Row>
                                    </ul>
                                    <ul>
                                        <Row className="rowIconStyle">
                                            <i className="fa fa-angle-up assmitjaStyle"/>
                                            <p>Mitja</p>
                                        </Row>
                                    </ul>
                                    <ul>
                                        <Row className="rowIconStyle">
                                            <i className="fa fa-angle-double-down assbaixaStyle"/>
                                            <p>Baixa</p>
                                        </Row>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ size: 6, offset: 2 }}>
                            <h4 className="titleStyle">Activitats posteriors</h4>
                            <div className="card">
                                <Grid
                                    rows={rows}
                                    columns={columns}
                                >
                                    <PagingState
                                        defaultCurrentPage={0}
                                        pageSize={6}
                                    />
                                    <RowDetailState
                                        defaultExpandedRowIds={[]}
                                    />
                                    <IntegratedPaging />
                                    <Table />
                                    <TableHeaderRow />
                                    <TableRowDetail
                                        contentComponent={RowDetail}
                                    />
                                    <PagingPanel />
                                </Grid>
                            </div>
                        </Col>
                    </Row>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showWeekBoolean: state.eventsReducer.showWeek
    }
};
const  mapDispatchToProps = (dispatch)=>{
    return {
        showWeek: ()=>dispatch(showWeek()),
        unshowWeek: ()=>dispatch(unshowWeek())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);

