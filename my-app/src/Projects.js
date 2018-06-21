import React, { Component } from "react";
import { render } from "react-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400/231af658709499.5a060bc540a31.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5df51758709499.5a060bc540f60.jpg",
    'https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/26114306_533161203710480_2590615607065709277_o.jpg?_nc_cat=0&oh=19f82b0d20e1051f7be0c2d0e00e1e69&oe=5B9DAEC3',
    "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/34688225_618036665222933_202696373034811392_n.jpg?_nc_cat=0&_nc_eui2=AeEzUsKNkX8RDU2RyOwj8ZZaDiXZuRojemaM0F9MykfbEwazX2MJKNQUIsaddo_x5Z-Rd7pFcWFXnRWwE3yiCN2XbFsqSpzRNGPDo16cYh7nHQ&oh=d252c31f90ca56b76aaa0234d644edcd&oe=5BAFCE5D"
];

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }

    render() {
        const { photoIndex, isOpen } = this.state;

        return (
            <div className={'grid-container projects-holder'}>
                <div className={'row'}>
                    <div className={'col-12 photo-gal'}>
                        <a target={'_blank'} href={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/34667636_618036825222917_8819893841176821760_n.jpg?_nc_cat=0&_nc_eui2=AeHyTxWUXGIofGMPsm1szE9hD8AVVTFfxqwd3cyHPW8Uq_1XQA7cxwsOnuFtsgRDaaxCQws9bb_0BTRX1bzj2F9N11eew1RoK6aF_vlJ2QFDfg&oh=3b33f708c0571e176f6a75a101c97286&oe=5BB84749'}><img className={'photo anim1'} src={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/34667636_618036825222917_8819893841176821760_n.jpg?_nc_cat=0&_nc_eui2=AeHyTxWUXGIofGMPsm1szE9hD8AVVTFfxqwd3cyHPW8Uq_1XQA7cxwsOnuFtsgRDaaxCQws9bb_0BTRX1bzj2F9N11eew1RoK6aF_vlJ2QFDfg&oh=3b33f708c0571e176f6a75a101c97286&oe=5BB84749'}/></a>
                        <a target={'_blank'} href={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/34579350_618036705222929_7295315880005599232_o.jpg?_nc_cat=0&_nc_eui2=AeFjYMJobx5ynQigSTXyd5cIH7TWv4k4Y4T_75Gii4QbL-n1QZ3TEZBAuQxSpIb6fWi-4m1lfB1xrYJKyKsa8BDPzQulbBCDyQigPYx8duEEsw&oh=3b2db6e55b93ed70236feb9fbc694421&oe=5BAA121F'}><img className={'photo anim2'} src={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/34579350_618036705222929_7295315880005599232_o.jpg?_nc_cat=0&_nc_eui2=AeFjYMJobx5ynQigSTXyd5cIH7TWv4k4Y4T_75Gii4QbL-n1QZ3TEZBAuQxSpIb6fWi-4m1lfB1xrYJKyKsa8BDPzQulbBCDyQigPYx8duEEsw&oh=3b2db6e55b93ed70236feb9fbc694421&oe=5BAA121F'}/></a>
                        <a target={'_blank'} href={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/34645983_618036741889592_980648223175606272_n.jpg?_nc_cat=0&_nc_eui2=AeGledlIPF_6XLpGpneklR6ukNucPJE-wM-5IA--SEh3pOyhWH1cluc3VNeF-PbTnv6pXpk80n8jxuHav7lqAbA0GZUcqCNlG9Gd6_JZzjJ2SQ&oh=4e1e3e61590c3da2ba22131ad12a3135&oe=5BA02364'}><img className={'photo anim3'} src={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/34645983_618036741889592_980648223175606272_n.jpg?_nc_cat=0&_nc_eui2=AeGledlIPF_6XLpGpneklR6ukNucPJE-wM-5IA--SEh3pOyhWH1cluc3VNeF-PbTnv6pXpk80n8jxuHav7lqAbA0GZUcqCNlG9Gd6_JZzjJ2SQ&oh=4e1e3e61590c3da2ba22131ad12a3135&oe=5BA02364'}/></a>
                        <a target={'_blank'} href={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/34644203_618036801889586_7116528851173244928_o.jpg?_nc_cat=0&_nc_eui2=AeEIBsCNmfJj2-xLb_Jr5RgNJpip70L6KC9KITSODkYYIboJPrnH6AUEBUceJxjjIOnO2TrHjDLUwS7x-zHrMfjr-kuNKm2KPFd3xfNyWK6YOQ&oh=1fceba6a71581733d21564f82e39ff05&oe=5BA97568'}><img className={'photo anim4'} src={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/34644203_618036801889586_7116528851173244928_o.jpg?_nc_cat=0&_nc_eui2=AeEIBsCNmfJj2-xLb_Jr5RgNJpip70L6KC9KITSODkYYIboJPrnH6AUEBUceJxjjIOnO2TrHjDLUwS7x-zHrMfjr-kuNKm2KPFd3xfNyWK6YOQ&oh=1fceba6a71581733d21564f82e39ff05&oe=5BA97568'}/></a>
                        <a target={'_blank'} href={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/34726151_618036908556242_3277462889010561024_n.jpg?_nc_cat=0&_nc_eui2=AeG3suPhD1S68CeTVpbnQRscSBNQY-CpgYYgst-mIGLwnstgmHh0B0QXrSJuNDJOj-rGP33gtq9dLj96wP2INiD5xjsYO_FeeygP8QRz0AYHHQ&oh=f49b18da8a43db5a9cb0845cf83dc350&oe=5BAB3BF0'}><img className={'photo anim5'} src={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/34726151_618036908556242_3277462889010561024_n.jpg?_nc_cat=0&_nc_eui2=AeG3suPhD1S68CeTVpbnQRscSBNQY-CpgYYgst-mIGLwnstgmHh0B0QXrSJuNDJOj-rGP33gtq9dLj96wP2INiD5xjsYO_FeeygP8QRz0AYHHQ&oh=f49b18da8a43db5a9cb0845cf83dc350&oe=5BAB3BF0'}/></a>
                        <a target={'_blank'} href={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/35132820_621724778187455_6194399875233218560_n.jpg?_nc_cat=0&_nc_eui2=AeERRvZmHIhkOoR8SOis7UaCBxbNGT7KK20DCN2j0-in6ErSam5MrRzOgtTqy3S3iOkpvfEBnyyIQBV5-EhrgrG-1t4EGKdhCWoOEgEyfdRYbg&oh=7bf7317ac53924276dcc2c7367433cb1&oe=5BBAFB5D'}><img className={'photo anim6'} src={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/35132820_621724778187455_6194399875233218560_n.jpg?_nc_cat=0&_nc_eui2=AeERRvZmHIhkOoR8SOis7UaCBxbNGT7KK20DCN2j0-in6ErSam5MrRzOgtTqy3S3iOkpvfEBnyyIQBV5-EhrgrG-1t4EGKdhCWoOEgEyfdRYbg&oh=7bf7317ac53924276dcc2c7367433cb1&oe=5BBAFB5D'}/></a>
                        <a target={'_blank'} href={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/35198979_621725008187432_4691972215753670656_n.jpg?_nc_cat=0&_nc_eui2=AeHHHv-tYtELJ2cS0NHbgIYcRti7VzoVnjR0Ma15x_q5qFVv4QxxAd7i5E_NWBco1haV_lpOlES9onTUWlq38giZ6pjccj9yzZY60Q8uL9T0Gw&oh=c5da9f4c01c4a6ce4f3be29ee40ed332&oe=5BEBC6E7'}><img className={'photo anim7'} src={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/35198979_621725008187432_4691972215753670656_n.jpg?_nc_cat=0&_nc_eui2=AeHHHv-tYtELJ2cS0NHbgIYcRti7VzoVnjR0Ma15x_q5qFVv4QxxAd7i5E_NWBco1haV_lpOlES9onTUWlq38giZ6pjccj9yzZY60Q8uL9T0Gw&oh=c5da9f4c01c4a6ce4f3be29ee40ed332&oe=5BEBC6E7'}/></a>
                        <a target={'_blank'} href={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/35266445_621724748187458_586956647352500224_n.jpg?_nc_cat=0&_nc_eui2=AeGrYfKu4NX_tSUY06CwEJndDs03T6f9Hg-YcVVjzhVEcAByu2ZTyY9z92pQRG_q-9M_ARwsVzyIvO2bHXLRzmsMru84GNVkdUMvC1ovAWU1kg&oh=bbb26350129b084c6877455c8cbfe2ba&oe=5BA32827'}><img className={'photo anim8'} src={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/35266445_621724748187458_586956647352500224_n.jpg?_nc_cat=0&_nc_eui2=AeGrYfKu4NX_tSUY06CwEJndDs03T6f9Hg-YcVVjzhVEcAByu2ZTyY9z92pQRG_q-9M_ARwsVzyIvO2bHXLRzmsMru84GNVkdUMvC1ovAWU1kg&oh=bbb26350129b084c6877455c8cbfe2ba&oe=5BA32827'}/></a>
                        <a target={'_blank'} href={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/35239606_621724448187488_8039987772326412288_n.jpg?_nc_cat=0&_nc_eui2=AeEMuqDBriQYtipDpMFA66qJjWjY6kDPsZhbmTTV46UZ0HTwa0XIv_0eHg4TJhVNzJJ8U4imKvchOAC2uQxBHM3NCaR-uXnClA5u6Ld06u27nw&oh=2826d78f43ba11830883a12198a40380&oe=5BBF630F'}><img className={'photo anim9'} src={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/35239606_621724448187488_8039987772326412288_n.jpg?_nc_cat=0&_nc_eui2=AeEMuqDBriQYtipDpMFA66qJjWjY6kDPsZhbmTTV46UZ0HTwa0XIv_0eHg4TJhVNzJJ8U4imKvchOAC2uQxBHM3NCaR-uXnClA5u6Ld06u27nw&oh=2826d78f43ba11830883a12198a40380&oe=5BBF630F'}/></a>
                        <a target={'_blank'} href={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/35198979_621725008187432_4691972215753670656_n.jpg?_nc_cat=0&_nc_eui2=AeHHHv-tYtELJ2cS0NHbgIYcRti7VzoVnjR0Ma15x_q5qFVv4QxxAd7i5E_NWBco1haV_lpOlES9onTUWlq38giZ6pjccj9yzZY60Q8uL9T0Gw&oh=c5da9f4c01c4a6ce4f3be29ee40ed332&oe=5BEBC6E7'}><img className={'photo anim10'} src={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/35296905_621724871520779_3878890161651580928_n.jpg?_nc_cat=0&_nc_eui2=AeH1F3z_R6f_V7BUEbnjwYsAp8_9y-Kevagmy6O3m1zdUzXGjTZ0TMIXVVsipPddjJv_ozqTnI2yZdKYKJ--AFi3ih__-0YD2FlYwd5ny681FA&oh=cfd4c193e72052e276bac32388364fa8&oe=5BBFB307'}/></a>
                        <a target={'_blank'} href={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/35229188_621724938187439_7864844323165044736_n.jpg?_nc_cat=0&_nc_eui2=AeG_BkPljzO8Eeql27LwLanFnalJqts2KITx-CM40YBgayPRoNuHmV5C64cvjex7ez2kDMj1z_mfn9u_kp09IQXEIVXS-Hq7nCxzIpyWyiBjPw&oh=418be170bcd5685dcc59fc16f0b57bbe&oe=5BA36CE5https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/35229188_621724938187439_7864844323165044736_n.jpg?_nc_cat=0&_nc_eui2=AeG_BkPljzO8Eeql27LwLanFnalJqts2KITx-CM40YBgayPRoNuHmV5C64cvjex7ez2kDMj1z_mfn9u_kp09IQXEIVXS-Hq7nCxzIpyWyiBjPw&oh=418be170bcd5685dcc59fc16f0b57bbe&oe=5BA36CE5'}><img className={'photo anim11'} src={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/35229188_621724938187439_7864844323165044736_n.jpg?_nc_cat=0&_nc_eui2=AeG_BkPljzO8Eeql27LwLanFnalJqts2KITx-CM40YBgayPRoNuHmV5C64cvjex7ez2kDMj1z_mfn9u_kp09IQXEIVXS-Hq7nCxzIpyWyiBjPw&oh=418be170bcd5685dcc59fc16f0b57bbe&oe=5BA36CE5'}/></a>
                        <a target={'_blank'} href={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/35191369_621724901520776_9068286875239710720_n.jpg?_nc_cat=0&_nc_eui2=AeFxGWmobWk9JihdswzQh7pVqmzImWEqCB4pvuVE5BUhFC8wZF38BgWjpFWP_sxlBzakeJ3rKLu1hqI2rDVvWpD7HjzvtmSSG2UDAhodGSjLrQ&oh=fdae3f76f88491b176a4805afd0bb058&oe=5BA27BB9'}><img className={'photo anim12'} src={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/35191369_621724901520776_9068286875239710720_n.jpg?_nc_cat=0&_nc_eui2=AeFxGWmobWk9JihdswzQh7pVqmzImWEqCB4pvuVE5BUhFC8wZF38BgWjpFWP_sxlBzakeJ3rKLu1hqI2rDVvWpD7HjzvtmSSG2UDAhodGSjLrQ&oh=fdae3f76f88491b176a4805afd0bb058&oe=5BA27BB9'}/></a>
                        <button className={'projects-light'} type="button" onClick={() => this.setState({ isOpen: true })}>
                            Check out my work!
                        </button>

                        {isOpen && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={images[(photoIndex + 1) % images.length]}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                onCloseRequest={() => this.setState({ isOpen: false })}
                                onMovePrevRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + images.length - 1) % images.length
                                    })
                                }
                                onMoveNextRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + 1) % images.length
                                    })
                                }
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}


export default Projects