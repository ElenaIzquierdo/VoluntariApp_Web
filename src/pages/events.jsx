import React from "react";
import Base from "./base";
import '../css/eventScreenStyle.css';
import {
    Row,
    Col
} from 'reactstrap';
import connect from "react-redux/es/connect/connect";
import {unshowWeek, showWeek} from "../actions/eventsActions";
import { RowDetailState } from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    TableHeaderRow,
    TableRowDetail,
} from '@devexpress/dx-react-grid-bootstrap4';
import { generateRows } from '../demo-data/generator';

const RowDetail = ({ row }) => (
    <div>
        Details for
        {' '}
        {row.name}
        {' '}
        from
        {' '}
        {row.city}
    </div>
);


class Events extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            columns: [
                { name: 'name', title: 'Name' },
                { name: 'sex', title: 'Sex' },
                { name: 'city', title: 'City' },
                { name: 'car', title: 'Car' },
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
                    <h4 className="titleStyle">Activitats anteriors</h4>

                    <Row>
                        <Col sm="24" md={{ size: 6, offset: 3 }}>
                            <div className="card">
                                <Grid
                                    rows={rows}
                                    columns={columns}
                                >
                                    <RowDetailState
                                        defaultExpandedRowIds={[]}
                                    />
                                    <Table />
                                    <TableHeaderRow />
                                    <TableRowDetail
                                        contentComponent={RowDetail}
                                    />
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

