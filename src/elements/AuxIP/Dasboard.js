import React, { useState, useEffect } from 'react'
import SEO from "../../common/SEO";
import HeaderTwo from '../../common/header/HeaderTwo';
import HeaderTopBar from '../../common/header/HeaderTopBar';
import Separator from "../../elements/separator/Separator";
import FooterBottom from '../../elements/AuxIP/FooterBottom';
import SideBar from './Bar/SideBar'
import { useHistory } from 'react-router-dom';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import FileUpload from './FileUpload';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { roleUser } from '../../utils/AuxIP/helper';
import CustomTable from './CustomTable/CustomTable';
import { toast } from 'react-toastify';

const Dashboard = () => {
    let history = useHistory();

    const [filterDate, setfilterDate] = useState();
    const [content, setContent] = useState([]);
    const [colStruct, setColStruct] = useState([]);
    const [columns, setColums] = useState([]);
    const [isLoader, setIsLoader] = useState(false);
    const [selectedData, setSelectedData] = useState([]);
    const [filterConstraints, setfilterConstraints] = useState();
    // const [instructionDetial, setInstructionDetial] = useState();

    //API
    const submitInstruction = async () => {
        setIsLoader(true);
        const response = await fetch(`${process.env.REACT_APP_BASEURL}instruction/store`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('auth'),
                },
                method: "POST",
                body: JSON.stringify({data:selectedData}),
            })
        if (!response.ok) {
            throw new Error('Data coud not be fetched!')
        } else {
            toast.success("Instruction Submit Successfully", {
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

    const getIpServicePageData = async () => {
        setIsLoader(true);
        const response = await fetch(`${process.env.REACT_APP_BASEURL}company/detail`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('auth'),
                },
                method: "GET",
            })
        if (!response.ok) {
            throw new Error('Data coud not be fetched!')
        } else {
            let res = await response.json();
            setContent(res.data.instruction);
            setColStruct(res.data.colStruct);
            setColums(res.data.column);
            return res;
        }
    }
    //Table Setting
    const filter = (e) => {
        var d = new Date();
        if (e.target.value === "1m") {
            d.setMonth(d.getMonth() - 1);
            setfilterDate("1m");
            setfilterConstraints(d.toLocaleDateString());
        } else if (e.target.value === "3m") {
            d.setMonth(d.getMonth() - 3);
            setfilterDate("3m");
            setfilterConstraints(d.toLocaleDateString());
        } else if (e.target.value === "6m") {
            setfilterDate("6m");
            d.setMonth(d.getMonth() - 6);
            setfilterConstraints(d.toLocaleDateString());
        } else {
            setfilterConstraints()
        }
        console.log(filterConstraints);
    }

    ///file upload

    const estimatedCost = (selectedData) => {
        let sum = 0;
        selectedData.forEach(element => {
          sum += parseInt(element.estimated_cost);
        });
        return sum;
    }

    useEffect(() => {
        if (!localStorage.getItem("auth") ) {
            history.push("/login");
            setIsLoader(true);
        }
        getIpServicePageData();
        setIsLoader(true);

    }, [])

    if (!isLoader)
        return <div className='loader'><span></span></div>;

    return (
        <>
            <SEO title="Dashboard" />
            <main className="page-wrapper">
                <HeaderTopBar />
                <HeaderTwo btnStyle="btn-small" />
                <main id="mian">
                    <section>
                        <div className="container-fluid">
                            <div className="row">
                                <SideBar />
                                <div className="col-md-10 overflow">
                                    <Separator />
                                    <div className="dashboard_section my-5">
                                        <div className="full">
                                            <div>
                                                <div>
                                                    <select onChange={filter} value={filterDate}>
                                                        <option value="all">All</option>
                                                        <option value="1m">1 Month</option>
                                                        <option value="3m">3 Month</option>
                                                        <option value="6m">6 Month</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <CustomTable
                                                content={content}
                                                setContent={setContent}
                                                colStruct={colStruct}
                                                setColStruct={setColStruct}
                                                columns={columns}
                                                setColums={setColums}
                                                isLoader={isLoader}
                                                setIsLoader={setIsLoader}
                                                selectedData={selectedData}
                                                setSelectedData={setSelectedData}
                                                filterConstraints={filterConstraints}
                                                setfilterConstraints={setfilterConstraints}
                                            />

                                        </div>
                                    </div>
                                    {/* <Separator /> */}
                                    {(selectedData.length > 0) ?
                                        <div>
                                            <table className='alert alert-info'>
                                                <tr>
                                                    <td>
                                                        <span className='font-small'>{(selectedData) ? selectedData.length : ""} Items(s) Selected for Instruction</span>
                                                    </td>
                                                    <td className='text-right'>
                                                        <span className='mx-5 font-small' >Total Estimated Cost:
                                                            <b className='ml-2'>
                                                                {estimatedCost(selectedData)}
                                                            </b>
                                                            <span className='ml-2'>
                                                            ({(selectedData) ? selectedData.length : ""})
                                                            </span>

                                                        </span>
                                                        <button className='btn btn-default instructor-btn' onClick={submitInstruction}>
                                                            Instruct
                                                        </button>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        : ""}



                                </div>

                            </div>
                        </div>


                    </section>
                </main>



                <FooterBottom />
            </main>

        </>
    )
}
export default Dashboard;