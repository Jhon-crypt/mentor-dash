/* eslint-disable react/no-unknown-property */
import Sidebar from "../components/sidebars/sidebar";
import SearchContainer from "../components/containers/searchContainer";
import BarChartAnalyticsCard from "../components/cards/barchartAnalyticsCard";
import AnalyticsStatsCard from "../components/cards/analyticsStatsCard";
import RecentSessionCard from "../components/cards/recentSessionCard";
export default function Analytics() {

    return (

        <>

            <div class="page-sidebar-collapsed">
                <div class="page-container">
                    <Sidebar />
                    <div class="page-content">
                        <div class="page-header">
                            <nav class="navbar navbar-expand-lg d-flex justify-content-between">
                                <div class="header-title flex-fill">
                                    <a href="#" id="sidebar-toggle"><i data-feather="arrow-left"></i></a>
                                    <h5>Dashboard</h5>
                                </div>
                                <div class="header-search">
                                    <form>
                                        <input
                                            class="form-control"
                                            type="text"
                                            placeholder="Type something.."
                                            aria-label="Search"
                                        />
                                        <a href="#" class="close-search"><i data-feather="x"></i></a>
                                    </form>
                                </div>
                                <div class="flex-fill" id="headerNav">
                                    <ul class="navbar-nav">


                                        <li class="nav-item dropdown">
                                            <a
                                                class="nav-link notifications-dropdown"
                                                href="#"
                                                id="notificationsDropDown"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                3
                                                <div class="spinner-grow text-danger" role="status">
                                                    <span class="visually-hidden">Loading...</span>
                                                </div>
                                            </a>
                                            <div
                                                class="dropdown-menu dropdown-menu-end notif-drop-menu"
                                                aria-labelledby="notificationsDropDown"
                                            >
                                                <h6 class="dropdown-header">Notifications</h6>
                                                <a href="#">
                                                    <div class="header-notif">
                                                        <div class="notif-image">
                                                            <span class="notification-badge bg-info text-white">
                                                                <i class="fas fa-bullhorn"></i>
                                                            </span>
                                                        </div>
                                                        <div class="notif-text">
                                                            <p class="bold-notif-text">
                                                                faucibus dolor in commodo lectus mattis
                                                            </p>
                                                            <small>19:00</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div class="header-notif">
                                                        <div class="notif-image">
                                                            <span
                                                                class="notification-badge bg-primary text-white"
                                                            >
                                                                <i class="fas fa-bolt"></i>
                                                            </span>
                                                        </div>
                                                        <div class="notif-text">
                                                            <p class="bold-notif-text">
                                                                faucibus dolor in commodo lectus mattis
                                                            </p>
                                                            <small>18:00</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div class="header-notif">
                                                        <div class="notif-image">
                                                            <span
                                                                class="notification-badge bg-success text-white"
                                                            >
                                                                <i class="fas fa-at"></i>
                                                            </span>
                                                        </div>
                                                        <div class="notif-text">
                                                            <p>faucibus dolor in commodo lectus mattis</p>
                                                            <small>yesterday</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div class="header-notif">
                                                        <div class="notif-image">
                                                            <span class="notification-badge">
                                                                <img
                                                                    src="http://polygons.space/neo/theme/assets/images/avatars/avatar2.jpeg"
                                                                    alt=""
                                                                />
                                                            </span>
                                                        </div>
                                                        <div class="notif-text">
                                                            <p>faucibus dolor in commodo lectus mattis</p>
                                                            <small>yesterday</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div class="header-notif">
                                                        <div class="notif-image">
                                                            <span class="notification-badge">
                                                                <img
                                                                    src="http://polygons.space/neo/theme/assets/images/avatars/avatar5.jpeg"
                                                                    alt=""
                                                                />
                                                            </span>
                                                        </div>
                                                        <div class="notif-text">
                                                            <p>faucibus dolor in commodo lectus mattis</p>
                                                            <small>yesterday</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a
                                                class="nav-link profile-dropdown"
                                                href="#"
                                                id="profileDropDown"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            ><img
                                                    src="http://polygons.space/neo/theme/assets/images/avatars/avatar1.jpeg"
                                                    alt=""
                                                /></a>
                                            <div
                                                class="dropdown-menu dropdown-menu-end profile-drop-menu"
                                                aria-labelledby="profileDropDown"
                                            >
                                                <a class="dropdown-item" href="#"
                                                ><i data-feather="user"></i>Profile</a
                                                >
                                                <a class="dropdown-item" href="#"
                                                ><i data-feather="inbox"></i>Messages</a
                                                >
                                                <a class="dropdown-item" href="#"
                                                ><i data-feather="edit"></i>Activities<span
                                                    class="badge rounded-pill bg-success"
                                                >12</span
                                                    ></a
                                                >
                                                <a class="dropdown-item" href="#"
                                                ><i data-feather="check-circle"></i>Tasks</a
                                                >
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#"
                                                ><i data-feather="settings"></i>Settings</a
                                                >
                                                <a class="dropdown-item" href="#"
                                                ><i data-feather="unlock"></i>Lock</a
                                                >
                                                <a class="dropdown-item" href="#"
                                                ><i data-feather="log-out"></i>Logout</a
                                                >
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div class="main-wrapper">
                            <div class="row">
                                <BarChartAnalyticsCard />
                                <AnalyticsStatsCard />
                            </div>
                            <div class="row">
                                <RecentSessionCard />
                                <div class="col-lg-4">
                                    <div class="card widget widget-info card-bg">
                                        <div class="card-body">
                                            <div class="widget-info-container">
                                                <div
                                                    class="widget-info-image"
                                                    style={{ background: "url('http://polygons.space/neo/theme/assets/images/premium.svg')" }}></div>
                                                <h5 class="widget-info-title text-white">
                                                    Advanced Security
                                                </h5>
                                                <p class="widget-info-text">
                                                    Lorem ipsum dolor sit amet. Nunc cursus tempor sapien, et
                                                    mattis libero dapibus ut. Ut a ante sit amet arcu
                                                    imperdiet ipsum ante
                                                </p>
                                                <a href="#" class="btn btn-primary widget-info-action"
                                                >Try Premium for free</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="card stat-widget card-bg">
                                        <div class="card-body">
                                            <h5 class="card-title">Top Authors</h5>
                                            <div class="transactions-list">
                                                <div class="tr-item">
                                                    <div class="tr-company-name">
                                                        <div class="tr-img tr-card-img">
                                                            <img
                                                                src="http://polygons.space/neo/theme/assets/images/avatars/avatar1.jpeg"
                                                                alt="..."
                                                            />
                                                        </div>
                                                        <div class="tr-text">
                                                            <h4 class="text-white">John Doe</h4>
                                                            <p>23 items sold</p>
                                                        </div>
                                                    </div>
                                                    <div class="tr-rate">
                                                        <p><span>$300</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="transactions-list">
                                                <div class="tr-item">
                                                    <div class="tr-company-name">
                                                        <div class="tr-img tr-card-img">
                                                            <img
                                                                src="http://polygons.space/neo/theme/assets/images/avatars/avatar2.jpeg"
                                                                alt="..."
                                                            />
                                                        </div>
                                                        <div class="tr-text">
                                                            <h4 class="text-white">Ann Doe</h4>
                                                            <p>19 items sold</p>
                                                        </div>
                                                    </div>
                                                    <div class="tr-rate">
                                                        <p><span>$270</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="transactions-list">
                                                <div class="tr-item">
                                                    <div class="tr-company-name">
                                                        <div class="tr-img tr-card-img">
                                                            <img
                                                                src="http://polygons.space/neo/theme/assets/images/avatars/avatar3.jpeg"
                                                                alt="..."
                                                            />
                                                        </div>
                                                        <div class="tr-text">
                                                            <h4 class="text-white">Lisa Doe</h4>
                                                            <p>14 items sold</p>
                                                        </div>
                                                    </div>
                                                    <div class="tr-rate">
                                                        <p><span>$404</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="transactions-list">
                                                <div class="tr-item">
                                                    <div class="tr-company-name">
                                                        <div class="tr-img tr-card-img">
                                                            <img
                                                                src="http://polygons.space/neo/theme/assets/images/avatars/avatar4.jpeg"
                                                                alt="..."
                                                            />
                                                        </div>
                                                        <div class="tr-text">
                                                            <h4 class="text-white">John Doe</h4>
                                                            <p>10 items sold</p>
                                                        </div>
                                                    </div>
                                                    <div class="tr-rate">
                                                        <p><span>$500</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="transactions-list">
                                                <div class="tr-item">
                                                    <div class="tr-company-name">
                                                        <div class="tr-img tr-card-img">
                                                            <img
                                                                src="http://polygons.space/neo/theme/assets/images/avatars/avatar5.jpeg"
                                                                alt="..."
                                                            />
                                                        </div>
                                                        <div class="tr-text">
                                                            <h4 class="text-white">Ann Doe</h4>
                                                            <p>8 items sold</p>
                                                        </div>
                                                    </div>
                                                    <div class="tr-rate">
                                                        <p><span>$299</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
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
                            </div>
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