/* eslint-disable react/no-unknown-property */
import { SiGoogleanalytics } from "react-icons/si";
import { SiCodementor } from "react-icons/si";
import { RxActivityLog } from "react-icons/rx";
import { MdOutlineWork } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi";

export default function Sidebar() {

    return (

        <>
            <div class="page-sidebar">
                <a class="logo" href="index.html"><SiCodementor size={30} /></a>
                <ul class="list-unstyled accordion-menu">
                    <li class="active-page">
                        <a href="#" class="active"><SiGoogleanalytics /></a>
                        <ul class="">
                            <li>
                                <a>Analytics</a>
                            </li>
                        </ul>
                    </li>
                    <li class="active-page">
                        <a href="#" class="active">< RxActivityLog /></a>
                        <ul class="">
                            <li>
                                <a>Sessions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="active-page">
                        <a href="#" class="active"><MdOutlineWork /></a>
                        <ul class="">
                            <li>
                                <a>Freelance jobs</a>
                            </li>
                        </ul>
                    </li>
                    <li class="active-page">
                        <a href="#" class="active"><MdPayments /></a>
                        <ul class="">
                            <li>
                                <a>Payouts</a>
                            </li>
                        </ul>
                    </li>
                    <li class="active-page">
                        <a href="#" class="active"><HiCurrencyDollar /></a>
                        <ul class="">
                            <li>
                                <a>Direct payments</a>
                            </li>
                        </ul>
                    </li>

                </ul>
                <a href="#" id="sidebar-collapsed-toggle">
                    <i data-feather="arrow-right"></i>
                </a>
            </div>
        </>

    )

}