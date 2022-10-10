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
import { toast } from 'react-toastify';


const PreviousTable = (props) => {
    let reference, ip_type, application, application_numbers, application_filing_date, patent_numbers, grant_date, country, due_date, last_instruction_date, action_type, estimated_cost, instruction;
    const statusOfInstruction = [
        { value: "pending", label: "Pending" },
        { value: "done", label: "Done" },
        { value: "cancel", label: "Cancel" },
    ];
    const onRowSelect = (row, isSelect, rowIndex, e) => {
        if (isSelect) {
            let prev = props.selectedData;
            props.setSelectedData(prev => [...prev, row]);
        } else {
            let prev = props.selectedData.filter(function (obj) {
                return obj.id !== row.id;
            });
            props.setSelectedData(prev);
        }
    }
    const updateInstructStatus = async (oldValue, newValue, row, column) => {
        props.setIsLoader(true);
        let data={
            id:row.inst_id,
            status:row.status
        }
        const response = await fetch(`${process.env.REACT_APP_BASEURL}instruction/status`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('auth'),
                },
                method: "POST",
                body: JSON.stringify(data),
            })
        if (!response.ok) {
            throw new Error('Data coud not be fetched!')
        } else {
            toast.info("Instruction Submit Successfully", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            console.log('done')
        }
    }
    const selectRow = {
        mode: 'checkbox',
        // clickToSelect: true,
        // clickToEdit: true,
        hideSelectAll: true,
        style: {
            background: '#d1ecf1',
        },
        classes: "custom-check-box",
        onSelect: (roleUser() === "User") ? onRowSelect : () => { },
        // onSelectAll: (roleUser() === "User") ? onSelectAll : () => { }
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
        editable: (roleUser() === "Admin") ? false : true,
    },
    {
        dataField: 'instruction',
        text: 'Instruction',
        sort: true,
        editable: (roleUser() === "Admin") ? false : true,
    },
    {
        dataField: 'status',
        text: 'Status',
        sort: true,
        editor: {
            type: Type.SELECT,
            options: statusOfInstruction
        },
        editable: (roleUser() === "Admin") ? true : false,
    }];

    const paginationOption = {
        custom: true,
        totalSize: props.content.instruction_list.length
    };
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
                                bootstrap4
                                keyField="id"
                                data={(props.content.instruction_list) ? props.content.instruction_list : "No Data"}
                                columns={columns}
                                filter={filterFactory()}
                                noDataIndication="No Data to Display"
                                {...paginationTableProps}
                                // selectRow={selectRow}
                                headerClasses="header-class"
                                

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
export default PreviousTable;
