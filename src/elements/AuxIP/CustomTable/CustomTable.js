import React, { useState, useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory, {
    PaginationProvider,
    PaginationListStandalone,
} from 'react-bootstrap-table2-paginator';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import { roleUser } from '../../../utils/AuxIP/helper';


const CustomTable = (props) => {

    let reference, ip_type, application, application_numbers, application_filing_date, patent_numbers, grant_date, country, due_date, last_instruction_date, action_type, estimated_cost, instruction;
    const onRowSelect  = (row, isSelect, rowIndex, e) => {
        console.log(row, isSelect)
    }
    const onSelectAll  = (isSelect, rows, e) => {
        console.log(isSelect);
        console.log(rows);
    }
    const typeOfInstruction = [
        { value: "Pay", label: "Pay" },
        { value: "Abandon", label: "Abandon" },
        { value: "Third party", label: "Third party" },
    ];
    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        clickToEdit: true,
        style: {
            background: '#d1ecf1',
        },
        classes: "custom-check-box",
        onSelect: onRowSelect,
        onSelectAll: onSelectAll
    }

    const columns = [{
        dataField: 'reference',
        text: 'Reference',
        sort: true,
        editable: false,
    }, {
        dataField: 'ip_type',
        text: 'IP Type',
        editable: false,
        sort: true,
    }, {
        dataField: 'application',
        text: 'Application',
        editable: false,
        sort: true,
    }, {
        dataField: 'application_numbers',
        text: 'Application Numbers',
        sort: true,
        editable: false,
    }, {
        dataField: 'application_filing_date',
        text: 'Application Filing Date',
        editable: false,
        sort: true,
    }, {
        dataField: 'patent_numbers',
        text: 'Patent Numbers',
        sort: true,
        editable: false,
    }, {
        dataField: 'grant_date',
        text: 'Grant Date',
        sort: true,
        editable: false,
    }, {
        dataField: 'country',
        text: 'Country',
        sort: true,
        editable: false,
    }, {
        dataField: 'due_date',
        text: 'Due Date',
        sort: true,
        editable: false,
    }, {
        dataField: 'last_instruction_date',
        text: 'Last Instruction Date',
        sort: true,
        editable: false,
    }, {
        dataField: 'action_type',
        text: 'Action Type',
        editable: false,
        sort: true,
    }, {
        dataField: 'estimated_cost',
        text: 'Estimated Cost',
        sort: true,
        editable: (roleUser() === "User") ? false : true,
    }, {
        dataField: "instruction",
        text: "Instruction",
        editor: {
            type: Type.SELECT,
            options: typeOfInstruction
        },
        editable: (roleUser() === "User") ? false : true,

    }];
    async function beforeSaveCell(oldValue, newValue, row, column, done) {
        console.log(oldValue, newValue, row, column, done)
        props.setIsLoader(true);

        // SelectedData()
        // let data = {
        //     "text": newValue,
        //     "col": column.dataField,
        //     'id': row.id
        // };
        // await fetch(`${process.env.REACT_APP_BASEURL}company/detail`,
        //     {
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //             'Authorization': localStorage.getItem('auth'),
        //         },
        //         body: JSON.stringify(data),
        //         method: "POST",
        //     })
    }
    const paginationOption = {
        custom: true,
        totalSize: props.content.length
    };

    const  duplicate = () => {

    } 
    return (
        <>
            <PaginationProvider
                pagination={paginationFactory(paginationOption)}
            >
                {
                    ({
                        paginationProps,
                        paginationTableProps
                    }) => (
                        <div>
                            <BootstrapTable
                                // bordered={false}
                                bootstrap4
                                keyField="id"
                                data={props.content ? props.filterConstraints ? props.content.filter((itm) => {
                                    return itm.due_date >= props.filterConstraints
                                }) : props.content : "No Data"
                                }
                                columns={columns}
                                filter={filterFactory()}
                                noDataIndication="No Data to Display"
                                {...paginationTableProps}
                                selectRow={selectRow}
                                headerClasses="header-class"
                                cellEdit={cellEditFactory({
                                    mode: "click",
                                    blurToSave: true,
                                    beforeSaveCell
                                })}

                            />
                            <PaginationListStandalone
                                {...paginationProps}
                            />
                        </div>
                    )
                }
            </PaginationProvider>
        </>
    )
}
export default CustomTable;