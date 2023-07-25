import Link from 'next/link';
export default function specialOffer() {
    return (
        <>
            <div className="spcialoffer">
                <div class="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <h1>Speical Offer</h1>
                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-12">
                            <div>
                                <span className="highlight">50% Free</span>
                                <span className="m-2 d-inline-block">Purchase up to 10,000 caredits to qualify!</span>
                                <Link href="/credits">Click Here</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="mt-2">Contact Us: +18010 452 365</div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}