/* eslint-disable react/no-unknown-property */
import Sidebar from "../components/sidebars/sidebar";
import SearchContainer from "../components/containers/searchContainer";
import BarChartAnalyticsCard from "../components/cards/barchartAnalyticsCard";
import AnalyticsStatsCard from "../components/cards/analyticsStatsCard";
import RecentSessionCard from "../components/cards/recentSessionCard";
import RecentScheduledSession from "../components/cards/recenScheduledSessionCard";
import RecentFreelanceJobsCard from "../components/cards/recentFreelanceJobsCard";
import PageHeader from "../components/header/pageHeader";
export default function Analytics() {

    return (

        <>
 
            <div class="page-sidebar-collapsed">
                <div class="page-container">
                        <Sidebar status1="active-page" status2="none" status3="none" status4="none" status5="none"/>
                    <div class="page-content">
                        <PageHeader header="Dashboard" />
                        <div class="main-wrapper">
                            <div class="row">
                                <BarChartAnalyticsCard />
                                <AnalyticsStatsCard />
                            </div>
                            <div class="row">
                                <RecentSessionCard />
                                <RecentScheduledSession />
                                <RecentFreelanceJobsCard />
                            </div>

                            {/* <div class="row">
                                <div class="col-lg-4">
                                    <div class="card card-bg">
                                        <div class="card-body">
                                            <h5 class="card-title">Sales</h5>
                                            <div id="sparkline1"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="card card-bg">
                                        <div class="card-body">
                                            <h5 class="card-title">Visitors</h5>
                                            <div id="sparkline2"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="card card-bg">
                                        <div class="card-body">
                                            <h5 class="card-title">Projects</h5>
                                            <div id="sparkline3"></div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div class="page-footer">
                            <a href="crypto.html" class="page-footer-item page-footer-item-right"
                            >Crypto<i data-feather="arrow-right" class="footer-right"></i
                            ></a>
                        </div>

                    </div>
                </div>
                <SearchContainer />

            </div>

        </>

    )

}