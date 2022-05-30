import React from 'react';
import Contents from '../layout/Contents';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

// function ReferDetail(props) {
//     console.log(props);
//     return <div>ReferDetail</div>;
// }

class ReferDetail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/reference');
        }
    }
    render() {
        const { location } = this.props;
        // 변하는 값이 아니라 전달만 하므로 props를 사용
        if (location.state === undefined) {
            return <div>잘못된 페이지입니다.</div>;
        } else {
            return (
                <>
                    <Header />
                    <Contents>
                        <section className="refer__cont">
                            <div className="container">
                                <div className="refer_inner">
                                    <div className="refer_table">
                                        <h3>{location.state.title}</h3>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Contents>
                    <Footer />
                </>
            );
        }
    }
}

export default ReferDetail;
