/* eslint-disable react/no-unknown-property */
export default function RecentScheduledSession() {

    return (

        <>

            <div class="col-lg-4">
                <div class="card widget widget-info card-bg">
                    <div class="card-body">
                        <div class="widget-info-container">
                            <div
                                class="widget-info-image"
                                style={{ background: "url('/empty.svg')" }}></div>
                            <h5 class="widget-info-title text-white">
                                No Record
                            </h5>
                            <p class="widget-info-text">
                                You dont have any schduled recent sessions at the moment, bomb more and come back later
                            </p>
                            <br />
                            <a href="#" class="btn btn-primary widget-info-action"
                            >Go to codementor</a
                            >
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}