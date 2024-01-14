import React from 'react'
import { Col, Row } from 'react-grid-system'
import { useParams } from 'react-router-dom'
import '../../App.css'
import './style.css'
import MoreImg from '../../assets/more_img.png'
import Commentary from '../commentary'

export default function SingleComponent() {
    const { email } = useParams()
    return (
        <>
            <div className='single_section'>
                <div className='container'>
                    <div className='single_wrapper'>
                        <Row className='single_row'>
                            <Col className='single_col' lg={3}>
                                <div className='single_sticky_box'>
                                    <h4 className='single_sticky_title'>Alisher Isaevdan biznes va IT bo’yicha master klass</h4>
                                    <Row>
                                        <Col className="single_col_col" lg={6}>
                                            <p>
                                                <i class='bx bx-calendar'></i>
                                                17.01.2022
                                            </p>
                                        </Col>
                                        <Col className="single_col_col" lg={6}>
                                            <p>
                                                <i class='bx bxs-time-five'></i>
                                                15:00
                                            </p>
                                        </Col>
                                        <Col className="single_col_col" lg={6}>
                                            <p>
                                                <i class='bx bx-rss' ></i>
                                                Online
                                            </p>
                                        </Col>
                                        <Col style={{ marginTop: "50px" }} className="single_col_col" lg={12}>
                                            <p>
                                                <i class='bx bx-share-alt' ></i>
                                                Ulashing
                                            </p>
                                        </Col>
                                        <Col style={{ display: "flex", alignItems: "center" }} className="single_col_col" lg={12}>
                                            <a className='single_social_link' href="https://facebook.com"><i class='bx bxl-facebook'></i></a>
                                            <a className='single_social_link' href="https://instagram.com"><i class='bx bxl-instagram' ></i></a>
                                            <a className='single_social_link' href="https://telegram.com"><i class='bx bxl-telegram' ></i></a>
                                            <a className='single_social_link' href="https://twitter.com"><i class='bx bxl-twitter' ></i></a>
                                            <a className='single_social_link' href="https://discord.com"><i class='bx bxl-discord-alt' ></i></a>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col className='single_col' lg={9}>
                                <div className='single_big_box'>
                                    <h4 className='single_big_title'>Alisher Isaevdan biznes va IT bo’yicha master klass</h4>
                                    <p className='single_big_text'>
                                        Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya'ni UX/UI dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" to'plashga qaror qildik.
                                    </p>

                                    <img className='single_img' src={MoreImg} alt="" />
                                    <p className='single_big_text'>
                                        Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi uch soha vakillari, ya'ni UX/UI dizayner, frontend va backend dasturchilarni "bir dasturxon atrofida" to'plashga qaror qildik.
                                    </p>
                                    <p className='single_big_text'>
                                        Kuni kecha bo'lib o'tgan uchrashuvda to'rt kishidan iborat 8 ta guruh tashkil qilinib, ularga ikki hafta muddat ichida Toshkent shahridagi har qanday onlayn va oflayn tadbirlar to'g'risida e'lonli ma'lumot beruvchi uch bosqichli veb sahifa tayyorlash vazifasi topshirildi.
                                    </p>
                                    <p className='single_big_text'>
                                        Demak, roppa-rosa 2 haftadan keyin ishtirokchilarning qilgan ishlari chetdan kelgan mehmonlar tomonidan xolis baholanib, dastlabki uchta o'rin egalari qimmatbaho sovg'alar bilan taqdirlanadi. Biz barchaga omad tilab qolamiz.
                                    </p>
                                </div>
                                <Commentary />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}
