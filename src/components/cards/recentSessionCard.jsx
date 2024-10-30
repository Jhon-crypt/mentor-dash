/* eslint-disable react/no-unknown-property */
export default function RecentSessionCard() {

    return (

        <>

            <div class="col-lg-4">
                <div class="card card-bg">
                    <div class="card-body">
                        <h5 class="card-title">Transactions</h5>
                        <div class="transactions-list">
                            <div class="tr-item">
                                <div class="tr-company-name">
                                    <div
                                        class="tr-icon tr-card-icon tr-card-bg-primary text-white"
                                    >
                                        <i data-feather="thumbs-up"></i>
                                    </div>
                                    <div class="tr-text">
                                        <h4 class="text-white">Facebook</h4>
                                        <p>02 March</p>
                                    </div>
                                </div>
                                <div class="tr-rate">
                                    <p><span class="text-success">+$24</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="transactions-list">
                            <div class="tr-item">
                                <div class="tr-company-name">
                                    <div
                                        class="tr-icon tr-card-icon tr-card-bg-success text-white"
                                    >
                                        <i data-feather="credit-card"></i>
                                    </div>
                                    <div class="tr-text">
                                        <h4 class="text-white">Visa</h4>
                                        <p>02 March</p>
                                    </div>
                                </div>
                                <div class="tr-rate">
                                    <p><span class="text-success">+$300</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="transactions-list">
                            <div class="tr-item">
                                <div class="tr-company-name">
                                    <div
                                        class="tr-icon tr-card-icon tr-card-bg-danger text-white"
                                    >
                                        <i data-feather="tv"></i>
                                    </div>
                                    <div class="tr-text">
                                        <h4 class="text-white">Netflix</h4>
                                        <p>02 March</p>
                                    </div>
                                </div>
                                <div class="tr-rate">
                                    <p><span class="text-danger">-$17</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="transactions-list">
                            <div class="tr-item">
                                <div class="tr-company-name">
                                    <div
                                        class="tr-icon tr-card-icon tr-card-bg-warning text-white"
                                    >
                                        <i data-feather="shopping-cart"></i>
                                    </div>
                                    <div class="tr-text">
                                        <h4 class="text-white">Themeforest</h4>
                                        <p>02 March</p>
                                    </div>
                                </div>
                                <div class="tr-rate">
                                    <p><span class="text-danger">-$220</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="transactions-list">
                            <div class="tr-item">
                                <div class="tr-company-name">
                                    <div
                                        class="tr-icon tr-card-icon tr-card-bg-info text-white"
                                    >
                                        <i data-feather="dollar-sign"></i>
                                    </div>
                                    <div class="tr-text">
                                        <h4 class="text-white">PayPal</h4>
                                        <p>02 March</p>
                                    </div>
                                </div>
                                <div class="tr-rate">
                                    <p><span class="text-success">+20%</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}