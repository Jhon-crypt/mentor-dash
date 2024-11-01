/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { SiGoogleanalytics } from "react-icons/si";
import { SiCodementor } from "react-icons/si";
import { RxActivityLog } from "react-icons/rx";
import { MdOutlineWork } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Sidebar(props) {

    return (

        <>
            <div class="page-sidebar">
                <Link class="logo" to="/"><SiCodementor size={30} /></Link>
                <ul class="list-unstyled accordion-menu">
                    <li class={`${props.status1}`}>
                        <Link to="#" class="active"><SiGoogleanalytics /> Analytics</Link>
                        {/* <ul class="">
                            <li>
                                <a>Analytics</a>
                            </li>
                        </ul> */}
                    </li>
                    <li class={`${props.status2}`}>
                        <a href="#" class="active">< RxActivityLog /> Sessions</a>
                        {/* <ul class="">
                            <li>
                                <a>Sessions</a>
                            </li>
                        </ul> */}
                    </li>
                    <li class={`${props.status3}`}>
                        <a href="#" class="active"><MdOutlineWork /> Freelance</a>
                        {/* <ul class="">
                            <li>
                                <a>Freelance jobs</a>
                            </li>
                        </ul> */}
                    </li>
                    <li class={`${props.status4}`}>
                        <a href="#" class="active"><MdPayments /> Payouts</a>
                        {/* <ul class="">
                            <li>
                                <a>Payouts</a>
                            </li>
                        </ul> */}
                    </li>
                    <li class={`${props.status5}`}>
                        <a href="#" class="active"><HiCurrencyDollar /> Direct</a>
                        {/* <ul class="">
                            <li>
                                <a>Direct payments</a>
                            </li>
                        </ul> */}
                    </li>
                </ul>
                <a href="#" id="sidebar-collapsed-toggle">
                    <i data-feather="arrow-right"></i>
                </a>
            </div>
        </>

    )

}